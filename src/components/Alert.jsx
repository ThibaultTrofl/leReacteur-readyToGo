const Alert = (props) => {
  return (
    <p
      className={
        "alert " +
        (props.switch1 === true &&
        props.switch2 === true &&
        props.switch3 === true
          ? "bcg-green"
          : "bcg-red")
      }
    >
      {props.switch1 === true &&
      props.switch2 === true &&
      props.switch3 === true
        ? "Go 🚀"
        : "No way !"}
    </p>
  );
};
export default Alert;
