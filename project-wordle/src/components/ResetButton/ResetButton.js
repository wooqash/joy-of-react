import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";

function ResetButton({ setWin, setFail, setWords, setAnser, setIsDisabled }) {
  const handleOnClick = () =>{
    setFail(false);
    setWin(false);
    setWords([]); 
    setAnser(sample(WORDS));
    setIsDisabled(false);
  }
  return <button onClick={handleOnClick}>Reset game</button>;
}

export default ResetButton;
