import { useState } from "react";
import randomColor from "randomcolor";


export default function EventBind() {
    const [steps, setSteps] = useState(10);
    /*Note the fact that we are using the arrow function here.
    We will discuss about it in binding section soon*/
    const clickHandler = () => {
      setSteps(steps + 1);
    };

    const [color, changeColor] = useState("green");
   
    return (
      <>
        <div>{steps}</div>
        <button onClick={clickHandler}>Click</button>
        <h1 style={{ color }}> changing colors </h1>
        <button onMouseOver = {() => changeColor(randomColor())}>click me</button>
      </>
    );
  }