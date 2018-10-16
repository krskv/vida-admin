import "../styles/alert.sass"

const Alert = (props) => (
  <div className={"alert " + props.color}>
    <span><b>{props.title}.</b>&nbsp;{props.text}</span>
  </div>
);

export default Alert;