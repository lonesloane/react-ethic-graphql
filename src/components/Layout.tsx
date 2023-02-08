import React from "react";
import Header from "./Header";
import {ReactElement} from "react-markdown/lib/react-markdown";

interface IReactElement {
    children: ReactElement;
}

export default function Layout({ children }: IReactElement) {
    return (
        <>
            <Header />
            <main className="Container">{children}</main>
        </>
    );
}
