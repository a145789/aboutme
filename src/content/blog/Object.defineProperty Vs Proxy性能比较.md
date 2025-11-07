---
date: 2024/01/16 09:52
---

逛掘金的时候经常能刷到关于 `Vue` 响应式原理的文章， 经常能看到 `Vue3` 弃用 `Object.defineProperty` 转而使用 `Proxy` 来实现的原因是 `Proxy 性能更好` 。看的多了还能刷到一些文章认为 `Object.defineProperty` 性能更好，因此自己创建了一个小 [demo](https://github.com/a145789/object-defineproperty-vs-proxy) 来对比二者在不同场景下的性能。

> 以下测试仅在 `谷歌浏览器` 中进行，不同浏览器内核不同，结果可能有差异。可以访问此 [在线地址](https://a145789.github.io/object-defineproperty-vs-proxy/) 测试其他环境下的性能。

# 封装响应式

本文不会详细解析基于 `Object.defineProperty` 和 `Proxy` 的封装代码，这些内容在多数文章中已有介绍。`Vue3` 对嵌套对象的响应式处理进行了优化，采用了一种`惰性添加`的方式，仅在对象被访问时才添加响应式。相比之下，`Vue2` 采用了一次性递归处理整个对象的方式添加响应式。为了确保比较的公平性，本文下面的 `Object.defineProperty` 代码也采用了相同的惰性添加策略。

## Object.defineProperty

```js
/** Object.defineProperty 深度监听 */
export function deepDefObserve(obj, week) {
  const keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    let value = obj[key]

    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      get() {
        if (typeof value === 'object' && value !== null && week && !week.has(value)) {
          week.set(value, true)
          deepDefObserve(value)
        }
        return value
      },
      set(newValue) {
        value = newValue
      },
    })
  }
  return obj
}
```

## Proxy

```js
/** Proxy 深度监听 */
export function deepProxy(obj, proxyWeek) {
  const myProxy = new Proxy(obj, {
    get(target, property) {
      const res = Reflect.get(target, property)
      if (typeof res === 'object' && res !== null && proxyWeek && !proxyWeek.has(res)) {
        proxyWeek.set(res, true)
        return deepProxy(res)
      }
      return res
    },
    set(target, property, value) {
      return Reflect.set(target, property, value)
    },
  })
  return myProxy
}
```

# 测试性能

测试场景有五个：

1. 使用两个 `API` 创建响应式对象的耗时，即 `const obj = reactive({})` 的耗时
2. 测量对已创建的响应式对象的属性进行访问的速度，即 `obj.a` 的读取时间。
3. 测量修改响应式对象属性值的耗时，即执行 `obj.a = 1` 所需的时间。
4. 创建多个响应式对象，并模拟访问和修改它们属性的操作，以评估在多对象场景下的性能表现。
5. 针对嵌套对象进行响应式性能测试，以评估在复杂数据结构下的性能表现。

## 初始化性能

```js
const _0_calling = {
  useObjectDefineProperty() {
    const data = { a: 1, b: 1, c: 1, d: 1, e: 1 }
    const keys = Object.keys(data)
    for (let i = 0; i < keys.length; i++) {
      Object.defineProperty(data, keys[i], {
        get() {},
        set() {},
      })
    }
  },
  useProxy() {
    const data = { a: 1, b: 1, c: 1, d: 1, e: 1 }
    const proxy = new Proxy(data, {
      get() {},
      set() {},
    })
  },
}
```

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ede8a5c56604d7da9cec5ca81b3a845~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1160&h=474&s=47379&e=png&b=ffffff)

很明显，`Proxy` 的性能优于 `Object.defineProperty`。

## 读取性能

```js
const readDefData = deepDefObserve({ a: 1, b: 1, c: 1, d: 1, e: 1 })
const readProxyData = deepProxy({ a: 1, b: 1, c: 1, d: 1, e: 1 })
export const _1_read = {
  useObjectDefineProperty() {
    readDefData.a
    readDefData.b
    readDefData.e
  },
  useProxy() {
    readProxyData.a
    readProxyData.b
    readProxyData.e
  },
}
```

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4408d9066b7c42629b18d408cba16967~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1172&h=488&s=48433&e=png&b=ffffff)

`Object.defineProperty` 明显优于 `Proxy`。

## 写入性能

```js
const writeDefData = deepDefObserve({ a: 1, b: 1, c: 1, d: 1, e: 1 })
const writeProxyData = deepProxy({ a: 1, b: 1, c: 1, d: 1, e: 1 })
export const _2_write = {
  count: 2,
  useObjectDefineProperty() {
    writeDefData.a = _2_write.count++
    writeDefData.b = _2_write.count++
  },
  useProxy() {
    writeProxyData.a = _2_write.count++
    writeProxyData.b = _2_write.count++
  },
}
```

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/550fda8e434041d2beb66c7e8131be1c~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1161&h=481&s=48286&e=png&b=ffffff)

