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
    document.querySelectorAll('.keyboard-key').forEach(el => {
      el.className = '';
      el.className = 'keyboard-key'
    })
  }
  return <button onClick={handleOnClick}>Reset game</button>;
}

export default ResetButton;
