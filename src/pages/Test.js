import CheckOutItem from "../components/CheckOutItem/CheckOutItem";
import CustomCheckOutInput from "../components/CustomCheckOutInput/CustomCheckOutInput";
import Chat from "../components/modal/Chat";
import ChatButton from "../components/modal/ChatButton";
import useFormat from "../hook/useFormat";
import useGetTotal from "../hook/useGetTotal";
import Layout from "../Layout/Layout";
import { ChatActions } from "../store/chat-actions";

const Test = () => {
  // const { format } = useFormat();
  // console.log(format("20000"));
  // const { total } = useGetTotal();
  // setTimeout(() => {
  //   const a = total();
  //   console.log("total", a);
  // }, 1000);

  return (
    <Layout>
      <Chat />
      <ChatButton />
    </Layout>
  );
};
export default Test;
