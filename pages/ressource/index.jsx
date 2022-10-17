import Container from "../../composants/container";
import Bannier from "../../layouts/bannier";
import Titre from '../../composants/titre'

export default function Ressource(){
    return(
        <>
            <Bannier name={'Ressources'} />
            <section style={{ padding : '7rem 0'}}>
            <Container>
                <Titre titre={'Nouvelles Images'} />
                <div className="row nouveau">
                    <ImageItem />
                    <ImageItem />
                    <ImageItem />
                    <ImageItem />
                    <ImageItem />
                    <ImageItem />
                    <ImageItem />
                    <ImageItem />
                </div>
                <div className="gallerie">
                <Titre titre={'Gallerie'} />
                </div>
            </Container>
            </section>
        </>
    )
}



function ImageItem({image}){
    return(
        <div className="col-6 col-md-3 d-flex mb-4 justify-content-center">
            <div className="col-12" style={{backgroundImage : `url(${image})`, backgroundPosition : 'center', backgroundSize : 'cover', aspectRatio : 1, backgroundColor : "silver", borderRadius : 12}}></div>   
        </div>
    )
}