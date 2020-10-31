import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Projects></Projects>
            <About></About>
        </div>
    );
};

export default Home;