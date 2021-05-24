import React, { ReactNode, ReactNodeArray } from "react";
interface ICatchProps {
    awaiterror?: any;
}
interface ICatchStates {
    children: ReactNodeArray | ReactNode | string;
}
export declare class Catch extends React.Component<ICatchProps, ICatchStates> {
    constructor(props: ICatchProps);
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
