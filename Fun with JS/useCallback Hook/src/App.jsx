import { useCallback, useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';

function App() {
  const [count, setCount] = useState(0)

 const handleClick = useCallback(() => {
  setCount(prev => prev + 1);
 }, []);

  return (
    <>
    <div>Count : {count}</div>
    <br/> <br />
    <div>
      <button onClick={handleClick}>Increment</button>
    </div>
    <br/> <br />
    <div>
      <ChildComponent
      buttonName="Click Me"
      handleClick={handleClick}
      />
    </div>
    </>
  )
}

export default App

