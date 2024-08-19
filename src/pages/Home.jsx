import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Main from '../components/main/Main';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

const Home = () => {

    const [showScrollBtn, setShowScrollBtn] = useState(false);

    useEffect(() => {

        window.addEventListener("scroll", () => {
            // console.log(window.scrollY);
            window.scrollY > 300 ? setShowScrollBtn(true) : setShowScrollBtn(false)
        })

    }, []);

    return (
        <div className="container" id='up'>
            <Header />
            <Hero />
            <div className='divider' />
            <Main />
            <div className='divider' />
            <Contact />
            <div className='divider' />
            <Footer />

            <a href="#up" style={{ opacity: showScrollBtn === true? 1 : 0 , transition: "1s"}}>
                <button className="scroll2Top"><i className="fa-solid fa-chevron-up"></i></button>
            </a>

        </div>
    )
}

export default Home;