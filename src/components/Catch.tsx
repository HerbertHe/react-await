import React, { Fragment, ReactNode, ReactNodeArray } from "react"

interface ICatchProps {
    awaiterror?: any
}

interface ICatchStates {
    children: ReactNodeArray | ReactNode | string
}

export class Catch extends React.Component<ICatchProps, ICatchStates> {
    constructor(props: ICatchProps) {
        super(props)
        this.state = {
            children: "",
        } as ICatchStates
    }

    componentDidMount() {
        const { awaiterror, children } = this.props
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
                        awaiterror,
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
                awaiterror,
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
