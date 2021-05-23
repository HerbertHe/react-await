import React, { Fragment, ReactNodeArray } from "react"

interface IAwaitProps {
    promise: Promise<any> | undefined
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
        // handle string
        const { children } = this.props
        if (typeof children === "string") {
            this.setState({
                pendingChild: children,
            })
        }

        if (children instanceof Array) {
            let _pendingChild: ReactNodeArray = []

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
                    flagThen = true
                    this.setState({
                        pendingChild: _pendingChild,
                    })
                    break
                }
            }
        }
    }

    componentDidUpdate() {
        const { promise, children } = this.props
        if (!promise) return
        if (!!promise) {
            promise
                .then((data: any) => {
                    this.updateResolveChild(children, data)
                    this.setState({
                        status: "resolve",
                    })
                })
                .catch((error: any) => {
                    this.updateRejectChild(children, error)
                    this.setState({
                        status: "reject",
                    })
                })
        }
    }

    shouldComponentUpdate(
        nextProps: IAwaitProps,
        nextStates: IAwaitStates
    ): boolean {
        if (
            this.state.status === "pending" ||
            nextStates.status !== this.state.status
        ) {
            return true
        }
        return false
    }

    updateResolveChild = (children: any, val: any) => {
        if (children instanceof Array) {
            let _resolveChild: ReactNodeArray = []

            for (let i = 0; i < children.length; i++) {
                const tmp = children[i] as any
                if (!!tmp.type?.name && tmp.type?.name === "Then") {
                    let props = {
                        key: "Then",
                        value: val,
                    }
                    _resolveChild = [React.cloneElement(tmp, { ...props })]
                    this.setState({
                        resolveChild: _resolveChild,
                    })
                    break
                }
            }
        }
    }

    updateRejectChild = (children: any, err: any) => {
        if (children instanceof Array) {
            let _rejectChild: ReactNodeArray = []

            for (let i = 0; i < children.length; i++) {
                const tmp = children[i] as any

                if (!!tmp.type?.name && tmp.type?.name === "Catch") {
                    const props = {
                        key: "Catch",
                        error: err,
                    }
                    _rejectChild = [React.cloneElement(tmp, { ...props })]

                    this.setState({
                        rejectChild: _rejectChild,
                    })
                    break
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
            </Fragment>
        )
    }
}
