/* eslint-disable react/prop-types */
import { useEffect } from "react";

export default function HerosTypingContainer({children, setTitle}){
    function typing(index){
        const textList = ['Software Developer', 'Frontend Developer', 'Backend Developer', 'Fullstack Developer','React Developer','JavaScript Developer' ,'Python Developer'];
        
        setTitle('');
        setTitle(textList[index]);
        return textList.length;
    }

    useEffect(() => {
        typing(0);
        let i = 1;     
        setInterval( () => {            
            let listLength = typing(i);
            i++;
            
            if (i == (listLength)) i = 0;
        }, 3000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return (
            <>
                {children}
            </>
        );
}