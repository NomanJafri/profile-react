/* eslint-disable react/prop-types */
export default function Body({children, className}){
    document.querySelector('body').classList.add(className == 'light'? 'light': 'dark');
    document.querySelector('body').classList.remove(className == 'light'? 'dark': 'light');
    return (
        <>
            {children}
        </>
    );
}