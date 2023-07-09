import React, { Fragment } from "react";

const MyFragment = () => {
  const numbers = [1, 2, 3, 4, 5];
  return (
    // <Fragment>
    // <div>MyFragment</div>
    // <p>Second</p>
    // </Fragment>
    // <>
    // <div>MyFragment</div>
    // <p>Second</p>
    // </>
    <>
      {numbers.map((num, key) => (
        <React.Fragment key={key}>
          <p>Fragment in React</p>
          <p>{num}</p>
        </React.Fragment>
      ))}
    </>
  );
};

export default MyFragment;
