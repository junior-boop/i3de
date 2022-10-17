import Container from "../composants/container";

export default function Recents(){
    return(
        <section id="recent">
            <Container >
                <div className="row col-12 col-md-9 m-auto">
                    <div className="col-12 col-md-5 d-flex justify-content-center">
                        <div style={{width : '100%', overflow : 'hidden', borderRadius : 12}}>
                            <img src="/assets/images/image-test.jpg" alt="image" width={'100%'} />
                        </div> 
                    </div>
                    <div className="col-12 col-md-7">
                        <div className="p">publié hier, à 21h</div>
                        <div className="h2">De nouvelles opportunités d'apprentissage</div>
                        <div className="mt-3 h5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ab quod id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laborum nisi corporis.
                        </div>
                        <div>
                            <a href="single.html" className="more d-flex align-items-center float-start mt-5">
                                <span className="label">Read More...</span>
                                <span className="arrow"><span className="icon-keyboard_arrow_right"></span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

