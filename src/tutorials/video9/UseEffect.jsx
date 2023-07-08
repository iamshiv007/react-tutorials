import React, { Fragment, useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(100);

  // componentDidMount
  // useEffect(() => {
  //     setCount(count + 1)
  // }, []);

  // componentDidUpdate
  //   useEffect(() => {
  //     // setCount(count + 1);
  //     console.log(count);
  //   });
  
  //   useEffect(() => {
  //     // setCount(count + 1);
  //     console.log(count);
  //   }, [count]);

  // ComponentWillUnmount
  useEffect(() => {

    return(
        console.log(5)
    )
  }, []);

  return (
    <Fragment>
      <h1>useEffect in React</h1>
      <h3>{count}</h3>
      <h3>{num}</h3>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <button onClick={() => setNum(num + 1)}>Click</button>
    </Fragment>
  );
};

export default UseEffect;
