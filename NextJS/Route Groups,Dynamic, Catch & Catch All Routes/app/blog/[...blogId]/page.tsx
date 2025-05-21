
interface BlogType{
    params: {
        blogId: []
    }
}

export default async function Blogs({params}:BlogType) {

    const posts = (await params).blogId; // [1,2,3,4]

    return <div>
        Blog Page {JSON.stringify(posts)}
    </div>

}
