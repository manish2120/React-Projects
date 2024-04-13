import React from "react";

const Slot = (props) => {
  let { x, y, z } = props;
  if(x === y && y === z) {
    return <>
    <div>
      <p>{x} {y} {z}</p>
      <p>This is matching</p>
      </div>
      </>
  }
  else {
    return <>
    <div>
      <p>{x} {y} {z}</p>
      <p>This is not matching</p>
      </div>
      </>
  }
}

export default Slot;