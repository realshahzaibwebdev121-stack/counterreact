import { useState } from "react";
import CountButtons from "./components/CountButtons";
import Count from "./components/Count";
import Reset from "./components/Reset";
import Title from "./components/Title";

export default function App(){
  const [count, setcount] = useState(0);
  return (
    <>
  <main>
      <div className="card">
        <Title />
        <Count count={count} />
        <Reset setcount={setcount} />
       <CountButtons setcount={setcount} />
      </div>
  </main>
    </>
  )
}