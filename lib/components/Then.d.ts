import React, { ReactNode, ReactNodeArray } from "react";
interface IThenProps {
    awaitvalue?: any;
}
interface IThenStates {
    children: ReactNodeArray | ReactNode | string;
}
export declare class Then extends React.Component<IThenProps, IThenStates> {
    constructor(props: IThenProps);
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
