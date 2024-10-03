import React from 'react';
import './main.css'
import { useState } from 'react';




const myProjects = [
    { projectTitle: "react project", category: ["react"] , imgpath: "./imgs/1.jpg" },
    { projectTitle: " react & css project", category: [ "react" , "css"], imgpath: "./imgs/3.jpg" },
    { projectTitle: " css project", category: ["css"], imgpath: "./imgs/2.jpg" },
    {projectTitle: "react project" , category:["react "] , imgpath:"./imgs/5.jpg"},
    {projectTitle: "css3 project" , category:["css3",], imgpath:"./imgs/4.jpg"},
    {projectTitle: "javascript project" , category:["js" ], imgpath:"./imgs/9.jpg"},
    {projectTitle: "javascript project" , category:["js" ], imgpath:"./imgs/6.jpg"},
    {projectTitle: "html &css" , category:["css" ], imgpath:"./imgs/7.jpg"},
    {projectTitle: "html &css" , category:["css" ], imgpath:"./imgs/8.jpg"},

]



const main = () => {

    const [currentActive, setcurrentActive] = useState("all")

    const [Arr, setArr] = useState(myProjects)

    const handleClick = (buttonCategory)=>{
        setcurrentActive(buttonCategory);
                    const newArr = myProjects.filter((item)=>{
                        const zzz = item.category.find((myItem)=>{
                            return myItem ===  buttonCategory ;
                        })
                        return zzz === buttonCategory
                    })
                    setArr(newArr)

    }


    return (
        <main className='flex'>

            <section className='left-section  flex'>

                <button onClick={() => {
                    setcurrentActive("all");
                    setArr(myProjects)
                }}
                    className={currentActive === "all" ? "active" : null}>all projects</button>

                <button onClick={() => {
                  handleClick("css")

                }}
                    className={currentActive === "css" ? "active" : null}> html & css</button>

                <button onClick={() => {
                    handleClick("css3");
                }}
                    className={currentActive === "css3" ? 'active' : null}> css3</button>

                <button onClick={() => {
                    handleClick("js");
                }}
                    className={currentActive === "js" ? 'active' : null}>javascript</button>

                <button onClick={() => {
                    handleClick("react")
                }}
                    className={currentActive === "react" ? 'active' : null}>react</button>

            </section>

            <section className='right-section  flex'>
                {Arr.map((item) => {
                    return (
                        <article key={item.imgpath} className="cards ">
                            <img src={item.imgpath} alt="" className="pic" width={350} height={250} />
                            <div className="desc " style={{ width: "350px" }}>
                                <h1 className="title">{item.projectTitle}</h1>
                                <p className="sub-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni commodi ut id quia velit adipisci, unde accusantium porro, tempore iure itaque eaque doloribus. Atque architecto aliquid aperiam ab nesciunt velit!</p>

                                <ul className="icons flex">
                                    <div style={{ gap: "11px" }} className="flex">
                                        <li><i class="fas fa-link i1"></i></li>
                                        <li><i class="fab fa-github i2"></i></li>
                                    </div>
                                    <li>more <span className="right"><i class="fas fa-arrow-right right"></i></span></li>
                                </ul>
                            </div>
                        </article>
                    );
                })};
            </section>

        </main>

    );
}

export default main;