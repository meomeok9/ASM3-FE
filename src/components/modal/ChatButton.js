import { useDispatch } from "react-redux";
import { ChatActions } from "../../store/chat-actions";
import "./ChatButton.css";
const icon = require("./icon.png");
const ChatButton = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(ChatActions.toggle());
  };
  return <img src={icon} className="chatbutton" onClick={clickHandler} />;
};
export default ChatButton;
