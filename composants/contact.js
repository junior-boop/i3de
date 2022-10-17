export default function Contact() {
    return (
        <body>

            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close">
                        <span className="icofont-close js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>

            <nav className="site-nav mt-3">
                <div className="container">

                    <div className="site-navigation">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <a href="index.html" className="logo m-0 float-start">Sterial</a>
                            </div>
                            <div className="col-lg-6 d-none d-lg-inline-block text-center nav-center-wrap">
                                <ul className="js-clone-nav  text-center site-menu p-0 m-0">
                                    <li><a href="index.html">Home</a></li>
                                    <li className="active"><a href="about.html">About us</a></li>
                                    <li className="has-children">
                                        <a href="#">Dropdown</a>
                                        <ul className="dropdown">
                                            <li><a href="#">Menu One</a></li>
                                            <li className="has-children">
                                                <a href="#">Menu Two</a>
                                                <ul className="dropdown">
                                                    <li><a href="#">Sub Menu One</a></li>
                                                    <li><a href="#">Sub Menu Two</a></li>
                                                    <li><a href="#">Sub Menu Three</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Menu Three</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="services.html">Services</a></li>
                                    <li><a href="blog.html">Blog</a></li>

                                </ul>
                            </div>
                            <div className="col-6 col-lg-3 text-lg-end">
                                <ul className="js-clone-nav d-none d-lg-inline-block text-end site-menu ">
                                    <li className="cta-button"><a href="contact.html">Contact Us</a></li>
                                </ul>

                                <a href="#" className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light" data-toggle="collapse" data-target="#main-navbar">
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>




            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12" data-aos="fade-up" data-aos-delay="0">

                            <h2 className="heading mb-5">Get In Touch</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                            <div className="contact-info">

                                <div className="address mt-4">
                                    <i className="icon-room"></i>
                                    <h4 className="mb-2">Location:</h4>
                                    <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                                </div>

                                <div className="open-hours mt-4">
                                    <i className="icon-clock-o"></i>
                                    <h4 className="mb-2">Open Hours:</h4>
                                    <p>
                                        Sunday-Friday
                                        11:00 AM - 2300 PM
                                    </p>
                                </div>

                                <div className="email mt-4">
                                    <i className="icon-envelope"></i>
                                    <h4 className="mb-2">Email:</h4>
                                    <p>info@</p>
                                </div>

                                <div className="phone mt-4">
                                    <i className="icon-phone"></i>
                                    <h4 className="mb-2">Call:</h4>
                                    <p>+1 1234 55488 55</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                            <form action="#">
                                <div className="row">
                                    <div className="col-6 mb-3">
                                        <input type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <input type="email" className="form-control" placeholder="Your Email" />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <input type="text" className="form-control" placeholder="Subject" />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                                    </div>

                                    <div className="col-12">
                                        <input type="submit" value="Send Message" className="btn btn-primary" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </body>

    )
}