`Object.defineProperty` 优于 `Proxy`，不过差距不大。

## 多次创建及读写

```js
export const _4_create_read_write = {
  count: 2,
  useObjectDefineProperty() {
    const data = { a: 1, b: 1, c: 1, d: 1, e: 1 }
    deepDefObserve(data)
    data.a = _4_create_read_write.count++
    data.b = _4_create_read_write.count++
    data.a
    data.c
  },
  proxyWeek: new WeakMap(),
  useProxy() {
    const data = { a: 1, b: 1, c: 1, d: 1, e: 1 }
    const proxy = deepProxy(data, _4_create_read_write.proxyWeek)
    proxy.a = _4_create_read_write.count++
    proxy.b = _4_create_read_write.count++
    proxy.a
    proxy.c
  },
}
```

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c29719b242b840c383a5848de73b3a4f~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1164&h=474&s=50534&e=png&b=ffffff)

`Proxy` 优势更大，但这个场景并不多见，很少会出现一次性创建大量响应式对象的情况，对属性的读写场景更多。

## 对嵌套对象的性能

### 对内部的每个属性都进行读或写操作

```js
const deepProxyWeek = new WeakMap()
const defWeek = new WeakMap()
export const _5_deep_read_write = {
  count: 2,
  defData: deepDefObserve(
    {
      res: {
        code: 200,
        message: {
          error: null,
        },
        data: [
          {
            id: 1,
            name: '1',
          },
          {
            id: 2,
            name: '2',
          },
        ],
      },
    },
    defWeek,
  ),
  useObjectDefineProperty() {
    _5_deep_read_write.defData.res.code = _5_deep_read_write.count++
    _5_deep_read_write.defData.res.data[0].id = _5_deep_read_write.count++
    _5_deep_read_write.defData.res.message.error
    _5_deep_read_write.defData.res.data[0].id
    _5_deep_read_write.defData.res.data[0].name
    _5_deep_read_write.defData.res.data[1].id
    _5_deep_read_write.defData.res.data[1].name
  },
  proxyData: deepProxy(
    {
      res: {
        code: 200,
        message: {
          error: null,
        },
        data: [
          {
            id: 1,
            name: '1',
          },
          {
            id: 2,
            name: '2',
          },
        ],
      },
    },
    deepProxyWeek,
  ),
  useProxy() {
    _5_deep_read_write.proxyData.res.code = _5_deep_read_write.count++
    _5_deep_read_write.proxyData.res.data[0].id = _5_deep_read_write.count++
    _5_deep_read_write.proxyData.res.message.error
    _5_deep_read_write.proxyData.res.data[0].id
    _5_deep_read_write.proxyData.res.data[0].name
    _5_deep_read_write.proxyData.res.data[1].id
    _5_deep_read_write.proxyData.res.data[1].name
  },
}
```

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6abc1694b9714c69baa7f414e84cf1b7~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1163&h=474&s=50864&e=png&b=ffffff)

`Object.defineProperty` 会稍好一些，但两者的差距不大。

### 只读取修改嵌套对象的浅层属性

```js
const _6_deepProxyWeek = new WeakMap()
const _6_defWeek = new WeakMap()
export const _6_update_top_level = {
  count: 2,
  defData: deepDefObserve(
    {
      res: {
        code: 200,
        message: {
          error: null,
        },
        data: [
          {
            id: 1,
            name: '1',
          },
          {
            id: 2,
            name: '2',
          },
        ],
      },
    },
    _6_deepProxyWeek,
  ),
  useObjectDefineProperty() {
    _6_update_top_level.defData.res.code = _6_update_top_level.count++
    _6_update_top_level.defData.res.message.error
  },
  proxyData: deepProxy(
    {
      res: {
        code: 200,
        message: {
          error: null,
        },
        data: [
          {
            id: 1,
            name: '1',
          },
          {
            id: 2,
            name: '2',
          },
        ],
      },
    },
    _6_defWeek,
  ),
  useProxy() {
    _6_update_top_level.proxyData.res.code = _6_update_top_level.count++
    _6_update_top_level.proxyData.res.message.error
  },
}
```

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/511ce2bf724a4a2b903973b39aecee6a~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1138&h=457&s=49562&e=png&b=ffffff)

这个场景 `Proxy` 略优于 `Object.defineProperty` 。

# 总结

`Proxy` 在对象创建时的性能明显优于`Object.defineProperty`。而在浅层对象的读写性能方面，`Object.defineProperty` 表现更好。但是当对象的嵌套深度增加时，`Object.defineProperty` 的优势会逐渐减弱。尽管在性能测试中，`Object.defineProperty` 的读写优势可能更适合实际开发场景，但在 `谷歌浏览器` 中，`Proxy` 的性能与 `Object.defineProperty` 并没有拉开太大差距。因此，`Vue3` 选择 `Proxy` 不仅仅基于性能考量，还因为 `Proxy` 提供了更为友好、现代且强大的 `API` ，使得操作更加灵活。
