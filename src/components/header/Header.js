import React from "react";


export default function Header({ title, className, children }) {


    return (
        <>
            <header className={"hero " + className} >
                {children}
            </header>
        </>
    );
}
