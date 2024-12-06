export default function About() {
    return (
        <section>
            <div id="aboutme" className="container">
                <div className="konten-home">
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
                        Hello! My name is Nanang Marvin Kurniawan, and I am a
                        passionate Full Stack Developer with
                        <br />
                        approximately 2 years of experience in software
                        development. I specialize in creating
                        <br />
                        responsive and functional web applications. Throughout
                        my journey as a Full Stack
                        <br />
                        Developer, I have gained expertise in both frontend and
                        backend technologies, allowing me
                        <br />
                        to deliver seamless and user-friendly digital
                        experiences.
                        <br />
                    </p>

                    {/* Card Skill */}
                    <div
                        className="card text-center border-info"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-delay="800"
                        data-aos-easing="ease-in-out"
                    >
                        <div className="card-header border-info">
                            <ul className="nav nav-tabs card-header-tabs border-info">
                                <li className="nav-item ">
                                    <a
                                        className="nav-link text-white"
                                        style={{ borderColor: "transparent" }}
                                        onMouseEnter={(e) =>
                                            (e.target.style.borderColor =
                                                "#0dcaf0")
                                        }
                                        onMouseOut={(e) =>
                                            (e.target.style.borderColor =
                                                "transparent")
                                        }
                                        href="#aboutme"
                                    >
                                        Skill
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-white"
                                        style={{ borderColor: "transparent" }}
                                        onMouseEnter={(e) =>
                                            (e.target.style.borderColor =
                                                "#0dcaf0")
                                        }
                                        onMouseOut={(e) =>
                                            (e.target.style.borderColor =
                                                "transparent")
                                        }
                                        href="#aboutme"
                                    >
                                        Link
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-white">
                                Special title treatment
                            </h5>
                            <p className="card-text text-white">
                                With supporting text below as a natural lead-in
                                to additional content.
                            </p>
                            <a href="#" className="btn btn-info">
                                Go somewhere
                            </a>
                        </div>
                    </div>
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
    );
}
