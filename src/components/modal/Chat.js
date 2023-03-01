import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChatActions } from "../../store/chat-actions";
import { useDrag } from "react-use-gesture";
import { animated, useSpring } from "@react-spring/web";
import { io } from "socket.io-client";
import "./Chat.css";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const socket = io("localhost:5000", { transports: ["websocket"] });
  const userId = useSelector((state) => state.login.userId);
  const isLogin = useSelector((state) => state.login.isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const display = useSelector((state) => state.chat.isDisplay);
  const [message, setMessage] = useState("");
  const messages = useSelector((state) => state.chat.content);
  socket.on("send-back-to-client", (d) => {
    dispatch(ChatActions.sendMessage(d[0].message));
  });
  const [{ x, y }, api] = useSpring(() => ({
    x: 0,
    y: 0,
  }));

  const bindDrag = useDrag(({ offset }) => {
    api({
      x: offset[0],
      y: offset[1],
    });
  });

  const inputChangeHandler = (e) => {
    setMessage(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!isLogin) {
      alert("You Need Login!");
      navigate("/signin");
      dispatch(ChatActions.hide());
      return;
    }
    socket.emit("chatMessage", { message, fromClient: true, userId });
    setMessage("");
  };

  const classes = `chat_container ${display ? "on" : "off"}`;
  return (
    <animated.div className={classes} style={{ x, y }} {...bindDrag()}>
      <div>
        <div>
          <h2>Customer Support</h2>
        </div>
        <div className="chat_box_container">
          {messages.length > 0 &&
            messages.map((mes) => (
              <div
                className={`row_chat ${mes.isUser ? "user_chat" : "reply"}`}
                key={Math.random()}
              >
                <p
                  className={`${
                    mes.isUser ? "user_text" : "reply_text"
                  } chattext_style`}
                >
                  {`${mes.isUser ? "🌵" : "🐫"}: ${mes.message}`}
                </p>
              </div>
            ))}
        </div>
        <form className="chat_input_container" onSubmit={submitHandler}>
          <p>👨🏽‍✈️</p>
          <input
            type="text"
            value={message}
            placeholder="Enter Message!"
            onChange={inputChangeHandler}
          />
          <button type="button">🔗</button>
          <button type="button">😀</button>
          <button type="submit">🚀</button>{" "}
        </form>
      </div>
      <div></div>
    </animated.div>
  );
};
export default Chat;
