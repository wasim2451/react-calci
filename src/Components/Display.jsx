import React,{useState} from "react";
export default function Display(props){
    return(
        <div className="textArea">
        <div>
        <p className="question">{props.question}</p>
        <p className="answer">{props.answer}</p>
        </div>
        </div>
    )
}