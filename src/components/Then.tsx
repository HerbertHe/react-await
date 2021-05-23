import React, { Fragment, ReactNode, ReactNodeArray } from "react"

interface IThenProps {
    value?: any
}

interface IThenStates {
    children: ReactNodeArray | ReactNode | string
}

export class Then extends React.Component<IThenProps, IThenStates> {
    constructor(props: IThenProps) {
        super(props)
        this.state = {
            children: "",
        } as IThenStates
    }

    componentDidMount() {
        const { value, children } = this.props
        if (typeof children === "string") {
            this.setState({
                children,
            })
            return
        }

        if (children instanceof Array) {
            let _children: any
            for (let i = 0; i < children.length; i++) {
                const tmp = children[i] as any
                if (!!tmp.type) {
                    let props = {
                        value,
                    }
                    const child = React.cloneElement(tmp, { ...props })
                    _children.push(child)
                }
            }
            this.setState({
                children: _children,
            })
            return
        }

        if (typeof children === "object") {
            const tmp = children as any
            let props = {
                value,
            }
            const child = React.cloneElement(tmp, { ...props })
            this.setState({
                children: child,
            })
            return
        }
    }

    render() {
        return <Fragment>{this.state.children}</Fragment>
    }
}
