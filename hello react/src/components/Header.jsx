import React from "react";

export default function Header(){
    return (
        <>
            <header>
                <div className="navbar"><img src={new URL('../assets/react.svg', import.meta.url).href} alt="logo" className="logo"/>
                    <nav>
                        <ul className="nav-links">
                            <li>Pricing</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </div>
                <h1>Fun facts about react</h1>
            </header>
        </>
    )
}