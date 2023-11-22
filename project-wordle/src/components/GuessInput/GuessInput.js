import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({ words, answer, isDisabled, setWords, setWin, setFail,setIsDisabled }) {
  const [word, setWord] = React.useState("");
  
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const newWords = [...words, { guess: word, id: crypto.randomUUID()}];
    setIsDisabled(word === answer || newWords.length === NUM_OF_GUESSES_ALLOWED);
    if (word === answer){
      setWin(true);
    }
    if (newWords.length === NUM_OF_GUESSES_ALLOWED) {
      setFail(true);
    }
    setWords(newWords);
    setWord("");
  }

  const handleOnChange = (e) => {
    setWord(e.target.value.toUpperCase())
  }

  return (
    <form className={`guess-input-wrapper ${isDisabled ? "guess-input-wrapper--disabled" : ""}`} onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={word} onChange={handleOnChange} pattern="\w{5}" maxLength={5} disabled={isDisabled} />
    </form>
  );
}

export default GuessInput;
