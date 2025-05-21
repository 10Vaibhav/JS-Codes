import axios from "axios";

interface ParamsType {
    params: {
        postId: string
    }
}

export default async function BlogPage({params}: ParamsType){
    const postId = (await params).postId;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = await response.data;
    return <div>
        BlogPage {postId}
        <br />
        title - {data.title}
        <br />
        body - {data.body}
    </div>
}

