import React from "react";

const Box = ({ handleOnClick, data }) => {
  // console.log("data",data)
  return (
    <div onClick={handleOnClick} className="box">
      {data}
    </div>
  );
};

export default Box;
