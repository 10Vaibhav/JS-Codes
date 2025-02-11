import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
import './App.css'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div>
      <h1 className="text-2xl mb-4 ml-12">Learn About Redux ToolKit</h1>
      <AddTodo />
      </div>
      <div className="text-2xl mb-4">Todos</div>
      <div className="w-8/12">
      <Todos />
      </div>
    </div>

  )
}

export default App
