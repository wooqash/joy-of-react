import React from "react";

function GuessInput({words, setWords}) {
  const [word, setWord] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWords = [...words, { guess: word, id: crypto.randomUUID()}];
    setWords(newWords);
    setWord("");
  }

  const handleOnChange = (e) => {
    setWord(e.target.value.toUpperCase())
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={word} onChange={handleOnChange} pattern="\w{5}" />
    </form>
  );
}

export default GuessInput;
