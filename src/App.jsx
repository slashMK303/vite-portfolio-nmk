// import { useState } from "react";
import "./App.css";

function App() {
    return (
        <>
            <section>
                <div className="navbar animate__animated animate__fadeInDown">
                    <div className="navbar-icon">
                        <div className="home">
                            <a href="#home">
                                <img className="home-img" src="img/Home.svg" />
                            </a>
                        </div>
                        <div className="about">
                            <a href="#aboutme">
                                <img
                                    className="profile-img"
                                    src="img/profile.svg"
                                />
                            </a>
                        </div>
                        <div className="email">
                            <a href="#portfolio">
                                <img
                                    className="email-img"
                                    src="img/Email.svg"
                                />
                            </a>
                        </div>
                        <div className="mode">
                            <a href="#">
                                <img className="mode-img" src="img/Light.svg" />
                            </a>
                        </div>
                    </div>
                </div>
                <div id="home" className="container">
                    <div className="konten-home">
                        <div className="garis animate__animated animate__fadeInLeftBig">
                            <div className="text-wrapper-2">Hi, my name is</div>
                            <div className="rectangle"></div>
                        </div>
                        <div className="text-name animate__animated animate__fadeInLeftBig ">
                            Nanang Marvin Kurniawan.
                        </div>
                        <p className="keahlian animate__animated animate__fadeInLeftBig">
                            I build things for the web.
                        </p>
                        <p className="detail animate__animated animate__fadeInLeftBig">
                            I am a dedicated Full Stack Developer with
                            approximately 2 years of experience in software
                            <br />
                            development. I specialize in creating responsive and
                            functional web applications. On this
                            <br />
                            portfolio website, you will find a collection of my
                            work, showcasing my skills in both frontend
                            <br />
                            and backend technologies. Explore my projects to see
                            how I can bring your ideas to life.
                        </p>

                        <div className="button-cv animate__animated animate__zoomIn animate__delay-1s">
                            <div className="text-cv">View my cv here!</div>
                        </div>
                    </div>
                    <div className="konten-home-img animate__animated animate__fadeInRightBig">
                        <img
                            className="frontend-designer"
                            src="https://c.animaapp.com/83rXhRq7/img/frontend-designer-1.svg"
                        />
                    </div>
                </div>
            </section>

            {/* About me */}
            <section>
                <div id="aboutme" className="container-about-me">
                    <div className="konten-about-me">
                        <div
                            className="garis"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                        >
                            <div className="text-about-me">About me</div>
                            <div className="rectangle"></div>
                        </div>
                        <p
                            className="detial-about-me"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="500"
                            data-aos-easing="ease-in-out"
                        >
                            Hello! My name is Nanang Marvin Kurniawan, and I am
                            a passionate Full Stack Developer with
                            <br />
                            approximately 2 years of experience in software
                            development. I specialize in creating
                            <br />
                            responsive and functional web applications.
                            Throughout my journey as a Full Stack
                            <br />
                            Developer, I have gained expertise in both frontend
                            and backend technologies, allowing me
                            <br />
                            to deliver seamless and user-friendly digital
                            experiences.
                            <br />
                            <br />
                            Aside from my professional endeavors, I have a keen
                            interest in 3D modeling, although I am
                            <br />
                            still exploring this field, and game development,
                            where I am in the early stages of learning.
                            <br />I am constantly motivated to expand my skill
                            set and explore new horizons within the realm of
                            <br />
                            technology and creativity.
                        </p>
                    </div>
                    <div
                        className="konten-about-me-img"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        data-aos-easing="ease-in-out"
                    >
                        <img className="about-me-img" src="img/aboutme.JPG" />
                    </div>
                </div>
            </section>

            {/* Portfolio */}
            <section>
                <div id="portfolio" className="container-about-me">
                    <div className="konten-about-me">
                        <div
                            className="garis"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                        >
                            <div className="text-about-me">About me</div>
                            <div className="rectangle"></div>
                        </div>
                        <p
                            className="detial-about-me"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="500"
                            data-aos-easing="ease-in-out"
                        >
                            Hello! My name is Nanang Marvin Kurniawan, and I am
                            a passionate Full Stack Developer with
                            <br />
                            approximately 2 years of experience in software
                            development. I specialize in creating
                            <br />
                            responsive and functional web applications.
                            Throughout my journey as a Full Stack
                            <br />
                            Developer, I have gained expertise in both frontend
                            and backend technologies, allowing me
                            <br />
                            to deliver seamless and user-friendly digital
                            experiences.
                            <br />
                            <br />
                            Aside from my professional endeavors, I have a keen
                            interest in 3D modeling, although I am
                            <br />
                            still exploring this field, and game development,
                            where I am in the early stages of learning.
                            <br />I am constantly motivated to expand my skill
                            set and explore new horizons within the realm of
                            <br />
                            technology and creativity.
                        </p>
                    </div>
                    <div
                        className="konten-about-me-img"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        data-aos-easing="ease-in-out"
                    >
                        <img className="about-me-img" src="img/aboutme.JPG" />
                    </div>
                </div>
            </section>

            <footer>Build by Nanang Marvin Kurniawan.</footer>
        </>
    );
}

export default App;
