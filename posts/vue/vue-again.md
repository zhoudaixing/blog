---
title: Vue Again
date: 2024-03-28
tags: [vue]
categories: [Vue]
---
Vue 基础复习
---

# 基础



## Create Vue

```sh
$ npm create vue@latest
```



## createApp

```js
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.mount(#app)
```



## 模板语法

- **文本插值**

```html
<span>{{ msg }}</span>
```

- `v-html`

```html
<p><span v-html="rawHtml"></span></p>
```

- `v-bind`

```html
<div v-bind:id="dynamicId"></div>
<div :id="dynamicId"></div>
<!-- 同名简写 -->
<div :id></div>
<div v-bind="obj"></div>
```

- **JS 表达式**

```html
{{ number + 1}}
{{ ? : }}
<!-- 调用函数 -->
<span :title="toTitle()"></span>
<!-- 模板中的表达式被沙盒化，只能访问有限的全局对象，例如 Math 以及 Date -->
```

- **指令 Directives**

```html
<p v-if="boolean"></p>
<a @click="handle"></a>
<!-- 动态参数中表达式的值应当是字符串或 null -->
<a :[attrName]="url"></a>
<!-- 动态参数表达式有语法限制，不能含空格和引号，且直接写在 HTML 文件时，大写字母会被强制转换为小写 -->
```

修饰符 //TODO



## 响应式基础

`ref()`

`<script setup>`

`reactive()`

ref 解包



## 计算属性

`computed()`

```js
const msg = computed(() => {
  return arr.length > 0 ? 'Yes' : 'No'
})
```

`computed()` 接受一个 getter 函数，返回一个**计算属性** ref，可通过 `.value` 访问。

### vs 方法

计算属性具有缓存，只有在其**响应式依赖**更新时才重新计算。

方法总是在重新渲染时再次执行。

**可写计算属性**

默认只读。同时提供 getter 和 setter 来创建可写。

```js
const firstName = ref('John')
const lastName = ref('Doe')
const fullName = computed({
  get() {
    return firstName.value + ' ' + lastName.value
  }
  set(newValue) {
  	[firstName.value, lastName.value] = newValue.split(' ')
	}
})
```

*通常 setter 也不会直接改变计算属性的值*

### 最佳实践

getter 不应有副作用

计算属性返回的值应当看作快照，不应被手动更改



## Class 与 Style 绑定

### HTML class

```vue
<div :class="{ active: isActive }"></div>
<div class="static" :class="{ active: isActive }"></div>
<div :class="obj"></div>
<div :class="[isActive ? active : '', errorClass]"></div>
```

在只有一个根元素的组件上使用 `class` 时，class 会和该元素已有的 class 合并。

### 内联样式

```vue
<div :style="obj"></div>
<div :style="[obj1, obj2]"></div>
```

camelCase kebab-cased 都支持

自动前缀：需要浏览器特殊前缀的 CSS 属性会被 Vue 自动加上。

样式多值：属性的值如果使用数组，仅为渲染浏览器支持的最后一个值。



## 条件渲染

`v-if` `v-else` `v-else-if`

会导致条件区块内的事件监听器和子组件都被销毁和重建

批量切换元素可以使用 `<template` 包裹，在 `<template>` 上使用 `v-if`

*类似 React 的 `<></>` 空标签 `<Fragment>`*



`v-show` 仅切换 CSS 的 `display` 属性



`v-if` & `v-for`

不推荐同时使用，同时使用二者的优先级不明显。

位于同一个元素上时，`v-if` 会先被执行，所以无法访问到 `v-for` 作用域内定义的变量别名 e.g. item

最佳实践：在外围包裹 `<template>`

需要控制整个元素列表的渲染则在 `<template>` 上使用 `v-if`，内部使用 `v-for`

需要控制某个子元素的渲染则在 `<template>` 上使用 `v-for`，内部使用 `v-if` （或者考虑使用计算属性）



## 列表渲染

`v-for`

```vue
<li v-for="item in items">{{ item.msg }}</li>
<li v-for="(item, index) in items">{{ item.msg }}</li>
```



### 遍历对象属性

遍历顺序基于 `Object.keys()`

```vue
<li v-for="value in obj"></li>
<li v-for="(value, key, index) in obj"></li>
```



整数值

```vue
<li v-for="n in 10"></li>
```

`n` 的初值为 `1`



key

默认按”就地更新“的策略更新 `v-for` 列表，会导致数据项顺序改变时，对每个改变的都进行替换

为了重用和重排现有元素，使用 `key`

```vue
<li v-for="item in items" :key="item.id"></li>
```

除非迭代内容不含组件 or 有状态，不然推荐任何可行的时候都使用 `key`

`key` 的值期望是基础类型，字符串 or number



### 数组变化侦测

会改变数组自身的方法会触发更新

替换也会，而且实现了对重复对象的重用

使用计算属性 or 函数来对数组过滤/排序

