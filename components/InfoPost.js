import PostAuthor from "./PostAuthor"
import PostMetaTitle from "./PostMetaTitle"
export default function InfoPost({
    postTitle,
    postDate,
    postCategory,
    href,
    postDesc,
    image,
    author,
    authorTitle,
}) {
    return (
        <div className="block">
            <PostMetaTitle postCategory={postCategory} postTitle={postTitle} postDate={postDate} />
            <p className="text-sm opacity-80 w-10/12">{postDesc}</p>
            <PostAuthor image={image} author={author} authorTitle={authorTitle} />
        </div>
    )
}