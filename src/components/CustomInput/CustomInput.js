/*eslint-disable */
import { useEffect, useState } from "react";
import "./CustomInput.css";
const CustomInput = (props) => {
  let min = props.min;
  if (!min) min = 0;
  const [value, setValue] = useState(0);
  const valueProps = props.value;
  useEffect(() => {
    if (valueProps) {
      setValue(valueProps);
    }
  }, []);

  const onchangeHandler = (e) => {};

  const decreaseInput = () => {
    if (value === min) return;
    setValue(value - 1);
    props.getNumber(value - 1);
  };
  const increaseInput = () => {
    setValue(value + 1);
    props.getNumber(value + 1);
  };
  const classes = `custom_input ${props.className}`;

  return (
    <div className={classes}>
      <button type="button" onClick={decreaseInput}>
        ◄
      </button>
      <input type={"number"} value={value} onChange={onchangeHandler}></input>
      <button type="button" onClick={increaseInput}>
        ►
      </button>
    </div>
  );
};
export default CustomInput;
