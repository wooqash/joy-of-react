import React from "react";
import { checkGuess } from "../../game-helpers";

function Keyboard({words, answer}) {
  words.forEach(word => {
    const signs = checkGuess(word.guess, answer)
    signs.forEach(sign => {
      const key = document.getElementById(sign.letter)
      key.className = '';
      key.className = `keyboard-key ${sign.status}`;
    });
  });

  return <div className="keyboard">
    <ul className="keyboard-row">
      <li className="keyboard-key" id="Q">Q</li>
      <li className="keyboard-key" id="W">W</li>
      <li className="keyboard-key" id="E">E</li>
      <li className="keyboard-key" id="R">R</li>
      <li className="keyboard-key" id="T">T</li>
      <li className="keyboard-key" id="Y">Y</li>
      <li className="keyboard-key" id="U">U</li>
      <li className="keyboard-key" id="I">I</li>
      <li className="keyboard-key" id="O">O</li>
      <li className="keyboard-key" id="P">P</li>
    </ul>
    <ul className="keyboard-row">
      <li className="keyboard-key" id="A">A</li>
      <li className="keyboard-key" id="S">S</li>
      <li className="keyboard-key" id="D">D</li>
      <li className="keyboard-key" id="F">F</li>
      <li className="keyboard-key" id="G">G</li>
      <li className="keyboard-key" id="H">H</li>
      <li className="keyboard-key" id="J">J</li>
      <li className="keyboard-key" id="K">K</li>
      <li className="keyboard-key" id="L">L</li>
    </ul>
    <ul className="keyboard-row">
      <li className="keyboard-key" id="Z">Z</li>
      <li className="keyboard-key" id="X">X</li>
      <li className="keyboard-key" id="C">C</li>
      <li className="keyboard-key" id="V">V</li>
      <li className="keyboard-key" id="B">B</li>
      <li className="keyboard-key" id="N">N</li>
      <li className="keyboard-key" id="M">M</li>
    </ul>
  </div>;
}

export default Keyboard;
