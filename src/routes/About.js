import React from 'react';
import './About.css';

function About(props) {
    //console.log(props);
    return (
    
        <div className="about__contaner">
            <span>
                "Freedom is the freedom to say that two plus make four. If that is granted, all else follows."
            </span>
            <span> - George Orwell, 1984</span>

            <div>
            <a href="https://github.com/ZANGZANGS">github.com/ZANGZANGS</a>
            </div>
        </div>
        
        
    );
}

export default About;