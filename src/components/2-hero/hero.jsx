import React from 'react';
import './hero.css'
import Lottie from "lottie-react";
import devAnimation from "../../animation/dev.json";



const hero = () => {

    return (
        <section className='hero flex'>
            <div className="left-section">
                <div className="parent-pic flex">
                    <img src="/osama samir.png" alt="" className="pic" />
                    <span className="marked"><i class="fas fa-check-circle check"></i></span>
                </div>

                <h2 className="title">front-end developer</h2>

                <p className="para">I am a web developer involved in manyadvanced projects and have a trainingcourse in the field of front-end webdevelopment.</p>


                <ul className='icons flex'>
                    <li><i class="fab fa-twitter"></i></li>
                    <li><i class="fab fa-instagram"></i></li>
                    <li><i class="fab fa-github"></i></li>
                    <li><i class="fab fa-linkedin"></i></li>
                </ul>


            </div>



            <div className="Right-section animation ">
                <Lottie className='' style={{ height: "350px" }} animationData={devAnimation} />

            </div>
        </section>

    );
}

export default hero;