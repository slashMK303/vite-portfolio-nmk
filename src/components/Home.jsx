export default function Home() {
    return (
        <section>
            <div className="navfix animate__animated animate__fadeInDown">
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
                            <img className="email-img" src="img/Email.svg" />
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
                        I am a dedicated Full Stack Developer with approximately
                        2 years of experience in software
                        <br />
                        development. I specialize in creating responsive and
                        functional web applications. On this
                        <br />
                        portfolio website, you will find a collection of my
                        work, showcasing my skills in both frontend
                        <br />
                        and backend technologies. Explore my projects to see how
                        I can bring your ideas to life.
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
    );
}
