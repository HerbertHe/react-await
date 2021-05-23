import React, { ReactNodeArray } from "react";
interface IAwaitProps {
    promise: Promise<any>;
}
interface IAwaitStates {
    hasError: boolean;
    status: "pending" | "resolve" | "reject";
    pendingChild: ReactNodeArray | string;
    resolveChild: ReactNodeArray | string;
    rejectChild: ReactNodeArray | string;
}
export declare class Await extends React.Component<IAwaitProps, IAwaitStates> {
    constructor(props: IAwaitProps);
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
    };
    componentDidCatch(error: any, info: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    shouldComponentUpdate(nextProps: IAwaitProps, nextStates: IAwaitStates): boolean;
    updateResolveChild: (children: any, val: any) => void;
    updateRejectChild: (children: any, err: any) => void;
    render(): JSX.Element;
}
export {};
