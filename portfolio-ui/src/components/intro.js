import React, { useEffect } from 'react';

export default function Intro() {
    useEffect(() => {
        const intervalId = setInterval(restartTypingEffect, 30000);
        return () => clearInterval(intervalId);
    }, []);

    function restartTypingEffect() {
        const element = document.querySelector('.typing-effect');
        if (element) {
            element.classList.remove('restart-typing');
            void element.offsetWidth;
            element.classList.add('restart-typing');
        }
    }

    return (
        <div className="intro-padding">
            <div className="typing-effect">
                <h1 className="intro-typography">Hi, I'm Macie Ryan <br /> Software Engineer</h1>
            </div>
        </div>
    );
}