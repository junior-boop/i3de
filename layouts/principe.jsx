import Container from "../composants/container";
import Image from 'next/image'
import Style from '../styles/style-e.module.css'

export default function Principal(){
    return(
        <>
        <div className="vide"></div>
        <div className="vide"></div>
        <h1 className='w-100 text-center mt-5'>
            Les 04 Piliers
        </h1>
        <section className={Style.container} style={{display : 'flex', alignItem : 'center', gap : 16, flexWrap : 'wrap', padding : '64px 0'}}>
            <Element className={'rand-1 rand-4-phone bg-clair element'} 
            title = {'Contribution Écologique'} 
            texte = {"Réduction de l'empreinte carbone via la réutilisation (recyclage à moyen terme) ds déchets plastiques pour améliorer l'approvisionnement en filament pour les impression"}
            />
            <Element 
                hasImage
                className={'rand-3 rand-4-phone bg-clair element'}
                style = {{ position : 'relative', overflow : 'hidden'}} 
                imageSrc = {'/assets/images/image_Model.png'}
                title = {"Promotion de la recherche et de l'innovation"}
                texte = {"Grâce aux  compétence acquises, les enseignants pourront initier er organiser des  projets de recherche et d'incitation à l'entrepreneuriat incluant les apprenant mis en groupes. ces groupes pourront développer des idées et solutions qui seront materialisées par des prototypes d'objetc imprimés en 3D. comme exemple : la conception de la maquette d'un moteur de voiture en plastique ou d'un monument historique. Les apprenants vont ainsi utiliser les resources du FabLab assembler et obtenir le projet final. Les kits créés pourront être présentés à des concours foires et journées portes-ouvertes."}
            />
            <Element className={'rand-2 rand-4-phone bg-clair element'}
                title = {'Renforcement du capital humain'}
                texte = {'Les enseignants enrôles dans le projet I3DE pourrant créer des kits éducatifs adapté aux besoins des élèves, afin de booster l\'assimilation des concepts pratiques, stimuler le sens de l\'innovation et de la création de ces derniers. L\'enseignement et l\'apprentissage de certaines matieres et concepts seront ainsi simplifiés avec l\'utlisation du matériel pédagogique adapté et representatif des objets enseignés desormais imprimés en 3D'}
            />
            <Element className={'rand-2 rand-4-phone bg-clair element'} 
                title = {"Durabilité des kits éducatifs"}
                texte = {"Pour éviter l'usages de filament les objets 3D n'ont qu'une durée de vie de 5ans \n \n <b>Mutualisation des ressources :</b> \n Creation d'une banque de Modèle 3D + fiches pédagogiques les plus optimales. un reseau de partage sera disponible en ligne et mettra à la disposition  de tous les enseignants (Cameroun, Afrique, Monde) les ressources plus utiles et appréciés  "}
            />
        </section>
        </>
    )
} 

function Element({style, className, title, texte, hasImage, imageSrc}){
    return(
        <div className={className} style={{ padding : 36, borderRadius : 16,...style }}>
            <div className = 'h4 color-orange-rouge' style={{textTransform : "uppercase", marginBottom : 12}}>{title}</div>
            <div style={{ width : hasImage ? '70%' : '100%'}}>{texte}</div>
            {
                hasImage ? (<div style = {{ position : 'absolute', bottom : '-50px', right : -30 }}>
                    <Image
                width = {320} height = {250} 
                src = {imageSrc}
             />
                </div>) : null
            }
        </div>
    )
}