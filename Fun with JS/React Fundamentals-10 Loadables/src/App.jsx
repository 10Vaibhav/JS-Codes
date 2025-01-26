import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilStateLoadable, useRecoilValueLoadable } from "recoil";
import { todosAtomFamily } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  // const [todo, setTodo] = useRecoilState(todosAtomFamily(id));
  // const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  const todo = useRecoilValueLoadable(todosAtomFamily(id));

  //{
  //  contents
  //  state
  //}

  if (todo.state === "loading") {
    return <div>loading ...</div>;

  } else if (todo.state === "hasValue") {
    return (
      <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
      </>
    );

  }else if (todo.state === "hasError"){
    return <div>
      Error Occurs While Fetching Data....
    </div>
  }

  // return (<>
  // {todo.title}
  // {todo.description}
  // <br/>
  // </>)
}

export default App;
