import React from 'react';
import './App.css';
import NavBar from './components/navBar';

import { NoMarginP, PadLeft20px } from './styled';

// . While you're here, why
//                     not check out my resume, my research, or my free course on machine learning? (No
//                     experience necessary! We start at basic mathematics and go all the way to
//                     advanced forms of deep learning!)

// <h3>About Me</h3>

//                 <p>
//                     I started my first job when I was just 12 years old. I was a math tutor. There's
//                     something so immensely satisfying about watching someone understand something
//                     that they once thought was confusing. I tutored a variety of subjects all
//                     throughout middle school, high school and college. I enjoy teaching and I hope
//                     you'll find some of the resources on this website useful.
//                 </p>

const Home = () => {
    return (
        <>
            <NavBar activeTabKey="home" />
            <PadLeft20px>
                <h3>Welcome!</h3>
                <p>
                    My name is Reid Wyde. I'm a software developer, machine learning engineer, data
                    scientist, and published researcher, born and raised in Dallas, Texas.
                </p>
                <p>
                    This website is where I keep a virtual copy of my resume, and links to resources
                    for those wanting to learn more about software development, machine learning,
                    and data science.
                </p>
                <br />
                <p>
                    If your business needs expert guidance in software development, machine
                    learning, or data science, I offer consulting services to help you build
                    efficient, scalable, and intelligent solutions. Feel free to reach out to
                    discuss how I can assist with your project.
                </p>
                <br />

                <NoMarginP>Best,</NoMarginP>
                <NoMarginP>Reid Wyde</NoMarginP>
                <NoMarginP>214-870-4733</NoMarginP>
                <NoMarginP>reidwyde@gmail.com</NoMarginP>
            </PadLeft20px>
        </>
    );
};

export default Home;