计算属性中使用 `reverse()` `sort()` 会改变原数组，建议创建副本再操作 e.g. `[...number].sort()`



## 事件处理

### 监听事件

`v-on` `@`

`@click="handler"`

- **内联事件处理器**

`@click="count++"`

- **方法事件处理器**

`@click="fn"`

模板编译器通过检查 `v-on` 的值来判断事件处理器

`foo` `foo.bar` `foo['bar']` 会被视为方法事件处理器

`foo()` `count++` 会被视为内联事件处理器

内联处理器调用方法可以传入自定义参数代理原生事件

```vue
<button @click="say('hello')"></button>
```

内联处理器也可以访问事件参数 `$event`

```vue
<button @click="say('hello', $event)"></button>
<button @click="(event) => say('hello', event)"></button>
```



### 事件修饰符

`event.preventDefault()` `event.stopPropagation()`

可以在方法内调用，为让方法更专注处理逻辑，为 `v-on` 提供修饰符处理这些

注意顺序

stop prevent self capture once passive

**按键修饰符** `@keyup.enter`

使用 `KeyboardEvent.key` 暴露的名称作修饰符

系统按键修饰符

`.exact` 修饰符

**鼠标按键修饰符**



## 表单输入绑定

`v-model`

`<input>` `<textarea>` 绑定 `value` 侦听 `input`

`<input type="checkbox">` `<...radio>` 绑定 `checked` 侦听 `input`

`<select>` 绑定 `value` 侦听 `change`

使用 IME 的语言在拼字阶段触发更新需要手写 `input`

多个复选框可以绑定到同一数组/集合



值绑定 `:value` `:true-value` `:false-value`

 

### 修饰符

`.lazy` 在 `change` 后更新，而不是 `input` 后

`.number` `.trim`



## 生命周期

`onMounted` `onUpdated` `onUnmounted`

自动将回调函数注册到当前实例，需要**同步**注册



## 侦听器

`watch(data, fn)`

data 可以是：ref、响应式对象、getter 函数、数组

**注意**：响应式对象的属性值需要通过 getter 返回

### 深层侦听器

直接传入响应式1对象，会创建深层侦听器

getter 返回对象只有返回不同对象才触发

`{ deep: true }` 强制转成深层



### 即使回调

默认懒执行，只有数据源变化才会执行回调。

` { immediate: true }`创建时立即执行



一次性 `{ once: true }`



`watchEffect(fn)` 

自动跟踪回调的响应式依赖，类似计算属性

如果是异步回调，只追踪第一个 `await` 正常工作前访问到的属性



### 回调的触发时机

默认下，父组件更新后，所属组件的 DOM 更新前

后置刷新： `{ flush: 'post' }` `watchPostEffect()`

同步触发：`{ flush: 'sync'}` `watchSyncEffect()` 会在 Vue 进行任何更新前触发，不会进行批处理



### 停止异步侦听器

异步回调创建的侦听器不会绑定到当前组件上，需要手动停止，防止内存泄漏。

调用 `watch` `watchEffect` 返回的函数即可



## 模板引用

`ref` attribute

```vue
<script setup>
  const input = ref(null)
</script>

<template>
	<input ref="input" />
</template>
```

mounted 后才能访问模板引用，需要考虑 ref 为 `null` 的情况



`v-for` 中使用时，ref 包含的是一个数组，**不**保证与源数组相同顺序



`:ref="(el) => {}"` 组件更新拆卸时都会调用，拆卸时 `el` 为 `null`



对组件使用 `ref` 会得到该组件的 `this`，可以访问每一个属性和方法

`<script setup>` 除外，其组件默认私有，除非通过 `defineExpose` 宏显式暴露

```vue
<script setup>
  const a
  defineExpose({
    a
  })
</script>
```



## 组件基础

### 传递 props

`defineProps` 宏

```vue
<script setup>
defineProps(['title'])
</script>

<template>
	<h4>{{ title }}</h4>
</template>
```

非 `<script setup>`

```js
export default {
	props: ['title'],
  setup(props) {
    console.log(props.title)
  }
}
```



### 监听事件

父组件 `@<事件名称>=“处理函数”`

子组件 `$emit(事件名称)`

`const emit = defineEmits(['事件名称'])` 

`setup(props, ctx)` `ctx.emit()`



`<solt />`



### 动态组件

```vue
<component :is="tabs[currentTab]"></component>
```

切换掉的组件会被卸载，通过 `<KeepAlive>` 可以保活



# 深入组件

## 注册

### 全局

`app.component('name', component)`

可以链式调用



### 局部

setup: `import`

no setup: `componets` 选项显式注册



PascalCase 作为组件名



## Props

### Props 声明

组件需要显式声明其接受的 props

`defineProps()` 宏

`props` 选项

`['foo']` `{ title: String }`

```vue
defineProps<{
  title?: string
}>()
```



一个对象上所有的属性当 props 传入

`v-bind=“post”`



### 单向数据流

