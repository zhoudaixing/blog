---
title: TypeScript 入门
date: 2024-03-26
tags: [typescript]
categories: [typescript]
---
TypeScript 基础
---

# TypeScript

`any` `unknown` `never`

**包装对象 wrapper object**

`boolean` `string` `number` `bigint` `Symbol` 在需要时会自动产生的对象

```typescript
"hello" // 字面量
new String("hello") // 包装对象
```

原始值存在 **包装对象** 和 **字面量** 两种情况

`Boolean` 大写类型包含两种情况

`boolean` 小写类型只包含字面量

`Object` `{}` 包含广义对象

`object` 只包含狭义对象类型：对象，数组、函数，不包括原始类型的值

### 值类型

### 联合类型 `A | B`

`string | number | "1" | "a"`

### 类型缩小 type narrowing

```typescript
if (typeof id === 'string') {
  console.log(id.toUpperCase())
}
```

### 交叉类型 intersction type `A & B`

必须同属两个类型，主要用于表示对象合成

```typescript
let obj: { foo : string} & { bar : string}

obj = {
  foo: 'hello',
  bar: 'world',
}
```

常用于为对象类型添加新属性

### `type` 命令

定义一个类别的别名，不允许重名，块级作用域

`type` 属于类型相关代码，编译成 JS 时会全部删除

### `typeof` 运算符

JS 中返回字符串表示操作数的类型

TS 中返回 TS 类型，只限类型运算

同一段代码可能存在两种 `typeof`

### 类型的兼容

子类型 subtype

## 数组 in TS

所有成员的类型相同

两种写法

```ts
let arr: number[] = [1]
let arr: Array<number> = [1] // 本质属于泛型
```

### 只读数组 `readonly`

```ts
const arr: readonly number[] = [0, 1]
```

`number[]` 是 `readonly number[]` 的子类型，只读数组没有 `pop()`、`push(`) 等方法

所以不能把只读数组传递给一个数组类型的参数，此时需要使用类型断言

```ts
getSum(arr as number[])
```

```ts
const a1: ReadonlyArray<number>
const a2: Readonly<number[]>
```

### `const` 断言

```ts
const arr = [0, 1] as const
```

`as const` 的作用是推断类型是把 `arr` 推断为只读

## 元组 in TS

必须声明每个元素的类型

通常情况下是定长的

```ts
type t1 = [string, number, ...boolean[]]
```

**只读**

`Readonly []`

## Symbol

`let` -> `symbol`

`const` -> `unique symbol`

## 函数 Function

**函数重载 function overload**

逐一定义每种情况 + 本身类型声明，需兼容前者

按顺序检查

优先考虑联合类型

**构造函数**

添加 `new`

## 对象 Object

可选属性

**只读属性**

只读对象可以修改值，但是不能完全替换对象

对于同一个对象的引用，若有一个不为只读，其修改会影响到只读

可以在赋值时使用断言 `as const`

**属性名的索引属性**

```ts
type Obj = {
  [x: number]: string
}
```

`string` 类型最大，而且不能与其冲突

**解构赋值**

注意写法

### 结构类型 structual typing

TS 只检查是否符合结构类型

子类型兼容父类型

**严格字面量检查**

主要用于规避错误 API 使用和拼写错误

**最小可选属性规则**

至少存在一个符号要求的



## interface

### 继承

`extands`

```ts
interface C extands A, B {
}
```

同名属性可以覆盖，但是不能冲突

可以继承 `type` 定义的**对象**

可以继承 `class`

**接口合并**

重复声明的同名接口会合并，同名属性不能冲突，同名方法会重载，后声明的优先级高，排在前面，例外，字面量类型优先级最高

### interface vs. type



## class

### getter & setter

`get <attribute name>()`

### 继承

**implement**

给 class 指定检查条件 对象(interface or type)，不能代替声明

extands class

同名的接口会被合并进类

TS 的类同时是一种类型，但表示实例类型(值)？个人理解是不能作为函数参数的类型？

使用 `typeof` 返回值的类型

基类 `super`

`declare` `ES2022` `useDefineForClassFields` bug ?

**可访问修饰符** **access modifiers**

`public` `protected`

`private` -> `#` 写法

`static` 不能与 泛型 `<T>` 同时使用

抽象类 抽象成员

类内部，`this` 可以当作类型使用，与 `static` 冲突，静态成员拿不到实例对象

函数的第一个参数可以为 `this` 在 TS 编译时会删去



## 泛型 generics

`<T>` 类型参数 type parameter

类型参数可以有默认值

`Array` 是 interface 所以可以 `Array<T>` 

**约束条件**

```ts
// T 必须具有长度
function fn<T extands { lenght: number }>() {}
```

`<TypeParameter extands ConstraintType>` 前者是后者的子类型

## enum

值默认从 `0` 开始递增

同名合并
值可以为字符串

`keyof typeof enum` 返回 `union` 

数值 `enum` 存在反向映射

## 类型断言

`<Type>value` 不兼容 JSX

`value as Type` 推荐

`expr as T` expr 和 T 互为父子类型

`as const` 只能作用于字面量



`let` 会被推断为 基本类型

`cosnt` 会被推断为 值类型常量

`const s = 'JS'` `s` 的类型是 `'JS'`



非空断言 `!`

手动检查作为替代

`=== null throw new Error`



断言函数

```ts
function isString(value: unknown): asserts value is string {}
```

断言函数 => void

类型保护函数 => boolean



## 模块

`export type` `import type`



## 命名空间



## 装饰器 Decorator

`@` 只作用于 `class` 及其内部

添加、修改属性方法而不用继承

`fn(value, context)`

`class` => 函数 or `class` 代替构造函数

`method` => 函数 代替原有

`field` => void or fn 自动执行

`get` `set` => fn 代替原有

`accessor` => `{get, set}`



执行顺序

1. 计算 `@` 表达式 类 -> 声明顺序
2. 属性名计算值
3. 应用装饰器 方法 -> 静态属性 & 方法 -> field 实例属性 -> 类
4. 实例属性值 `a = log('a')`



## declare

不会出现在编译后

声明 其他文件的类型



## d.ts



## 类型运算符

`keyof` 单目 返回对象的所有 key => `union`

数组 => 数字索引 + length + pop 等方法

联合类型 `A | B` 返回交集

交叉类型 `A & B` 返回并集

精确表达对象属性的类型

属性映射

`-readonly` `-?`



`in`

JS 判断 属性 in 对象 => boolean

TS 遍历 联合类型



`[]`

1. `A['name']` 取 `name` 属性名 对应的类型
2. `A[type]` 取 `type` 对应的类型 可以是联合类型



`extands ... ? :`

`A extands B` 成为判断语句



`refer`



`is` 作返回值



## 类型映射

+- ? readonly

```ts
[p in keyof A as `${p}ID`]
```



## 类型工具

`Readonly<>`

`Await<>` 取 `Promise` 返回值的类型



## 注释指令



## tsconfig.json







 
