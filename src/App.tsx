import { useState } from "react";

import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="logo">Hello World!</h1>
      </div>
    </>
  );
}

export default App;
