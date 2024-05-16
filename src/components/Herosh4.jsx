/* eslint-disable react-hooks/exhaustive-deps */
import {  useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function Herosh4({text,}){
    const [displayText, setDisplayText]=useState('');
    // console.log('HerosH4');
    
    useEffect(() =>{
        let char = 1;        
        const interval = setInterval( () =>{
            setDisplayText(text.slice(0,char));
            char++;
            if (char > text.length) {
                char=1;
                clearInterval(interval);
            }  
        }
        , 150);
    } ,[text]);


    return <h4>{displayText}</h4>
}