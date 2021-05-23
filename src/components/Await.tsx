import React, { Fragment, ReactNodeArray } from "react"

interface IAwaitProps {
    promise: Promise<any>
}

interface IAwaitStates {
    hasError: boolean
    status: "pending" | "resolve" | "reject"
    pendingChild: ReactNodeArray | string
    resolveChild: ReactNodeArray | string
    rejectChild: ReactNodeArray | string
}

export class Await extends React.Component<IAwaitProps, IAwaitStates> {
    constructor(props: IAwaitProps) {
        super(props)
        this.state = {
            hasError: false,
            pendingChild: [],
            resolveChild: [],
            rejectChild: [],
            status: "pending",
        } as IAwaitStates
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: true }
    }

    componentDidCatch(error: any, info: any) {
        // catch error
    }

    componentDidMount() {
        const { promise, children } = this.props
        let val: any
        let err: any

        // 拿不到promise的情况
        console.log(promise)

        if (!!promise) {
            // promise应该在此执行才对。。。
            console.log(promise)
            promise
                .then((data) => {
                    val = data
                    this.setState({
                        status: "resolve",
                    })
                })
                .catch((error) => {
                    err = error
                    this.setState({
                        status: "reject",
                    })
                })
        }

        // handle string
        if (typeof children === "string") {
            this.setState({
                pendingChild: children,
            })
        }

        if (children instanceof Array) {
            let _pendingChild: ReactNodeArray = []
            let _resolveChild: ReactNodeArray = []
            let _rejectChild: ReactNodeArray = []

            // Error if "Then" component is not existed!
            const ifThen = children.filter(
                (item: any) => !!item?.type?.name && item?.type?.name === "Then"
            )

            if (ifThen.length === 0) {
                throw new Error(
                    `the "Then" Component missing in Await Component!`
                )
            }

            let flagThen: boolean = false
            for (let i = 0; i < children.length; i++) {
                const tmp = children[i] as any
                if (
                    !flagThen &&
                    (typeof tmp === "string" || typeof tmp.type === "string")
                ) {
                    _pendingChild.push(tmp)
                }

                if (!!tmp.type?.name && tmp.type?.name === "Then") {
                    const props = {
                        key: "Then",
                        value: val,
                    }
                    _resolveChild = [React.cloneElement(tmp, { ...props })]
                    flagThen = true
                    this.setState({
                        pendingChild: _pendingChild,
                        resolveChild: _resolveChild,
                    })
                }

                if (!!tmp.type?.name && tmp.type?.name === "Catch") {
                    const props = {
                        key: "Catch",
                        error: err,
                    }
                    _rejectChild = [React.cloneElement(tmp, { ...props })]

                    this.setState({
                        rejectChild: _rejectChild,
                    })
                }
            }
        }
    }

    render() {
        const { status, pendingChild, resolveChild, rejectChild, hasError } =
            this.state
        return (
            <Fragment>
                {hasError && <div>Error occured!!</div>}
                {status === "pending" && pendingChild}
                {status === "resolve" && resolveChild}
                {status === "reject" && rejectChild}
                {/* 处理this.props.children等于零的情况 */}
                {/* 处理Then嵌套的情况 */}
                {/* 处理Catch嵌套的情况 */}
            </Fragment>
        )
    }
}
