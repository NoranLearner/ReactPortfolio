import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion"
import './main.css';

const myProjects = [
    {
        id: 1,
        projectTitle: "CSS Project",
        imgPath: "./1.jpg",
        category: ["css"],
    },
    {
        id: 2,
        projectTitle: "Javascript Project",
        imgPath: "./1.jpg",
        category: ["javascript"],
    },
    {
        id: 3,
        projectTitle: "React Project",
        imgPath: "./1.jpg",
        category: ["react"],
    },
    {
        id: 4,
        projectTitle: "CSS & Javascript Project",
        imgPath: "./1.jpg",
        category: ["css", "javascript"],
    }
];

const Main = () => {

    const [currentActive, setCurrentActive] = useState("all");

    const [projectsArr, setProjectsArr] = useState(myProjects);

    // useable Function

    const handleClick = (buttonCategory) => {

        setCurrentActive(buttonCategory);

        const newArr = myProjects.filter((item) => {

            const newCatArr = item.category.find((catItem) => {

                return catItem === buttonCategory;

            });

            return newCatArr === buttonCategory;

        });

        setProjectsArr(newArr);

    };

    return (

        <main>

            {/* Left Section */}

            <section className='left-section'>

                <button className={currentActive === "all" ? 'active' : null} onClick={() => {

                    setCurrentActive("all");

                    setProjectsArr(myProjects);

                }}>all projects</button>

                <button className={currentActive === "css" ? 'active' : null} onClick={() => { handleClick("css") }}>HTML & CSS</button>

                <button className={currentActive === "javascript" ? 'active' : null} onClick={() => { handleClick("javascript") }}>JavaScript</button>

                <button className={currentActive === "react" ? 'active' : null} onClick={() => { handleClick("react") }}>React & MUI</button>

                <button className={currentActive === "node" ? 'active' : null} onClick={() => { handleClick("node") }}>Node & Express</button>

            </section>

            {/* Right Section */}

            <section className='right-section'>
                <AnimatePresence>
                    {projectsArr.map((item) => {
                        return (
                            <motion.article
                                className='card'
                                key={item.id}
                                layout
                                initial={{ transform: "scale(0.4)" }}
                                animate={{ transform: "scale(1)" }}
                                transition={{ type: "spring", damping: 8, stiffness: 50 }}>
                                <img src={item.imgPath} alt='' />
                                <div className='box'>

                                    <motion.h1 className="title" initial={{ transform: "scale(0)" }} animate={{ transform: "scale(1)" }} transition={{ damping: 6, type: "spring", stiffness: 100 }}>{item.projectTitle}</motion.h1>

                                    <p className="sub-title">
                                        Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore dolor in, accusantium laudantium accusamus.
                                    </p>

                                    <div className='icons'>
                                        <div>
                                            <i className="fas fa-link"></i>
                                            <i className="fa-brands fa-github"></i>
                                        </div>
                                        <a href='/'>
                                            more <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>

                                </div>
                            </motion.article>
                        );
                    })}
                </AnimatePresence>
            </section>

        </main>

    )
}

export default Main;