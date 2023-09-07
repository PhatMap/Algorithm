import React, { useEffect, useState } from "react";
import "../styles/Board.css";

const Board = () => {
  const [array, setArray] = useState([]);
  const element = "board-item set";

  function elementFactory() {
    const newArray = [];
    for (let index = 0; index < 64; index++) {
      newArray.push(element);
    }
    setArray(newArray);
  }

  function paintBox() {
    const newArray = [...array];
    newArray[randomNumber(63,0)] = "board-item unset";
    setArray(newArray);
  }

  function randomNumber(max, min) {
    const random = Math.random();
    const randomNumber = Math.floor(random * (max - min + 1) + min);
    return randomNumber;
  }

  useEffect(() => {
    elementFactory();
  }, []);

  return (
    <div>
      <button onClick={paintBox}>Start</button>
      <div className="board-container">
        {array.map((element, index) => (
          <p key={index} className={element}>
            {index}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Board;
