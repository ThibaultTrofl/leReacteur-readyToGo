const Switch = (props) => {
  return (
    <>
      <button
        onClick={() => {
          props.setSwitch1(!switch1);
        }}
        className={switch1 === false ? "unselect" : "select"}
      >
        On
      </button>
      ;
      <button
        onClick={() => {
          props.setSwitch1(!switch1);
        }}
        className={switch1 === true ? "unselect" : "select"}
      >
        Off
      </button>
    </>
  );
};
export default Switch;
