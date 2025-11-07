---
date: 2023/04/05 17:12
---

# 源码解析

```js
const a = computed(() => {
  return b.value + 1
})
```

往 `computed` 中传入一个 `getter`，对应的 `Vue` 源码为

```ts
// 简化后的代码
export function computed<T>(getterOrOptions: ComputedGetter<T> | WritableComputedOptions<T>) {
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR)

  return cRef as any
}
```

通过初始化 `ComputedRefImpl` 得到一个实例。

```ts
export class ComputedRefImpl<T> {
  private _value!: T
  public readonly effect: ReactiveEffect<T>

  public _dirty = true

  constructor(getter: ComputedGetter<T>) {
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true
        triggerRefValue(this)
      }
    })
    this.effect.computed = this
  }

  get value() {
    // the computed ref may get wrapped by other proxies e.g. readonly() #3376
    const self = toRaw(this)
    trackRefValue(self)
    if (self._dirty || !self._cacheable) {
      self._dirty = false
      self._value = self.effect.run()!
    }
    return self._value
  }
}
```

`ComputedRefImpl` 内部有两个属性：一个是 `_value`，一个是 `_dirty`。

当访问 `a.value` 时，会触发 `get value()`，

```ts
export class ComputedRefImpl<T> {
  private _value!: T
  public _dirty = true

  get value() {
    const self = toRaw(this)
    if (self._dirty) {
      self._dirty = false
      self._value = self.effect.run()!
    }
    return self._value
  }
}
```

> 如果 `_dirty` 为 `true`，代表需要获取新值，则重新执行 `getter` 获取到新值赋值到 `_value` 上，并且把 `_dirty` 变为 `false` ，下次再获取这个值的时候就用缓存的值。

而初始化的时候会在 `constructor` 中实例化一个 `ReactiveEffect`，其作用是将实例化后得出来的 `effect` 作为 `dep` 添加到依赖的响应式数据中，一旦响应式数据变更，触发此 `dep`，`ReactiveEffect` 接受两个参数，第一个是 `fn`，第二个是 `scheduler`，一个可以自定义的调用函数。

响应式数据变化后的流程为：

```ts
const b = ref(0)
const a = computed(() => {
  return b.value + 1
})

b.value = 10

// b.value 变更，触发 a 放在 b.value 的 dep ，即 ReactiveEffect 实例化出的 effect
// effect 暴露出一个 run 函数，调用 run 函数会调用传入 ReactiveEffect 的 `fn`
// 如果传入 ReactiveEffect 的第二个参数有值，会优先调用 scheduler，即

class ReactiveEffect {
  constructor(fn, scheduler) {
    this.fn = fn
    this.scheduler = scheduler
  }

  run() {
    return this.fn()
  }
}

const effect = new ReactiveEffect(getter, () => {
  if (!this._dirty) {
    this._dirty = true
  }
})

if (effect.scheduler) {
  effect.scheduler()
} else {
  effect.run()
}
```

数据变更后，当前 `_dirty` 为 `false` ，代表缓存状态，将 `_dirty` 为 `true`，然后依赖此`computed` 数据的其他监听者重新执行， `a.value` 调用 `get value()`。

# 总结

主要相关的就三个 `_dirty` `_value` `传入 ReactiveEffect 的第二个参数`，访问 `computed` 数据的时候，如果 `_dirty` 不为真，就使用缓存值，`computed` 监听的响应式数据变更，调用传入 ReactiveEffect 的第二个参数，将`_dirty`变为真，再次访问 `computed` 数据就重新获取值
