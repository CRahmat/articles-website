import Link from 'next/link'

export default function PostMetaTitle({postCategory, postDate, postTitle}) {
    return (
        <>
            <div className="flex items-center opacity-80 mb-3">
                <p>{postCategory}</p>
                <span className="h-1 w-1 bg-white rounded-full mx-3"></span>
                <p>{postDate}</p>
            </div>
            <Link href="./details">
                <a href="./details">
            <h3 className="text-2xl mb-3 cursor-pointer hover:text-gray-400 transition-all">{postTitle}</h3>
            </a>
            </Link>
        </>
    )
}
