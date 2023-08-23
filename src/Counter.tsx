import React, { useState } from 'react';

// type MySetStateAction<S> = S | ((prevState: S) => S);
// type MyDispatch<A> = (value: A) => void;
// type MySetStateAction = number | ((prevState: number) => number);
// type MyDispatch = (value: MySetStateAction) => void;
// type MyDispatch = (value: number | ((prevState: number) => number)) => void;

// const Counter: React.FunctionComponent<{}> = () => {
const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => {
    // setValue(value + 1);
    setValue((prevState) => prevState + 1);
  };
  const decrement = () => {
    // setValue(value - 1);
    setValue((prevState) => prevState - 1);
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default Counter;
