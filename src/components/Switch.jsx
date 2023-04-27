const Switch = (props) => {
  return (
    <>
      <div className="set-button">
        <button
          onClick={() => {
            props.setSwitch(!props.switch);
          }}
          className={props.switch === false ? "unselect" : "select"}
        >
          On
        </button>

        <button
          onClick={() => {
            props.setSwitch(!props.switch);
          }}
          className={props.switch === true ? "unselect" : "select"}
        >
          Off
        </button>
      </div>
    </>
  );
};
export default Switch;
