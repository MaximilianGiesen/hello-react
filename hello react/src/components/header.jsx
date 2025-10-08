import React from "react";

export default function Header(){
    return (
        <>
            <img src={new URL('../assets/react.svg', import.meta.url).href} alt="logo" width={40}/>
            <h1>Fun facts about react</h1>
        </>
    )
}