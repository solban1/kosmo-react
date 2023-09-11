// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const man = { name: "길동", age: 30 };
  const daum = { name: "다음", url: "https://www.daum.net/" };

  return (
    <>
      <h1>
        안녕 {man.age}살 먹은 {man.name}
      </h1>
      <a href={daum.url}>링크</a>
    </>
  );
}

export default App;
