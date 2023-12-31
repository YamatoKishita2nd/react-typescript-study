import { render } from '@testing-library/react';
import React, { useEffect, useRef, useState } from 'react';

// type MySetStateAction<S> = S | ((prevState: S) => S);
// type MyDispatch<A> = (value: A) => void;
// type MySetStateAction = number | ((prevState: number) => number);
// type MyDispatch = (value: MySetStateAction) => void;
// type MyDispatch = (value: number | ((prevState: number) => number)) => void;

// const array: Array<number> = [1, 2, 3];
// const readonlyArray: ReadonlyArray<number> = [1, 2, 3];
// array[0] = 11;
// // readonlyArray[0] = 11;

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

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });

  // const ref = useRef<HTMLInputElement>(null);
  const ref = useRef<HTMLInputElement>(null!);
  const focusInput = () => {
    // const current = ref.current;
    // if (current !== null) current.focus();
    // ref.current?.focus();
    ref.current.focus();
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
      <input type="text" ref={ref} />
      <button onClick={focusInput}>Click Me!</button>
    </div>
  );
};

export default Counter;
