import {useRef, useEffect} from "react";

export function useDebounce(Fnc){

  const ref = useRef();

  function Debounced(){
    clearTimeout(ref.current)
    const interval = setTimeout(Fnc, 200);
    ref.current = interval;
  }

  useEffect(()=>{
    return ()=>{clearTimeout(ref.current)}
  }, []);

  return Debounced;

}
