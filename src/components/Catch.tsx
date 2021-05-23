import React, { Fragment } from "react"

export class Catch extends React.Component {
    render() {
        return <Fragment>{this.props.children}</Fragment>
    }
}
