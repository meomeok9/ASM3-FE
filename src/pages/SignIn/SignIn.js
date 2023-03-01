import Login from "../../components/login/Login";
import Layout from "../../Layout/Layout";
import "./SignIn.css";
const SignIn = () => {
  return (
    <Layout>
      <div className="signin_container">
        <Login />
      </div>
    </Layout>
  );
};
export default SignIn;
