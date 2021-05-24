import React, { ReactNode, ReactNodeArray } from "react";
interface IAwaitProps {
    promise: Promise<any> | undefined;
}
interface IAwaitStates {
    status: "pending" | "resolve" | "reject";
    pendingChild: ReactNodeArray | ReactNode | string;
    resolveChild: ReactNodeArray | ReactNode | string;
    rejectChild: ReactNodeArray | ReactNode | string;
}
export declare class Await extends React.Component<IAwaitProps, IAwaitStates> {
    constructor(props: IAwaitProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    shouldComponentUpdate(nextProps: IAwaitProps, nextStates: IAwaitStates): boolean;
    updateResolveChild: (children: any, val: any) => void;
    updateRejectChild: (children: any, err: any) => void;
    render(): React.ReactNode;
}
export {};
