import Switch from "./Switch.jsx";
import { useState } from "react";
const Main = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <main>
      <div className="container">
        <Switch switch={switch1} setSwicth={setSwitch1} />
      </div>
    </main>
  );
};

export default Main;
