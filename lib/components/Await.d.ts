import React from "react";
interface IAwaitProps {
    promise?: Promise<any>;
}
export default class Await extends React.Component<IAwaitProps> {
    constructor(props: IAwaitProps);
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
    };
    componentDidCatch(error: any, info: any): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
