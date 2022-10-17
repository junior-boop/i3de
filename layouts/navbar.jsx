import Image from "next/image";
import Container from "../composants/container";
import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from "react";


export default function NavBar(){
    const [visible, setVisible] = useState(false)
    const [scroll, setScroll] = useState('absolute')
    const {scrollY} = useScroll()
    

    useEffect(() => {
        return scrollY.onChange((a) => {
            a > 0 ? setScroll('fixed') : setScroll('absolute')
        })
    }, [])




    const handleVisibility = () => setVisible(!visible)
    

    
    return(
        <nav style =  {{ position : scroll}}>
        <div className="container-fluid">
            <Container cName={'d-flex'}>
                <div className="logo">
                    <div>
                        <Image src="/i3de_black.png" width= {85} height = {48} alt="logo i3de" />
                    </div>
                </div>
                <div className="icon-right d-flex">
                    <button>Faites un don</button>
                    <motion.div className="menu"
                        whileTap={{scale : 0.9}}
                        transition = {{ type : 'spring', stiffness : 200, damping : 6 }}
                    >
                        <Image src = {'/icon_burgeur.svg'} width= {28} height = {28}  onClick = {handleVisibility} />
                    </motion.div>
                </div>
                <motion.div className="nav-overlay"
                    data-visible = {visible}
                    
                >
                    <div style={{ display : "flex", width : 'auto'}}>
                    <motion.div className="cover" onClick={handleVisibility} layout = {'size'} transition = {{ type : 'spring', stiffness : 700, damping : 70}} ></motion.div>
                    <motion.div className="nav-content"
                        data-visible = {visible}
                        
                    >
                        <div className="vide">
                            <div className="close_btn close">
                                <motion.div className=" icone"
                                     whileTap={{scale : 0.9}}
                                     transition = {{ type : 'spring', stiffness : 200, damping : 6 }}
                                     onClick = {handleVisibility}
                                >
                                    <div>
                                        <Image src="/assets/icon/icon_close.png" width= {28} height = {28} alt="" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li><a href="/">Accueil</a></li>
                                <li><a href="/ressource">Ressources</a></li>
                                <li><a href="/actualites">Actualités</a></li>
                                <li><a href="/contact-us">Contactez-nous</a></li>
                                <button style={{border : '3px solid var(--bg-color-orange)', borderRadius : 10, padding : '7px 20px', backgroundColor : 'transparent', margin : '12px 0', color : 'var(--bg-color-orange-rouge)', fontWeight :'700'}}>Inscrivez-vous</button>
                            </ul>
                        </div>
                        <div>
                            <div className="content">
                                <div>
                                    <Image src="/assets/icon/logo-cadre.png" width= {100} height = {100} alt="" />
                                </div>
                                <div>
                                    <h4 class="text-gradient">Impression 3D <br/> pour l'Education</h4>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    </div>
                </motion.div>
            </Container>
        </div>
    </nav>
    )
}

