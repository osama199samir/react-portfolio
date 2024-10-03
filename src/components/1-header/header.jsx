import React, { useEffect, useState } from 'react';
import './header.css'

const header = () => {

    const [ShowModel , setShowModel] = useState(false)

    const[theme , setTheme] = useState(localStorage.getItem("currentMode"))

    useEffect(()=>{
        if ( theme === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        }else{
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [theme])

    return (
        <header className='flex'>

           <button onClick={()=>{setShowModel(true)}} className='menu flex'><i class="fas fa-bars change-mode"></i></button>

            <nav>
                <ul className='flex'>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Articles</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Speakings</a></li>
                    <li><a href="#">uses</a></li>
                </ul>
            </nav>

            <button  onClick = {()=>{

                // علشان اخليه من لايت لدرك او العكس استخدم خطوتين بأستخدام الاوكل استورج 

                // send value to localstorage
                localStorage.setItem("currentMode" , theme === "dark" ? "light" : "dark")

                // get value from localstorage 
                setTheme(localStorage.getItem("currentMode"))







            }}
            className='mode flex'>
                {  theme === "dark"? (<i class="far fa-moon"></i>) : (<i class="fas fa-sun orange"></i>)}
            </button>


            {ShowModel&&(
                <div className="fixed">
                <ul className='model'>
                    <li><button onClick={()=>{setShowModel(false)}} className='fas fa-times close-model'/></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Articles</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Speakings</a></li>
                    <li ><a href="#">uses</a></li>
                </ul>
            </div>
            )}

        </header>

    );
}

export default header



