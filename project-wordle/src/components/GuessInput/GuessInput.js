import React from "react";

function GuessInput() {
  const [word, setWord] = React.useState({guess: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(word)
    setWord({guess: ''});
  }

  const handleOnChange = (e) => {
    setWord({...word, guess: e.target.value.toUpperCase()})
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={word.guess} onChange={handleOnChange} pattern="\w{5}" />
    </form>
  );
}

export default GuessInput;
