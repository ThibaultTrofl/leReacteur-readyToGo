const Alert = (props) => {
  const alert =
    props.switch1 === true && props.switch2 === true && props.switch3 === true
      ? true
      : false;
  return (
    <p className={"alert " + (alert ? "bcg-green" : "bcg-red")}>
      {alert ? "Go 🚀" : "No way !"}
    </p>
  );
};
export default Alert;
