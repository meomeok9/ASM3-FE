import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import { activeActions } from "../../store/active-action";
import { cartActions } from "../../store/cart-actions";
import { loginActions } from "../../store/login-action";
import "./Login.css";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sendPostRequest, sendGetRequest } = useFetch();
  const [status, setStatus] = useState(false);
  const [email, setEmail] = useState({
    value: "",
    valid: false,
    err: "",
    touch: false,
  });
  const [pw, setPw] = useState({
    value: "",
    valid: false,
    err: "",
    touch: false,
  });

  const checkEmail = (enterEmail) => {
    let err = "";

    if (enterEmail.trim() === "") {
      return (err = "Email cant empty");
    }
    if (!enterEmail.includes("@") && enterEmail.length > 0) {
      return (err = "@ required");
    }
    if (enterEmail.includes("@")) {
      const first = enterEmail.substring(0, enterEmail.indexOf("@"));
      const last = enterEmail.substring(
        enterEmail.indexOf("@") + 1,
        enterEmail.length
      );

      if (first.length === 0) {
        return (err = "@ can NOT first!");
      }
      if (last.length === 0) {
        return (err = "After @ must be something");
      }
    } else {
      return err;
    }

    return err;
  };

  const emailBlur = (e) => {
    if (e.target.value.trim().length > 0) {
      setEmail((pre) => {
        return {
          value: pre.value,
          valid: pre.valid,
          err: pre.err,
          touch: true,
        };
      });
    } else {
      setEmail((pre) => {
        return {
          value: pre.value,
          valid: pre.valid,
          err: "Email cant empty",
          touch: true,
        };
      });
    }
  };
  const pwBlur = (e) => {
    if (e.target.value.trim().length > 0) {
      setPw((pre) => {
        return {
          value: pre.value,
          valid: pre.valid,
          err: pre.err,
          touch: true,
        };
      });
    } else {
      setPw((pre) => {
        return {
          value: pre.value,
          valid: pre.valid,
          err: "Enter Password 🔑",
          touch: true,
        };
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email && !pw) return;
    const user = { email: email.value, passWord: pw.value };
    const getData = (data) => {
      if (data) {
        console.log("data login: ", data);
        dispatch(
          loginActions.onLogin({
            fullName: data.user.fullName,
            id: data.user._id,
            email: data.user.email,
            phoneNumber: data.user.phoneNumber,
            token: data.accessToken,
          })
        );
        dispatch(activeActions.active("home"));
        dispatch(cartActions.setOwner(data.user.fullName));
        dispatch(cartActions.setItems(data.cart.items));
        navigate("/home");
      } else {
        setPw({
          value: "",
          valid: false,
          err: "Wrong email or password!",
          touch: true,
        });
      }
    };
    const getResponse = (res) => {
      console.log(res);
    };

    sendPostRequest("/signin", user, getResponse, getData);
  };

  const emailHanlder = (e) => {
    const err = checkEmail(e.target.value);

    if (err.length === 0) {
      setEmail({ value: e.target.value, valid: true, err, touch: true });
    } else {
      setEmail({ value: e.target.value, valid: false, err, touch: true });
    }
  };

  const pwHandler = (e) => {
    const enterPw = e.target.value;
    if (enterPw.trim().length < 8) {
      setPw({
        value: enterPw,
        valid: false,
        err: "Your password too short!",
        touch: true,
      });
    } else {
      setPw({ value: enterPw, valid: true, err: "", touch: true });
    }
  };

  const getClass = (input) => {
    if (!input.touch) return "";
    if (input.touch) {
      if (input.valid) return "";
      if (!input.valid) return "login_invalid";
    }
  };

  useEffect(() => {
    setStatus(email.valid && pw.valid);
  }, [email.value, pw.value]);

  return (
    <div className="login_container">
      <form className="login_frm" onSubmit={submitHandler}>
        <h1>Sign in</h1>

        <input
          className={`login_frm_input ${getClass(email)}`}
          type="email"
          placeholder="Email"
          onChange={emailHanlder}
          onBlur={emailBlur}
        ></input>
        {!email.valid && <p>{email.err}</p>}
        <input
          type="password"
          className={`login_frm_input ${getClass(pw)}`}
          placeholder="Password"
          onChange={pwHandler}
          value={pw.value}
          onBlur={pwBlur}
        ></input>
        {!pw.valid && <p>{pw.err}</p>}
        <button type="submit" className="btn_submit" disabled={!status}>
          SIGN IN
        </button>
        <div>
          <p>Create an account?</p>
          <Link to="/signup">Sign up</Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
