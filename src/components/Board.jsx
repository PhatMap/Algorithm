import React, { useEffect, useRef, useState } from "react";
import "../styles/Board.css";
import { Linear, Red } from "./Algorithm";

const Board = () => {
  const [array, setArray] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [n, setN] = useState(0);
  const inputRef = useRef(null);
  const [result, setResult] = useState([]);

  function handleInput(event) {
    if (event.key == "Enter") {
      setInitValue();
    }
  }

  function setInitValue() {
    const inputValue = inputRef.current.value;
    setN(inputValue);
    setIsVisible(true);
    inputRef.current.value = "";
  }

  function elementFactory() {
    const newArray = [];
    for (let index = 0; index < n; index++) {
      newArray.push("board-item set");
    }
    setArray(newArray);
  }

  function algorithmRun() {
    const newArray = [...array];
    result.forEach((element, index) => {
      setTimeout(() => {
        newArray[element] = "board-item unset";
        setArray([...newArray]);
      }, index * 1000);
    });
  }

  useEffect(() => {
    setResult([...Linear(n)]);
    elementFactory();
  }, [n]);

  return (
    <>
      <div className="control">
        <input
          className="control-input"
          ref={inputRef}
          onKeyDown={handleInput}
        ></input>
        {isVisible && <button onClick={algorithmRun}>Start</button>}
      </div>
      <div className="board-container">
        {array.map((element, index) => (
          <p key={index} className={element}>
            {index}
          </p>
        ))}
      </div>
    </>
  );
};

export default Board;
