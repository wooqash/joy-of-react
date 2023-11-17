import React from "react";

function GuessResults({words}) {
  return (
    <div className="guess-results">
      {words.map(word => (
        <p className="guess" key={word.id}>{word.guess}</p>
      ))}
    </div>
  );
}

export default GuessResults;
