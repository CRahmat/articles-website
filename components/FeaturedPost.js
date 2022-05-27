import InfoPost from '/components/InfoPost'
import Link from 'next/link'

export default function FeaturedPost() {
    return (
        <article>
            <div className="flex flex-col lg:flex-row mt-5 px-6 lg:px-0">
                <div className="w-full lg:w-8/12 pr-8 mb-5 lg:mb-0">
                <Link href="./details">
                    <a href="./details">
                        <img src="/thumbnail-4.png" className="rounded-xl w-full"/>
                    </a>
                </Link>
                </div>
                <div className="w-full lg:w-4/12">
                    <InfoPost 
                    postTitle= 'How to design a product that can grow itself 10x in year'
                    postDate= "June 28, 2021"
                    postCategory= "INTERNET"
                    href= '#'
                    postDesc= "Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor."
                    image= "/author-4.png"
                    author= "Jenny Wilson"
                    authorTitle= "Product Designer"
                    />
                </div>
            </div>
        </article>
    )
}