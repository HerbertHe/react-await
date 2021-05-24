# @herberthe/react-await

一个根据Promise数据渲染的组件库, 灵感来源于[Svelte Await Blocks](https://svelte.dev/tutorial/await-blocks)

> 大多的web应用程序需要在某些点处理异步数据。Svelte使用*await*标记promises的数据, 使这个过程更加简单

[简体中文](./README.CN.md) | [English](./README.md)

## 安装依赖

```bash
npm i @herberthe/react-await
# or yarn
yarn add @herberthe/react-await
```

## 使用方法

```tsx
import { FC, useEffect, useState } from "react"
import { Await, Then, Catch } from "@herberthe/react-await"

const App: FC = () => {
    const [promise, setPromise] = useState<Promise<unknown>>()
    useEffect(() => {
        const prom = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data Here!")
            }, 2000)
        })
        setPromise(prom)
    }, [])
    return (
        <Await promise={promise}>
            {/* 在此写入pending时的代码 */}
            <Then>
                {/* 在此写入resolve时的代码 */}
            </Then>
            <Catch>
                {/* 在此写入reject时的代码 */}
            </Catch>
        </Await>
    )
}

export default App
```

> 需要注意的是, `Then`组件不可省略, 而`Catch`组件如果你知道promise不会reject的话, 可以省略。

## 获取数据和错误

本库以深度为**1**向`Then`和`Catch`的所有子组件(字符串类型除外)分别注入不同的props属性`props.awaitvalue`和`props.awaiterror`, 您可以通过自定义组件的方式拿到数据

```tsx
interface ICustomResolveProps {
    awaitvalue: any
}

const CustomResolve: FC<ICustomResolveProps> = ({ awaitvalue }) => <h1>{awaitvalue}</h1>

interface ICustomRejectProps {
    awaiterror: any
}

const CustomReject: FC<ICustomRejectProps> = ({ awaiterror }) => <h1>{awaiterror}</h1>

const App: FC = () => {
    const [promise, setPromise] = useState<Promise<unknown>>()
    useEffect(() => {
        const prom = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data Here!")
            }, 2000)
        })
        setPromise(prom)
    }, [])
    return (
        <Await promise={promise}>
            <h1>pending~</h1>
            <p>waiting for values~</p>
            <Then>
                <CustomResolve />
            </Then>
            <Catch>
                <CustomReject />
            </Catch>
        </Await>
    )
}
```
