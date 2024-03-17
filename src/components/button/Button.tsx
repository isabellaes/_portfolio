import { useEffect, useState } from "react";
import "./button.scss";

interface Props {
  text: string;
  onClick: () => void;
}
const Button = (props: Props) => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(props.text);
  }, []);

  return <button onClick={props.onClick}>{text}</button>;
};

export default Button;
