import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center"}}>
      <h1>Counter: {count}</h1>
      <button style={{padding:"10px 30px 10px 30px", margin:"20px", background:"green",fontWeight:"800",fontSize:"20px", border:"none", borderRadius:"20px"}} onClick={() => setCount(count + 1)}>+</button>
      <button style={{padding:"10px 30px 10px 30px", margin:"20px", background:"red",fontWeight:"800",fontSize:"20px", border:"none", borderRadius:"20px"}} onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;