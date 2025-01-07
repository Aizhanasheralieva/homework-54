import './App.css';
import { useState } from 'react';

interface IBlock {
  hasItem: boolean;
  id: number;
  class: 'objectBlock';

}
const App = () => {
const [blockItems, setBlockItems] = useState<IBlock[]>([]);

const generateBoardField = () => {
  const blockObjectArray: IBlock[] = [];

  for (let i = 1; i <= 36; i++) {
    blockObjectArray.push({
      hasItem: false,
      id: i,
      class: 'objectBlock',
    });
  }

  const someRandomIndex = Math.floor(Math.random() * blockObjectArray.length);
  blockObjectArray[someRandomIndex].hasItem = true;

  setBlockItems(blockObjectArray);
};

if (blockItems.length === 0) {
  generateBoardField();
} else {
  console.log(blockItems);
}
  return (
    <>
      <div className="squareField">
        {blockItems.map(blockItem => (
          <div className={blockItem.class}></div>
        ))}

      </div>


    </>
  );
};

export default App;
