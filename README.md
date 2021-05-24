# @herberthe/react-await

[![version](https://img.shields.io/npm/v/@herberthe/react-await.svg)](https://www.npmjs.com/package/@herberthe/react-await)
[![download](https://img.shields.io/npm/dm/@herberthe/react-await.svg)](https://www.npmjs.com/package/@herberthe/react-await)
[![cnpmVersion](https://cnpmjs.org/badge/v/@herberthe/react-await.svg)](https://cnpmjs.org/package/@herberthe/react-await)
[![cnpmDownload](https://cnpmjs.org/badge/d/@herberthe/react-await.svg)](https://cnpmjs.org/package/@herberthe/react-await)

A components library for the value of Promise rendering, inspired by [Svelte Await Blocks](https://svelte.dev/tutorial/await-blocks)

> Most web applications have to deal with asynchronous data at some point. Svelte makes it easy to *await* the value of `promises` directly in your markup.

[简体中文](./README.CN.md) | [English](./README.md)

## Install

```bash
npm i @herberthe/react-await
# or yarn
yarn add @herberthe/react-await
```

## Usage

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
            {/* Here are code for pending */}
            <Then>
                {/* Here are code for resolve */}
            </Then>
            <Catch>
                {/* Here are code for reject */}
            </Catch>
        </Await>
    )
}

export default App
```

> NOTICE: The Component `Then` can not be omitted! If you know that your promise can't reject, you can omit the component `Catch`

## Get the Value & Error

The library will inject `props.awaitvalue` and `props.awaiterror` respectively for the children of `Then` and `Catch` (except the text dom), and the depth is **1**, you can get the **Value** and **Error** via custom component

Example here:

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
