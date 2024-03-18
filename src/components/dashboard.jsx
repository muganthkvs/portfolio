import React from "react";
import './dashboard.css';
import logo from '../assets/logo.png';
import logo1 from '../assets/logo2.png';
import experience from '../assets/experience.png';
import education from '../assets/education.png';
import checkmark from '../assets/checkmark.png'
import yangoos from '../assets/yangoos.jpeg';
// import Muganth from '../assets/Muganth.pdf';
// import email from '../assets/email.png';
import diti from '../assets/diti.jpeg';
import linkedin from '../assets/linkedin.png';

function dash() {
    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".humburger-icon");
        console.log("Menu ClassList Before:", menu.classList);
        console.log("Menu Element:", menu);
        console.log("Icon Element:", icon);
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }

    function linkedinprofile() {
        window.location.href = "https://www.linkedin.com/in/muganth-kanagaraj-444462227/";

    }

    function Muganth() {
        window.location.href = "https://tangerine-hummingbird-1479b6.netlify.app/assets/resume-example.pdf";

    }

    function project() {
        window.location.href = 'https://yangoostechnologies.com/'
    }

    function fluidity() {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.Firstmyfluiditi'
    }

    return (
        <>
            <nav id="deskstop-nav">
                <div className="logo">Muganth Kanagaraj</div>
                <div className="heading">
                    <ul className='nav-link'>
                        <li><a href="#profile">About</a></li>
                        <li><a href="#Experience">Experience</a></li>
                        <li><a href="#project">Project</a></li>
                        <li><a href="#contacts">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <nav id="mobile-nav">
                <div className="logo">Muganth Kanagaraj</div>
                <div className="humburger-menu"></div>
                <div className="humburger-icon" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="menu-links">
                    <li><a href="#profile" onClick={toggleMenu}>About</a></li>
                    <li><a href="#Experience" onClick={toggleMenu}>Experience</a></li>
                    <li><a href="#project" onClick={toggleMenu}>Project</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </div>
            </nav>
            <section id="profile">
                <div className="profile-container">
                    <img src={logo} alt="profile"></img>
                    <div className="section_text">
                        <p className="section__p1">Hello , I'am</p>
                        <h1 className="section__p2">Muganth Kanagaraj</h1>
                        <p className="title">Front End Developer </p>
                        <div className="btn-container">
                            <button className="btn btn-color-1" onClick={Muganth}>Download cv</button>
                        </div>
                        <div id="social-container">
                            <img src={linkedin} alt="Linkedin-profile" className="icon" onClick={linkedinprofile} ></img>
                        </div>
                    </div>
                </div>
            </section>
            <section id="Experience">
                <div >
                    <p className="experince_p1"> Get To Know More</p>
                    <h1>Experience</h1>
                    <div className="experince_container">
                        <div className="experince_container_p2">
                            <img src={logo1} alt="about me" className="icon1"></img>
                        </div>
                        <div className="about-details-container">
                            <div className="about-containers">
                                <div className="details-container">
                                    <img src={experience} alt="experience" className="icon2"></img>
                                    <h1>Experince</h1>
                                    <p className="year">1+ year <br /> Frontend Development</p>
                                    {/* <h2 className="devee">Frontend Development</h2> */}
                                </div>
                            </div>
                        </div>
                        <div className="about-details-container">
                            <div className="about-containers">
                                <div className="details-container">
                                    <img src={education} alt="experience" className="icon2"></img>
                                    <h1 className="FONT">Education</h1>
                                    <p className="year">Bachelor of Engineering <br />ECE</p>
                                    {/* <h2 className="devee">Frontend Development</h2> */}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="text-container">
                        <p>With over 1 year of experience, I specialize in web development and
                            mobile app implementation, adept in Agile and Waterfall methodologies.
                            Proficient in the entire SDLC, I excel in Github, possess MySQL database
                            programming skills, and am skilled in debugging. Known for effective
                            collaboration, I communicate seamlessly with onsite coordinators and
                            clients to gather business requirements.
                        </p>
                    </div>
                    <div id="project">
                        <div className="Explore_p1">
                            <p>Explore My</p>
                            <h1>Skills</h1>
                        </div>
                        <div className="about-details-container">
                            <div className="about-container">
                                <div className="details-container">
                                    <img src={education} alt="experience" className="icon2"></img>
                                    <h1 className="FONT">Frontend Development</h1>
                                    <div className="articel-container1">
                                        <article>
                                            <img src={checkmark} alt="exprince" className="icon"></img>
                                            <div className="exprince_p3">
                                                <h1>HTML</h1>
                                                <p>Experienced</p>
                                            </div>
                                        </article>
                                        <article>
                                            <img src={checkmark} alt="exprince" className="icon"></img>
                                            <div className="exprince_p3">
                                                <h1>CSS</h1>
                                                <p>Experienced</p>
                                            </div>
                                        </article>
                                        <article>
                                            <img src={checkmark} alt="exprince" className="icon"></img>
                                            <div className="exprince_p3">
                                                <h1>IONIC</h1>
                                                <p>Experienced</p>
                                            </div>
                                        </article>
                                        <article>
                                            <img src={checkmark} alt="exprince" className="icon"></img>
                                            <div className="exprince_p3">
                                                <h1>REACT JS</h1>
                                                <p>Experienced</p>
                                            </div>
                                        </article>
                                        <article>
                                            <img src={checkmark} alt="exprince" className="icon"></img>
                                            <div className="exprince_p3">
                                                <h1>ANGULAR</h1>
                                                <p>Intermediate</p>
                                            </div>
                                        </article>
                                        <article>
                                            <img src={checkmark} alt="exprince" className="icon"></img>
                                            <div className="exprince_p3">
                                                <h1>TypeScript</h1>
                                                <p>Intermediate</p>
                                            </div>
                                        </article>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section>
                        <div className="cals">
                            <div class="experience">
                                <h1>3+Project</h1>
                            </div>
                        </div>
                        <div className="cals1">
                            <div className="skil">
                                <p>Browse My Recent</p>
                                <h2>Projects</h2>
                            </div>

                            <div className="projects">

                                <img src={yangoos} onClick={project} alt="my project" className="yangoos">

                                </img>
                            </div>
                            <div className="play">
                                <img src={diti} onClick={fluidity} alt="my project" className="fluiditi"></img>
                            </div>
                        </div>


                        <div className="contactcontainer" id="contacts">
                            <div className="contact_det">
                                <h2>Contact</h2>
                            </div>
                            <div className="yangoos1">
                                {/* <img src={email} alt="email" className="icon"></img> */}
                                <h1>Email: muganthkvs@gmail.com <br />phone: 8056756958</h1>

                            </div>
                            <div id="social-container">
                                <img src={linkedin} alt="Linkedin-profile" className="icon" onClick={linkedinprofile} ></img>
                            </div>
                        </div>
                    </section>
                </div>
                <footer>
                    <nav id="deskstop-nav">
                        {/* <div className="logo">Muganth Kanagaraj</div> */}
                        <div className="heading">
                            <ul className='nav-link'>
                                <li><a href="#profile">About</a></li>
                                <li><a href="#Experience">Experience</a></li>
                                <li><a href="#project">Project</a></li>
                                <li><a href="#contacts">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                    <p>Copyright &#169; 2024 Muganth Kanagaraj. </p>
                    <br/>
                </footer>
            </section>
        </>
    )
}

export default dash;
