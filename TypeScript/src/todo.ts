interface TodoType{
    title: string;
    description: string;
    done: boolean;
}

// one interface use another interface
interface TodoInput {
    todo: TodoType;
    lastDoneAt: Date;
}

function Todo(props: TodoInput){
    props.todo.description;
    props.lastDoneAt = new Date();
}

type User = {
    name: string,
    age: number
}

interface userType{
    name: string;
    age: number;
}