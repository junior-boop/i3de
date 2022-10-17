export default function Bannier({name}){
    return(
        <div class="container-fluid bg-special">
            <div class="container">
                <div class="titre w-100 py-5 color-white">
                    {name}
                </div>
            </div>
        </div>
    )
}