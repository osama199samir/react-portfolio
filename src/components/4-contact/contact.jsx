import React from 'react' ;
import './contact.css';
import{useForm , ValidationError}from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "../../animation/Animation - 1727673668516.json" 
import contactUsAnimation from "../../animation/Animation - 1727675664064.json"

const contact =() =>{
    const[state,handleSubmit]=useForm("xrgvvdlo")
    // if (state.succeeded){
    //     return <h1>ghjklhhhhhh </h1>;
    // }

    return(
        <section className='contact-us'>
            <h1 className='title'>
                <span className='icon'><i class="fas fa-envelope i1"></i></span>
                contact us
            </h1 >
            <p className='sub-title'> contact us for more information and get notified when i publish something new</p>

            <div className="flex" style={{justifyContent:"space-between"}}>
                <form on onSubmit={handleSubmit}>
                    <div  className="flex"  style={{marginBottom:"24px"}}> 
                    <label htmlFor="email">Email Address :</label>
                    <input required type="email" name="email" id="email" />
                    <ValidationError  prefix='Email' field='emqil' errors={state.errors}/>
                    </div>

                    <div className="flex">
                    <label htmlFor="massage">Your massage :</label>
                    <textarea required name="massage" id="massaage"></textarea>
                    <ValidationError  prefix='Massage' field='massage' errors={state.errors}/>
                    </div>

                    <button rype='submit' disabled={state.submitting} className='submit'>
                        {state.submitting ? "submitting..." : "submit"}
                    </button>

                    {state.succeeded&&(
                        
                        <p className='flex' style={{fontSize:"18px" , marginTop:"1.7rem"}}>
                            <Lottie loop = {false} style = {{height:"37px"}} animationData={doneAnimation} />
                            your massage has been sent successfully
                            </p>
                    )}
                </form>
                <div className="animation">
                <Lottie className='contact-animation'  style={{height:"300px"}} animationData={contactUsAnimation} />
                </div>
            </div>
        
        </section>

    ) ;
}

export default contact ;