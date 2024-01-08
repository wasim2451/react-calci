import React,{useState} from "react";
export default function Keyboard(props){
    const keys=[
        'C', '(', ')', '/',
        '7', '8', '9', '*',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '.', '0', 'DEL', '='
    ]
    function handleClick(key){
        // console.log(`Clicked ${key}`)
        props.calculation(key);
    }
    return <>
        <div className="keyboard">
            {keys.map((key)=>{
                if(key==='C'||key==='('||key===')'||key==='/'||key==='*'||key==='-'||key==='+')
                return <button className="keys" id="yellowKeys" onClick={()=>{handleClick(key)}}key={key}>{key}</button>
                else if(key==='=')
                return <button className="keys" id="equal" onClick={()=>{handleClick(key)}} key={key}>{key}
                </button>
                else 
                return <button className="keys" onClick={()=>{handleClick(key)}}key={key}>{key}</button>
            })}
        </div>
    </>
}