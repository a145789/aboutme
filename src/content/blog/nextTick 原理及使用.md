---
date: 2023/04/03 15:20
---

# nextTick 作用

`vue` 官网对 [nextTick](https://cn.vuejs.org/api/general.html#nexttick) 的介绍为 **等待下一次 `DOM` 更新刷新的工具方法**。首先什么是 `DOM` 更新。

## Dom 更新

```js
document.querySelector('div').innerHTML = 'Dom 更新'
console.log(document.querySelector('div').innerHTML) // 会输出 Dom 更新
```

`Dom` 更新需要先对 `Dom` 对象上的属性做修改，例如修改某个节点 `innerHTML`，这一步是同步的，然后浏览器会异步更新 `DOM`。但对于 `Vue` 而言，响应式更新帮我们隐去了这一步。

```html
<template>
  <div class="aka">{{a}}</div>
  <button @click="fn">click</button>
</template>

<script setup>
  const a = ref('')

  function fn() {
    a.value = 'Dom 更新'
  }
</script>
```

每次点击 `button` 更改 `a.value` 就会触发 `Dom` 更新。但如上文更改 `Dom` 属性是同步的，倘若代码是这样的

```html
<template>
  <div>{{a}}|{{b}}</div>
  <button @click="fn">click</button>
</template>

<script setup>
  const a = ref('')
  const b = ref('')

  function fn() {
    for (let i = 1; i <= 1000; i++) {
      a.value = `Dom 更新, ${i}`
      b.value = `Dom 更新, ${i}`
    }
  }
</script>
```

意味着需要修改 `Dom` 属性 `1000` 次，这显然极其浪费性能而且是无意义的，因为对于浏览器来说在执行异步的渲染任务前即便修改了 `1000` 次 `Dom`，也只会渲染 `Dom 更新, 1000` 这最后一次修改。所以 `Vue` 内部也采用了一样的办法，异步的更新 `Dom` 属性。

## Vue 内部的异步更新

当模板上这样展示 `{{ a }}` ，即在编译好的渲染函数中访问响应式变量 `a`， 会为 `a` 添加一个 dep，当 `a` 变更后重新执行此 `dep`。在 [源码](https://github.com/vuejs/core/blob/59e828448e7f37643cd0eaea924a764e9d314448/packages/runtime-core/src/renderer.ts#L1545) 中

```ts
const update: SchedulerJob = () => effect.run()
update.id = instance.uid
// create reactive effect for rendering
const effect = (instance.effect = new ReactiveEffect(
  componentUpdateFn,
  () => queueJob(update),
  instance.scope, // track it in component's effect scope
))
```

先通过 `new ReactiveEffect` 生成一个 `effect` ，传入的第一个参数会在 `ReactiveEffect` 内部保存为一个 `fn`，然后 `ReactiveEffect` 返回一个 `run` 函数，执行 `effect.run()`，就会执行内部的 `this.fn()` 即 `componentUpdateFn`，把这个 `effect` 当做 `dep` 添加到响应式变量 `a` 的 `deps` 中，`a` 变更后再执行 `dep.run()` 。但这仍然是同步更改，`a.value` 被赋值 `1000` 次，就会执行 `1000` 次 `componentUpdateFn` 。所以 `ReactiveEffect` 可以传入第二个变量，允许你自定义怎么调用 `effect.run()`，在内部保存为 `scheduler`。源码中将 `effect.run()` 传入到 `queueJob` 函数，而 `queueJob` 函数就可以异步的延迟调用 `effect.run()`。[源码](https://github.com/vuejs/core/blob/59e828448e7f37643cd0eaea924a764e9d314448/packages/runtime-core/src/scheduler.ts#LL79-L107C2)：

```ts
export function queueJob(job: SchedulerJob) {
  if (
    !queue.length ||
    !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)
  ) {
    if (job.id == null) {
      queue.push(job)
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job)
    }
    queueFlush()
  }
}

function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true
    currentFlushPromise = resolvedPromise.then(flushJobs)
  }
}
```

首先 `effect.run()` 会被当做一个 `job` 传入到 `queueJob` 函数，如果 `a.value` 变更后，传入的 `job` 不在 `queue` 中，那么此 `job` 就会被添加到 `queue` 并且调用 `queueFlush` 函数，这样即便触发了 `1000` 次更新，只要 `queue` 包含这个更新，只执行一次就可以了，并且同一任务内 `b.value` 变更也不会再存入一个 `job`，因为渲染函数存入 `a` `b` 的 `dep` 是相同的。其实从这里就可以解决多次触发的问题，但是同步更新 `Dom` 可能会引起回流或者重绘，因此 `Vue` 通过 [resolvedPromise](https://github.com/vuejs/core/blob/59e828448e7f37643cd0eaea924a764e9d314448/packages/runtime-core/src/scheduler.ts#L47) 创建了一个微任务，将所有的更新推迟到微任务中，一次性更新 `Dom` 。

## nextTick

讲到这里，`nextTick` 的作用就出来了，当 `Vue` 在微任务中修改 `Dom` 属性后，在当前任务中是拿不到被修改后的 `Dom` 属性的。

```html
<template>
  <div>{{a}}</div>
  <button @click="fn">click</button>
</template>

<script setup>
  const a = ref('')

  function fn() {
    for (let i = 1; i <= 1000; i++) {
      a.value = `Dom 更新, ${i}`
    }

    console.log(document.querySelector('div').innerHTML) // 输出空字符串
    Promise.resolve().then(() => {
      console.log(document.querySelector('div').innerHTML) // 输出 Dom 更新, 1
    })
  }
</script>
```

`nextTick` 也是对 `Promise.resolve` 的封装

```ts
const resolvedPromise = /* #__PURE__ */ Promise.resolve() as Promise<any>
export function nextTick<T = void>(this: T, fn?: (this: T) => void): Promise<void> {
  const p = currentFlushPromise || resolvedPromise

  return fn ? p.then(this ? fn.bind(this) : fn) : p
}
```

`currentFlushPromise` 不为空的情况下，优先使用 `currentFlushPromise`。

```ts
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true
    currentFlushPromise = resolvedPromise.then(flushJobs)
  }
}
```

`currentFlushPromise` 被赋值为一个 `promise`，当 `flushJobs` 函数执行完后，也就是 `Dom` 属性更新完后就会执行 `nextTick` 的回调，而在这个回调函数中就可以得到被修改后的 `Dom` 属性值。
