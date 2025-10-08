import React from "react";

export default function Header(){
    return (
        <header>
                <nav>
                    <img src={new URL('../assets/react.svg', import.meta.url).href} alt="logo" className="logo"/>
                    <h1>ReactFacts</h1>
                </nav>
        </header>
    )
}