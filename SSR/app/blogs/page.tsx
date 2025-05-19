import axios from "axios";

async function getBlogs(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");

    return response.data;
}

interface ITodo {
    id?: number;
    title: string;
    completed: boolean;
}


export default async function blogs(){

    const blogs = await getBlogs();

    return <div>
        Learn Recoil/Redux from the Best platform in the world!!
        {/* {JSON.stringify(blogs)} */}
        {blogs.map((blog: ITodo) => <Todo key={blog.id} title={blog.title} completed={blog.completed}/>)}
    </div>
}

function Todo({title,completed}: ITodo){

    return <div>
        {title} {completed? "Done": "notDone"}
    </div>
}
