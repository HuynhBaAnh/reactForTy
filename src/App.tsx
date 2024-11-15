import { useState } from "react";
import "./App.css";
import Button from "./component/Button";
import Item from "./component/Item";
import Btaponclick from "./component/Btaponclick";
import Input from "./component/Input";
import Menubar from "./component/Menubar";
import Test from "./component/Test";
import { ScissorOutlined, SmileOutlined } from "@ant-design/icons";
import Icon from "./component/Icon";

function App() {
  const [soClick, setSoClick] = useState(0);
  function testuseState() {
    setSoClick(soClick + 1);
  }
  function testuseState1() {
    setSoClick(soClick - 1);
  }

  function handleClick() {
    alert("Chào bạn!");
  }
  return (
    <>
      <div className="flex justify-center container mx-auto bg-red-300 border border-red">
        <p>haha</p>
      </div>

      <Button dieukien={false} content="hihi" />
      <br />
      <Button dieukien icon="mặt cười" content="hihi" />

      <div className="grid grid-cols-3 container mx-auto hover:after:bg-purple-500">
        <Item image="image/anh-dep-44.jpg.webp" text="hihi" />
        <Item image="image/anh-dep-44.jpg.webp" text="hihi" />
        <Item image="image/anh-dep-44.jpg.webp" text="hihi" />
        <Item image="image/anh-dep-44.jpg.webp" text="hihi" />
        <Item image="image/anh-dep-44.jpg.webp" text="hihi" />
        <Item image="image/anh-dep-44.jpg.webp" text="hihi" />
      </div>
      <button onClick={handleClick}>xin chào </button>

      <button
        className="border-2 ml-3 p-2 text-white bg-blue-500 rounded-lg"
        onClick={() => {
          alert("Chào bạn!");
        }}
      >
        Việt Nam
      </button>

      <button className=" border border-red-300 p-2" onClick={testuseState}>
        +
      </button>
      <span> {soClick}</span>
      <button className="border border-red-300 p-2" onClick={testuseState1}>
        -
      </button>
      <Btaponclick />
      <Test />
      <Input />
      <Menubar />
      <ScissorOutlined className="text-5xl" />
      <Icon content={"hihi Tí Điên"} />
      <Icon content={"Hihi Tí Điên"} icon={<SmileOutlined />} />
    </>
  );
}
export default App;
