import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import "./Register.css";

const Register = () => {
  const { sendPostRequest } = useFetch();
  const navigate = useNavigate();
  const [timer, setTimer] = useState(null);
  const [name, setName] = useState({
    value: "",
    valid: false,
    err: "",
    touch: false,
  });
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
  const [phone, setPhone] = useState({
    value: "",
    valid: false,
    err: "",
    touch: false,
  });
  const [status, setStatus] = useState(false);

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
      } else if (last.includes("@")) {
        return (err = "After @ can't be @!!");
      }
    }

    return err;
  };

  const nameBlur = (e) => {
    if (e.target.value.trim().length > 0) {
      setName((pre) => {
        return {
          value: pre.value,
          valid: pre.valid,
          err: pre.err,
          touch: true,
        };
      });
    } else {
      setName((pre) => {
        return {
          value: pre.value,
          valid: pre.valid,
          err: "Enter name !",
          touch: true,
        };
      });
    }
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
  const phoneBlur = (e) => {
    if (e.target.value.trim().length > 0) {
      setPhone((pre) => {
        return {
          value: pre.value,
          valid: pre.valid,
          err: pre.err,
          touch: true,
        };
      });
    } else {
      setPhone((pre) => {
        return {
          value: pre.value,
          valid: pre.valid,
          err: "Enter 📞 number!",
          touch: true,
        };
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const getRes = (res) => {
      if (res.includes("Email is exists")) {
        setEmail({
          value: '',
          valid: false,
          err: res,
          touch: true,
        });
        return;
      } else {
        const user = {
          fullName: name.value,
          email: email.value,
          passWord: pw.value,
          phoneNumber: phone.value,
          role: "customer",
        };
        const getResponse = (res) => {
          console.log(res);
          if (res === "SUCCESS") {
            setName({ value: "", valid: false, err: "", touch: false });
            setEmail({ value: "", valid: false, err: "", touch: false });
            setPw({ value: "", valid: false, err: "", touch: false });
            setPhone({ value: "", valid: false, err: "", touch: false });
            navigate("/signin");
          } else {
            alert(res);
          }
        };

        sendPostRequest("/signup", user, getResponse);
      }
    };
    sendPostRequest("/checkEmail", { email: email.value }, getRes);
  };
  const nameHandler = (e) => {
    const enterName = e.target.value;
    if (!enterName.trim().length > 0) {
      setName({
        value: enterName,
        valid: false,
        err: "Enter name !",
        touch: true,
      });
    } else {
      setName({ value: enterName, valid: true, err: "", touch: true });
    }
  };
  const emailHanlder = (e) => {
    setEmail({ value: e.target.value, valid: true, touch: true });
    let err;
    if (timer) {
      clearTimeout(timer);
    }

    setTimer(
      setTimeout(() => {
        err = checkEmail(e.target.value);
        if (err.length === 0) {
          setEmail({ value: e.target.value, valid: true, err, touch: true });
        } else {
          setEmail({ value: e.target.value, valid: false, err, touch: true });
        }
      }, 1000)
    );
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
  const phoneHandler = (e) => {
    const enterPhone = e.target.value;
    if (!enterPhone.trim.length > 2) {
      setPhone({
        value: enterPhone,
        valid: false,
        err: "Enter phone number!",
        touch: true,
      });
    }
    if (enterPhone.match(/^[0-9]+$/) === null) {
      setPhone({
        value: enterPhone,
        valid: false,
        err: "Not a phone number!",
        touch: true,
      });
    } else {
      setPhone({ value: enterPhone, valid: true, err: "", touch: true });
    }
  };
  useEffect(() => {
    setStatus(name.valid && email.valid && pw.valid && phone.valid);
  }, [name.value, email.value, pw.value, phone.value]);

  const getClass = (input) => {
    if (!input.touch) return "";
    if (input.touch) {
      if (input.valid) return "";
      if (!input.valid) return "invalid";
    }
  };

  return (
    <div className="register_container">
      <form className="register_frm" onSubmit={submitHandler}>
        <h1>Sign Up</h1>
        <input
          className={`${getClass(name)}`}
          type="text"
          onBlur={nameBlur}
          placeholder="Full Name"
          onChange={nameHandler}
          value={name.value}
        ></input>
        {!name.valid && <p>{name.err}</p>}
        <input
          className={`${getClass(email)}`}
          type="email"
          onBlur={emailBlur}
          placeholder="Email"
          onChange={emailHanlder}
          value={email.value}
        ></input>
        {!email.valid && <p>{email.err}</p>}
        <input
          className={`${getClass(pw)}`}
          type="password"
          onBlur={pwBlur}
          placeholder="Password"
          onChange={pwHandler}
          value={pw.value}
        ></input>
        {!pw.valid && <p>{pw.err}</p>}
        <input
          className={`${getClass(phone)}`}
          type="text"
          onBlur={phoneBlur}
          placeholder="Phone"
          onChange={phoneHandler}
          value={phone.value}
        ></input>
        {!phone.valid && <p>{phone.err}</p>}
        <button type="submit" className="btn_submit" disabled={!status}>
          SIGN UP
        </button>
        <div>
          <p>Login?</p>
          <Link to="/signin">CLick</Link>
        </div>
      </form>
    </div>
  );
};
export default Register;
