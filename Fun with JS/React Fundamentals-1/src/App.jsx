import { useState, useEffect } from "react";

function App(){

  const [showTimer, setShowTimer] = useState(true);

  useEffect(
    function(){
      setInterval(function(){
        setShowTimer(currentValue => !currentValue);
      }, 5000)
    },
    []
  )

  return <div>
    {showTimer && <Timer/>}
  </div>

}

const Timer = ()=>{

  const [seconds, setSeconds] = useState(0);

  useEffect(()=>{

    // It Calls when component is mount.
    const clock =  setInterval(()=>{
      setSeconds(prev=>prev+1);
    },1000);

    // It Calls when component is  unmount.
    return function(){
      clearInterval(clock);
    }

  },[]);

  return <div>{seconds} seconds elapsed</div>

}

export default App

