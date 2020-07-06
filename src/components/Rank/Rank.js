import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div className="white f4">
      <div> {`${name}, your current number of entry count is...`} </div>
      <div className="white f2">{entries}</div>
    </div>
  );
};

export default Rank;
