import React, { useState } from "react";

export default function Input() {
  const [content, setContent] = useState("");
  return (
    <>
      <input
        className="border border-black rounded-md"
        placeholder="Nhap noi dung"
        type="text"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <p>Hien thi:{content}</p>
    </>
  );
}
