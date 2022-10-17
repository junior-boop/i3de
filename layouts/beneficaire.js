import Container from "../composants/container"

export default function Beneficiaire(){
    return(
        <>  
            <div className="vide" />
            <div className="container-fluide mt-5" style = {{backgroundColor : '#fafafa'}}>
                <div className="h1 w-100 text-center pt-5"> Bénéficiaires </div>
                <Container cName = {'row pb-5'} style = {{gap : 36, justifyContent : 'center'}}>
                    <BeneficaireItem 
                        className={"beneficiaireItem "}
                        titre={"Bénéficiaires directs"}
                        chiffre1={'05'} text1 = {"Les Établissements d'enseignement technique et Industriel du second cycle"} 
                        chiffre2={'55'} text2 = {"Les enseignants desdits établissements techniques"}
                    />
                    <BeneficaireItem  inverse
                        className={"beneficiaireItem "}
                        titre={"Bénéficiaires indirects"}
                        chiffre1={'+6K'} text1={"Les éleves des établissements ciblé"} 
                        chiffre2={'05'} text2 = {"La communauté éducative toute entières"}
                    />
                </Container>
            </div>
        </>
    )
}

function BeneficaireItem({inverse, chiffre1, chiffre2, text1, text2, titre, className}){

    const Chiffre = { width : '30%', textAlign : "center", fontSize : 42, fontWeight : '300'}
    const Box = {display : "flex", alignItems : "center", padding : "10px 0",  flexDirection : inverse ? 'row-reverse' : 'row'}
    const text = { width : '70%', fontSize : 16, fontWeight : '500', textAlign : !inverse ? 'left' : 'right', paddingRight : 10}
    return (
        <div className={className}>
            <div className={!inverse ? "bg-orange" : 'bg-orange-rouge'} style={{width : '100%',padding : 12, fontSize : 18, fontWeight : '500', color : "white", borderRadius : 5, marginBottom : 10, textAlign : !inverse ? 'left' : 'right' }}>{titre}</div>
            <div style={Box}>
                <div className={!inverse ? "color-orange" : "color-orange-rouge"} style={Chiffre}>
                    {chiffre1}
                </div>
                <div style={text}>
                    {text1}
                </div>
            </div>
            <div style={Box}>
                <div className={!inverse ? "color-orange" : "color-orange-rouge"} style={Chiffre}>
                   {chiffre2}
                </div>
                <div style={text}>
                    {text2}
                </div>
            </div>
        </div>
    )
}

