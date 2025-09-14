import { useState, useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "< Hello world />";

   useEffect(()=>{
    let index = 0;
    const interval = setInterval(() =>{
        setText(fullText.substring(0,index));
        index++;

        if (index > fullText.length){
            clearInterval(interval);
            console.log("is something no loading")
            setTimeout(() => {
                onComplete();
            }, 1000);
        }
    },100);

    return () => clearInterval(interval);
 },[onComplete]);





  return (
    <div className="fixed inset-0  z-50  text-gray-200 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className=" animate-blink ml-4"> | </span>
      </div>

      <div className="w-[800px] h-[2px] bg-gray-800 rounded overflow-hidden relative">
        <div className="bg-blue-500 h-full w-[40%] text-gray-200 animate-loading-bar"></div>
      </div>
    </div>
  );
};

