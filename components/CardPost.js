import InfoPost from '/components/InfoPost'
import Link from 'next/link'

export default function CardPost({postImage, ...infoPost}) {
    return (
        <div className="block mt-5">
            <Link href="./details">
                <a href="./details">
                    <div className="w-full mb-4">
                        <img src={postImage} className="rounded-xl w-full" />
                    </div>
                </a>
            </Link>
            <InfoPost {...infoPost} />
        </div>
    )
}