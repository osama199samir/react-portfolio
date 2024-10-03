import React, { useEffect, useState } from "react"
import Header from "./components/1-header/header"
import Hero from "./components/2-hero/hero"
import Main from "./components/3-main/main"
import Contact from "./components/4-contact/contact"
import Footer from "./components/5-footer/footer"


function App() {

  useEffect(()=>{
    window.addEventListener("scroll" , ()=>{
      if (window.scrollY > 300){
        setshowScrollBtn(true)
      }else{
        setshowScrollBtn(false)
      }
    })

  },[])




  const[showScrollBtn , setshowScrollBtn]=useState(false)

  return (
    <div   id="up"  className="container">

    <Header/>
    <Hero/>
    <div className="line" />
    <Main/>
    <div className="line" />
    <Contact/>
    <div className="line" />
    <Footer/>

    
       <a  style = {{opacity:showScrollBtn? 1 : 0 , transition: "1s" }} href="#up">
       <button className="srolltotop"><i class="fas fa-angle-up"></i></button>
       </a>
    

     
    </div>
  )
}

export default App
