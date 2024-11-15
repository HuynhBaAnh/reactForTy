import React, { useState } from "react";

const Array = [
  { id: 1, content: "File" },
  { id: 2, content: "Edit" },
  { id: 3, content: "View" },
  { id: 4, content: "Profiles" },
];

const Con = [
  { id: 5, content: "New Tab" },
  { id: 6, content: "New Window" },
  { id: 7, content: "New Incognito Win" },
  { id: 8, content: "Share" },
  { id: 9, content: "Print..." },
];

export default function Menubar() {
  const [click, setClick] = useState<number>();

  function handelClick(bien: number) {
    if (click == bien) {
      setClick(0);
    } else {
      setClick(bien);
    }
  }
  return (
    <>
      {/*<li>{Array[0].content}</li>*/}

      <ul className="flex space-x-6 border border-gray-400 bg-black text-white w-56 h-10 justify-center p-1 rounded-md">
        {Array.map((item) => (
          <li
            className="hover:bg-gray-800 rounded-md"
            onClick={() => handelClick(item.id)}
          >
            {item.content}
          </li>
        ))}
      </ul>

      <ul
        className={` space-y-3 border border-gray-400 bg-black text-white rounded-md w-56 ${
          click == 1 ? "" : "hidden"
        }`}
      >
        {Con.map((item) => (
          <li>{item.content}</li>
        ))}
      </ul>

      <p className={`${click == 2 ? "" : "hidden"}`}>Edit</p>
      <p className={`${click == 3 ? "" : "hidden"}`}>View</p>
      <p className={`${click == 4 ? "" : "hidden"}`}>Profiles</p>
    </>
  );
}