props 遵循单向绑定原则



### Prop 校验

向 `defineProps()` 宏提供一个带校验选项的对象



### Boolean 类型转换



## 组件事件

### 触发 & 监听

子组件触发自定义事件 `$emit('someEvent')`

父组件监听 `@some-event=""`

组件的触发**没有**冒泡机制，只能直接监听子组件，平级or嵌套应该使用外部事件总线or状态管理



### 事件参数

`$emit('increaseBy', 1)`

`@increase-by="(n) => {}"`



### 声明触发的事件

显式地通过 `defineEmits()` 宏来声明

`const emit = defineEmits(['', ''])`

`<template>` 中可以使用 `$emit`

`<script setup>` 中使用 `defineEmits()` 返回的函数

`setup` 函数中使用第二个参数 `setup(props, ctx) ` `ctx.emit()`



支持对象语法，通过 TS 为参数指定类型，进行验证



自定义事件会覆盖原生事件 e.g. `click`



## 组件 v-model

`defineModel()` 宏

便利宏：

prop: `modelValue`  emit: `update:modelValue`

给 `defineModel` 一个 `default` 但 父组件没有提供值，会导致状态不同步



### `v-model` 参数

### 多个绑定

### 修饰符

```vue

<script setup>
// 自定义修饰符
const [model, modifiers] = defineModel({
  set(value) {
    if (modifiers.capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
    return value
  }
})
</script>
```



## 透传 Attributes

传递给组件，但，没有被声明为 `props` `emit` 的 attrs 或 事件监听器

e.g. `class` `style` `id`

*或许应该是 `key` 而不是 `id` ?*

没有被声明就会透传到子组件根元素上

根元素上的 `class` `style` 会合并

`@click` 也会被透传到根组件，会同时触发本身和继承的监听器



### 深层组件继承

根节点上渲染另一个组件，继续透传

  

### 禁用透传

`defineOptions({ inheritAttrs: false })`

当透传的 attrs 需要应用在根节点以外的元素上时

通过 `$attrs` 访问，包含除了声明外的 attrs，属性名保留大小写，事件监听器会有前缀 on

```vue
<div>
  <button v-bind="$attrs"></button>
</div>
```



### 多根节点

没有自动透传，需要手动将 `$attrs` 显式绑定



### JS 中访问

`<script setup>` 中使用 `useAttrs()` API

`setup()` 中包含着上下文 `ctx.attrs`，是最新的透传，但并不是响应式



## 插槽 Slots

Vue 模板中的表达式只能访问其定义时所处的作用域



### 默认内容

```vue
<slot>
  msg
</slot>
```



### 具名插槽

子组件：`<slot name="header">`

父组件：`<template v-solt:header>` `<template #header>`



支持动态插槽名 `#[dynamicSlotName]`



作用域插槽

子组件向上传递 data： `<solt :text="mgs">`

父组件：
```vue
<MyComponent v-solt="soltProps">{{ soltProps.text }}</MyComponent>
```

具名插槽

`<solt name="" msg="">`

`template #name="props">`



### 无渲染组件



## 依赖注入

prop 逐级传递

`provide('注入名', ' 值')`

注入名可以是字符串或 Symbol

使用 `setup()` 需要确保同步调用

应用层 Provide `app.provide()`

`readonly()` 包装值可以确保不被修改



`const msg = inject('注入名')`

`setup()` 需要同步调用

不要求必须有提供者可以设置默认值，作为 `inject()` 的第二个参数

第三个参数 `true` 表示默认值应该被当作工厂函数，可以避免在不用默认值时进行计算



向上传递数据（修改响应式数据），应该在供给方提供方法函数



## 异步组件

`defineAsyncComponent`

接受一个返回 Promise 的加载函数

```js
const AsyncComp = defineAsyncComponent(() => 
	import('./MyComponent.vue')
)
```

仅在需要时才会调用加载

可以通过 `app.component()` 全局注册

### 加载与错误状态

```js
const AsyncComp = defineAsyncComponent({
  loader: () => import(./A.vue),
  loadingComponent:
  delay:
  errorComponent:
  timeout:
})
```



#  逻辑复用

## 组合式函数 Composables

`use`

封装成一个单独 js，可组合

使用 `watchEffect()` `toValue()` 接受响应式状态



### 约定和最佳实践

use 开头，驼峰命名

处理参数可能为响应式的情况 `toValue()`

返回包含多个 ref 的非响应式对象，方便解构，或者用 reactive 再包装一层

副作用：

SSR：确保挂载后再施行 DOM 相关副作用

确保 `onUnmounted()` 清理副作用



只能同步调用，确保生命周期钩子注册，确保计算属性和监听器会在卸载时销毁



## 自定义指令

只能通过 DOM 操作实现时才应使用

组件上使用会透传到根节点，多根会被忽略。不推荐使用在组件上。

提供一些类似生命周期的钩子函数

参数：`el` `binding` ...



## 插件

