import React from "react";

export default function NumRow(no,cb) {
  return (
    <div className="ListItem">
      <p>{no} num</p>
      <span onClick={cb}>X</span>
    </div>
  );
}
