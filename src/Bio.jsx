import React from 'react';
import img from './webpic.png';
import img1 from './travel1.jpg';
import img2 from './travel2.jpg';
import img3 from './travel3.jpg';
import img4 from './travel4.jpg';
import './index.css';
const Bio=()=>{

    var text="";
    return(
        <React.Fragment>
            <div className="bio-wrapper">
                <div className="main-bio">
                    <img src={img} alt="img" width="240px" height='240px' />
                    <div className='text-bio'>
                        <h1>MY BIO</h1>
                        <p>
                            I don’t believe in luck. I believe that the work you do only decides your destiny and luck. When you work honestly for something, it becomes true and no one can actually take it from you. It’s good to be good, but it’s even better to be excellent. It’s pretty simple. What I mean is that when you work hard, you gain expertise; you gain knowledge and become smart. Your expertise, exceptional knowledge and skills help you stand out. So when you try to hard work for prosperity, getting success becomes easy.
                        </p>
                        <p>
                        Live life to the fullest, but never fear the struggles. Do you know why a person having exceptional knowledge never cares about the social obligations, politics and power. Because he/she can make it to any extent he/she wants.
                        </p>
                    </div>
                </div>
                <div className='contact list'>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/parteek-kumar-a96932174/" target="_blank">LinkedIn</a></li>
                        <li><a href="https://github.com/patrik20-i" target="_blank">Github</a></li>
                        <li><a href="https://www.instagram.com/_22_prateek/"  target="_blank">Instagram</a></li>
                    </ul>
                </div>
                <div className="sub-bio">
                    <img src={img1} alt="img1" />
                    <img src={img2} alt="img2" />
                    <img src={img3} alt="img3" />
                    <img src={img1} alt="img4" />
                    <img src={img2} alt="img4" />
                    {/* <img src={img4} alt="img4" /> */}
                </div>
                
                
            </div>
        </React.Fragment>
    );

};

export default Bio;