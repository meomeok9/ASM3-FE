import { useEffect } from "react";
import { useState } from "react";
import "./CustomCheckOutInput.css";

const CustomCheckOutInput = (props) => {
  const disable = props.disable && props.disable;
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(props.value);
  });
  const changeHandler = (e) => {
    if (e.target.value.trim().length > 0) props.change(e.target.value);
    else props.change("");
  };
  return (
    <div className="CustomChck">
      <p>{`${props.title}:`}</p>
      <input
        className="customchckout_input"
        type="text"
        placeholder={`Enter your ${props.title} here!`}
        value={value}
        onChange={changeHandler}
        disabled={disable}
      ></input>
    </div>
  );
};
export default CustomCheckOutInput;
