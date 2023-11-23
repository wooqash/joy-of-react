import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Banner from "../Banner/Banner";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import ResetButton from "../ResetButton/ResetButton";
import Keyboard from "../Keyboard/Keyboard";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [words, setWords] = React.useState([]);
  const [win, setWin] = React.useState(false);
  const [fail, setFail] = React.useState(false);
  const [answer, setAnser] = React.useState(() => sample(WORDS));
  const [isDisabled, setIsDisabled] = React.useState(false);
  console.log(answer);
  return (
    <>
      <ResetButton setWords={setWords} setWin={setWin} setFail={setFail} setAnser={setAnser} setIsDisabled={setIsDisabled} />
      <Banner win={win} fail={fail} answer={answer} trials={words.length} />
      <GuessResults words={words} answer={answer}/>
      <GuessInput words={words} answer={answer} isDisabled={isDisabled} setWords={setWords} setFail={setFail} setWin={setWin} setIsDisabled={setIsDisabled} />
      <Keyboard words={words} answer={answer} />
    </>
  );
}

export default Game;
