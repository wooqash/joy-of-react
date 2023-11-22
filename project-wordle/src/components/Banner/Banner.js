import React from "react";

function Banner({ win, fail, answer, trials }) {
  return (
    <div className={`${win ? "happy" : ""} ${fail ? "sad" : ""} banner`}>
      {win && (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {trials} guesses</strong>.
        </p>
      )}
      {fail && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
