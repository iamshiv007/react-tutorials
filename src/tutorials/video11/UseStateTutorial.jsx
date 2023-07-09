import React, { Fragment, useState } from "react";

const UseStateTutorial = () => {
  const [count, setCount] = useState(0);

  // let count = 0

  // const setCount = (value) => {
  //     console.log(count)
  //     return count = value
  // }

  return (
    <Fragment>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </Fragment>
  );
};

export default UseStateTutorial;
