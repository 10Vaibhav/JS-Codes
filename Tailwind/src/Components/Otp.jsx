import React from "react";
import { useRef, useState } from "react";


// 1, 2, 3, 6, 10
function Otp({number}) {

  const ref = useRef([Array(number).fill(0)]);

  return (
    <div className="flex justify-center">

      {Array(number).fill(1).map( (x,index) => <SubOtpBox
        key={index}
        ref={ (e) => ref.current[index] = e}
        onDone={() => {
          if (index + 1 >= number){
            return
          }
          ref.current[index + 1].focus();
        }}
        onBack={ () => {
          if(index == 0){
            return
          }
          ref.current[index -1].focus();
        }}
      /> )}


    </div>
  );
}

const SubOtpBox = ({ ref, onDone, onBack }) => {
  const [inputBoxVal, setInputBoxVal] = useState("");

  return (
    <div>
      <input
        value={inputBoxVal}
        ref={ref}
        onKeyUp={(e) => {
          if (e.key == "Backspace") {
            onBack();
          }
        }}
        onChange={(e) => {
          const val = e.target.value;
          if (!isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 9) {
            setInputBoxVal(val);
            onDone();
          } else {
            setInputBoxVal("");
          }
        }}
        type="text"
        className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 px-4 text-white outline-none"
      ></input>
    </div>
  );
};

export default Otp;
