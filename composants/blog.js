export default function BlogItem() {
    return (
            <div className='col-6 col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100"'>
                <div className="media-entry">
                    <div>
                        <a className=" imag" style = {{backgroundImage : 'url(/assets/images/image-test.jpg)'}}>
                            
                        </a>
                    </div>
                    <div className="bg-white m-body">
                        <div>
                            <span className="date">May 14, 2020</span>
                        </div>
                        <div>
                            <h3><a href="index.html">Far far away, behind the word mountains</a></h3>
                        </div>
                        <div>
                            <p>Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
                        </div>
                        <div>
                            <a href="single.html" className="more d-flex align-items-center float-start">
                                <span className="label">Read More</span>
                                <span className="arrow"><span className="icon-keyboard_arrow_right"></span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export function BlogNew() {
    return (
            <div className='col-6 col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100" p-0'>
                <div className="blogNew">
                    <div className="imageTop" style={{backgroundImage : `url(/assets/images/image-test.jpg)`}}></div>
                    <div className="descBlog">
                        <div>Le titre de l'article que je ne connais pas encore</div>
                        <div>date de publication</div>
                    </div>
                </div>
            </div>
    )
}


export function Blog() {
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
                                    <li><a href="about.html">About us</a></li>
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
                                    <li className="active"><a href="blog.html">Blog</a></li>

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

                <div className="row">
                    <div className="col-md-8 blog-content pe-5">
                        <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                        <blockquote><p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p></blockquote>

                        <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>

                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>

                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                        <blockquote><p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p></blockquote>

                        <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>

                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>


                        <div className="pt-5">
                            <p>Categories:  <a href="#">Design</a>, <a href="#">Events</a>  Tags: <a href="#">#html</a>, <a href="#">#trends</a></p>
                        </div>


                        <div className="pt-5">
                            <h3 className="mb-5">6 Comments</h3>
                            <ul className="comment-list">
                                <li className="comment">
                                    <div className="vcard bio">
                                        <img src="images/person_2.jpg" alt="Free Website Template by Free-Template.co" />
                                    </div>
                                    <div className="comment-body">
                                        <h3>Jacob Smith</h3>
                                        <div className="meta">January 9, 2018 at 2:21pm</div>
                                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                        <p><a href="#" className="reply">Reply</a></p>
                                    </div>
                                </li>

                                <li className="comment">
                                    <div className="vcard bio">
                                        <img src="images/person_3.jpg" alt="Free Website Template by Free-Template.co" />
                                    </div>
                                    <div className="comment-body">
                                        <h3>Chris Meyer</h3>
                                        <div className="meta">January 9, 2018 at 2:21pm</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                        <p><a href="#" className="reply">Reply</a></p>
                                    </div>

                                    <ul className="children">
                                        <li className="comment">
                                            <div className="vcard bio">
                                                <img src="images/person_1.jpg" alt="Free Website Template by Free-Template.co" />
                                            </div>
                                            <div className="comment-body">
                                                <h3>Chintan Patel</h3>
                                                <div className="meta">January 9, 2018 at 2:21pm</div>
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                                <p><a href="#" className="reply">Reply</a></p>
                                            </div>


                                            <ul className="children">
                                                <li className="comment">
                                                    <div className="vcard bio">
                                                        <img src="images/person_1.jpg" alt="Free Website Template by Free-Template.co" />
                                                    </div>
                                                    <div className="comment-body">
                                                        <h3>Jean Doe</h3>
                                                        <div className="meta">January 9, 2018 at 2:21pm</div>
                                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                                        <p><a href="#" className="reply">Reply</a></p>
                                                    </div>

                                                    <ul className="children">
                                                        <li className="comment">
                                                            <div className="vcard bio">
                                                                <img src="images/person_2.jpg" alt="Free Website Template by Free-Template.co" />
                                                            </div>
                                                            <div className="comment-body">
                                                                <h3>Ben Afflick</h3>
                                                                <div className="meta">January 9, 2018 at 2:21pm</div>
                                                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                                                <p><a href="#" className="reply">Reply</a></p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li className="comment">
                                    <div className="vcard bio">
                                        <img src="images/person_1.jpg" alt="Free Website Template by Free-Template.co" />
                                    </div>
                                    <div className="comment-body">
                                        <h3>Jean Doe</h3>
                                        <div className="meta">January 9, 2018 at 2:21pm</div>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                        <p><a href="#" className="reply">Reply</a></p>
                                    </div>
                                </li>
                            </ul>

                            <div className="comment-form-wrap pt-5">
                                <h3 className="mb-5">Leave a comment</h3>
                                <form action="#" className="">
                                    <div className="mb-3">
                                        <label for="name">Name *</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="email">Email *</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="website">Website</label>
                                        <input type="url" className="form-control" id="website" />
                                    </div>

                                    <div className="mb-3">
                                        <label for="message">Message</label>
                                        <textarea name="" id="message" cols="30" rows="10" className="form-control"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <input type="submit" value="Post Comment" className="btn btn-primary btn-md text-white" />
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 sidebar">
                        <div className="sidebar-box">
                            <form action="#" className="search-form">
                                <div className="form-group">
                                    <span className="icon fa fa-search"></span>
                                    <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                                </div>
                            </form>
                        </div>
                        <div className="sidebar-box">
                            <div className="categories">
                                <h3>Categories</h3>
                                <li><a href="#">Creatives <span>(12)</span></a></li>
                                <li><a href="#">News <span>(22)</span></a></li>
                                <li><a href="#">Design <span>(37)</span></a></li>
                                <li><a href="#">HTML <span>(42)</span></a></li>
                                <li><a href="#">Web Development <span>(14)</span></a></li>
                            </div>
                        </div>
                        <div className="sidebar-box">
                            <img src="images/person_1.jpg" alt="Free Website Template by Free-Template.co" classNameName="img-fluid mb-4 w-50 rounded-circle" />
                            <h3 className="text-black">About The Author</h3>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                            <p><a href="#" className="btn btn-primary btn-md text-white">Read More</a></p>
                        </div>

                        <div className="sidebar-box">
                            <h3 className="text-black">Paragraph</h3>
                            <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                        </div>
                    </div>
                </div>
            </div>

        </body>
    )
}


