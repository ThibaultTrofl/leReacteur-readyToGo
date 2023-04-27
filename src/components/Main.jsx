import Switch from "./Switch.jsx";
import Alert from "./Alert.jsx";
import { useState } from "react";

const Main = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <main>
      <div className="container">
        <section className="all-assembled">
          <div className="button-assembled">
            <Switch switch={switch1} setSwitch={setSwitch1} />
            <Switch switch={switch2} setSwitch={setSwitch2} />
            <Switch switch={switch3} setSwitch={setSwitch3} />
          </div>
          <Alert switch1={switch1} switch2={switch2} switch3={switch3} />
        </section>
      </div>
    </main>
  );
};

export default Main;
