import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function GuessResults({ words, answer }) {
  return (
    <>
      {range(NUM_OF_GUESSES_ALLOWED).map((row) => {
        const word = words[row] ? words[row].guess : [];
        const checkedWord = word.length ? checkGuess(word, answer) : [];
        return (
          <p className="guess" key={crypto.randomUUID()}>
            {range(5).map((cell) => {
              return checkedWord[cell] ? (
                <span
                  className={`cell ${checkedWord[cell].status}`}
                  key={crypto.randomUUID()}
                >
                  {checkedWord[cell].letter}
                </span>
              ) : (
                <span className="cell" key={crypto.randomUUID()}></span>
              );
            })}
          </p>
        );
      })}
    </>
  );
}

export default GuessResults;
