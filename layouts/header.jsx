import Image from 'next/image'
import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform, motionValue } from 'framer-motion'


function useParallax({value = 0, distance = 0}){
    return useTransform(value, [0, 1], [-distance, distance])
}


export default function Header(){
    const [second, setSecond] = useState('logo_anime')
    const ref = useRef()
    const {scrollYProgress, scrollY} = useScroll({target : ref})
    const y = useParallax({value : scrollY, distance : 30})

    setTimeout(() => {
        setSecond('logo_anime start')
    }, 2000)

    
    return(
        <header className="pb-5">

            <div className="sup mt-5">
                <div className="container">
                    <div className=" logo-cadre w-100 text-center">
                        <div className={second}>
                            <Image  src="/assets/icon/logo-cadre.png" width= "100%" height={"100%"} alt="" />
                        </div>
                    </div>
                    <div className='h3 text-center w-100 mt-3'>L'impression 3D pour l'Éducation</div>
                    <div className="text_1 grand-titre text-gradient text-center">
                        Une solution pratique
                    </div>
                    <div  className="text_2 titre w-100 text-center">
                        Pour l'enseignement
                    </div>
                </div>
            </div>
            <div ref={ref} className="diapo">
                <motion.div className="ext"
                    style={{y}}
                >
                    <div className="ext_gauche" style={{backgroundImage : 'url(/assets/images/ext-gauche.jpg)'}} ></div>
                    <div className="ext_droite" style={{backgroundImage : 'url(/assets/images/ext_droite.jpg)'}}></div>
                </motion.div>
                <motion.div className="proxi">
                    <div className="gauche" style={{backgroundImage : 'url(/assets/images/image-2.jpg)'}}></div>
                    <div className="droite" style={{backgroundImage : 'url(/assets/images/diapo-2.jpg)'}} ></div>
                </motion.div>
                <motion.div className="cent">
                    <div className="centre" style={{backgroundImage : 'url(/assets/images/center_2.jpg)'}} ></div>
                </motion.div>
            </div>

        </header>
    )
}