import { useState } from "react";

export default function EventBind() {
    const [steps, setSteps] = useState(0);
    /*Note the fact that we are using the arrow function here.
    We will discuss about it in binding section soon*/
    const clickHandler = () => {
      setSteps(steps + 1);
    };
    return (
      <>
        <div>{steps}</div>
        <button onClick={clickHandler}>Click</button>
      </>
    );
  }