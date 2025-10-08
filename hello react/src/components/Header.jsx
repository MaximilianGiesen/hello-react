import React from "react";

export default function Header(){
    return (
        <header>
                <nav>
                    <img src={new URL('../assets/react.svg', import.meta.url).href} alt="logo" className="logo"/>
                    <span>ReactFacts</span>
                </nav>
        </header>
    )
}