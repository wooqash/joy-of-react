import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "../Guess/Guess";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [words, setWords] = React.useState([]);
  return (
    <>
      <Guess words={words} answer={answer} />
      <GuessResults words={words} />
      <GuessInput words={words} setWords={setWords} />
    </>
  );
}

export default Game;
