import { useEffect, useState } from "react";
import "./App.css";
import { useFetch, usePostTitle } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";

function App() {
  const [state, setState] = useState(0);
  const prev = usePrev(state);

  return (
    <div>
      <p>{state}</p>
      <button
        onClick={() => {
          setState((curr) => curr + 1);
        }}
      >
        Click Me
      </button>
      <p>The Previous Value was {prev}</p>
    </div>
  );
}

export default App;
