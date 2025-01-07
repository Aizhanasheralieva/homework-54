import React from "react";

interface Props {
  numberOfTries: number;
}
const Tries: React.FC<Props> = ({ numberOfTries }) => {
  return <div>Number of tries: {numberOfTries}</div>;
};

export default Tries;
