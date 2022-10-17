import Head from "next/head";
import Bannier from "../../layouts/bannier";
import Bloglist from "../../layouts/Bloglist";
import Recents from "../../layouts/blogRecent";

export default function Actualite (){
    return(
        <>
            <Head>
                <title>Actualite | I3DE </title>
            </Head>
            <Bannier name={"Actualités"} />
            <Recents />
            <Bloglist />
        </>
    )
}