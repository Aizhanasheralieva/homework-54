import "./App.css";
import { useState } from "react";
import Tries from "./components/Tries/Tries.tsx";

interface IBlock {
  hasItem: boolean;
  id: number;
  class: "objectBlock" | "objectOpen" | "circle";
}
const App = () => {
  const [blockItems, setBlockItems] = useState<IBlock[]>([]);
  const [numberOfTries, setNumberOfTries] = useState<number>(0);

  const generateBoardField = () => {
    const blockObjectArray: IBlock[] = [];

    for (let i = 0; i < 36; i++) {
      blockObjectArray.push({
        hasItem: false,
        id: i,
        class: "objectBlock",
      });
    }

    const someRandomIndex = Math.floor(Math.random() * blockObjectArray.length);
    blockObjectArray[someRandomIndex].hasItem = true;

    setBlockItems(blockObjectArray);
  };

  if (blockItems.length === 0) {
    generateBoardField();
  }

  const clickedOnBlockCell = (index: number) => {
    console.log(index);
    setBlockItems(prevState =>
      prevState.map((blockItem) => {
        if (blockItem.id === index) {
          if (blockItem.hasItem === false) {
              return { ...blockItem, class: "objectOpen" };
          } else {
            return { ...blockItem, class: "circle" };
          }
        }

        return blockItem;
      }),
    );

    setNumberOfTries((prevState) => prevState + 1);
  };

  return (
    <>
      <div className="squareField">
        {blockItems.map((blockItem) => (
          <div
            onClick={() => clickedOnBlockCell(blockItem.id)}
            key={blockItem.id}
            className={blockItem.class}
          ></div>
        ))}
      </div>
      <Tries numberOfTries={numberOfTries} />
    </>
  );
};

export default App;
