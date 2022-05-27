export default function PostAuthor({image, author, authorTitle}) {
    return (
        <>
            <div className="flex mt-7">
                <img src={image} className="h-12 w-12 rounded-full" alt="Images" />
                <div className="block ml-5">
                    <h6>{author}</h6>
                    <p className="opacity-80">{authorTitle}</p>
                </div>
            </div>
        </>
    )
}
