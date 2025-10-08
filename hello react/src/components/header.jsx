import React from "react";

export default function Header(){
    return (
        <>
            <header>
                <img src={new URL('../assets/react.svg', import.meta.url).href} alt="logo" width={40}/>
                <nav>
                    <ul className="nav-links">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
            <h1>Fun facts about react</h1>
        </>
    )
}