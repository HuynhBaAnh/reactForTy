import React, { useState } from "react";

export default function Btaponclick() {
  const [click, setClick] = useState(true);
  function handlleClick() {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
  }
  return (
    <>
      <div>Btaponclick</div>
      <button
        className="border border-sky-300 bg-green-500 text-white p-3"
        onClick={handlleClick}
      >
        Show
      </button>
      <p className={`${click ? "" : "hidden"}`}>Hiển thị nội dung</p>
    </>
  );
}
