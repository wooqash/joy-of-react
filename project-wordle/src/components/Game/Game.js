import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Banner from "../Banner/Banner";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [words, setWords] = React.useState([]);
  const [win, setWin] = React.useState(false);
  const [fail, setFail] = React.useState(false);
  console.log(win, fail);
  return (
    <>
      <Banner win={win} fail={fail} answer={answer} trials={words.length} />
      <GuessResults words={words} answer={answer}/>
      <GuessInput words={words} answer={answer} setWords={setWords} setFail={setFail} setWin={setWin} />
    </>
  );
}

export default Game;
