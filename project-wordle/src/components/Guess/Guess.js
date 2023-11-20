import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess({ words }) {
  const filledRows = words.length;
  return (
    <>
      {range(NUM_OF_GUESSES_ALLOWED).map((row) => {
        const letters = filledRows && words[row] ? words[row].guess.match(/\S/g) : [];
        return <p className="guess" key={crypto.randomUUID()}>
          {range(5).map((cell) => <span className="cell" key={crypto.randomUUID()}>{letters[cell]}</span>)}
        </p>;
      })}
    </>
  );
}

export default Guess;
