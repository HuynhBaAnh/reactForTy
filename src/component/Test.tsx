import React, { useState } from "react";

export default function Test() {
  const [click, setClick] = useState(true);

  function handleClick() {
    if (click == true) {
      setClick(false);
    } else {
      setClick(true);
    }
  }

  return (
    <>
      <div className="flex">
        <button
          onClick={handleClick}
          className="border border-white rounded-xl text-white bg-pink-500"
        >
          Test usetate
        </button>
        <p className={`${click ? "" : "hidden"} `}> Noi dung hien thi </p>
      </div>
    </>
  );
}
