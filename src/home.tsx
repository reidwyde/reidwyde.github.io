import React from 'react';
import './App.css';
import NavBar from './components/navBar';

import {NoMarginP, PadLeft20px} from './styled';

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
                    Hi, My name is Reid Wyde. I'm a software developer, machine learning engineer,
                    data scientist, and published researcher, born and raised in Dallas, Texas.
                </p>
                <p>This website is the home of my professional portfolio.</p>
                <br />

                <p>If you have any questions, feel free to reach out.</p>
                <br />

                <NoMarginP>Good Luck,</NoMarginP>
                <NoMarginP>Reid</NoMarginP>
                <NoMarginP>214-870-4733</NoMarginP>
                <NoMarginP>reidwyde@gmail.com</NoMarginP>
            </PadLeft20px>
        </>
    );
};

export default Home;
