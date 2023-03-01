import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { dataAction } from "../store/dataSlide";
import axios from "axios";

const useFetch = () => {
  const dispatch = useDispatch();
  const url = "http://localhost:5000";

  const sendRequest = useCallback(async (page) => {
    try {
      const res = await axios.get(
        url +
          `/getProducts${
            (page ? `page=${page}` : "",
            {
              headers: { "Content-Type": "application/json" },
              withCredentials: "include",
            })
          }`
      );

      dispatch(dataAction.setData(res.data.results));
    } catch (err) {
      console.error(err.message);
    }
  }, []);
  // Authorization : Bearer Tokenreceip
  const sendGetRequest = useCallback(async (endPoint, getData) => {
    try {
      const res = await axios({
        method: "GET",
        url: url + endPoint,
        headers: { "Content-Type": "application/json" },
        withCredentials: "include",
      });
      //console.log(res.data);
      getData(res.data.results);
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  const sendAuthRequest = useCallback(async (endPoint, token, getData) => {
    try {
      const res = await axios({
        url: url + endPoint,
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: "include",
      });

      getData(res.data.results);
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  const sendPostRequest = useCallback(
    async (endPoint, data, getResponse, getData, getStatus) => {
      const body = data;
      const fullUrl = url + endPoint;
      // console.log(" req body: ", body);
      try {
        const res = await axios({
          method: "POST",
          url: fullUrl,
          headers: { "Content-Type": "application/json" },
          withCredentials: "include",
          data: body,
        });

        //console.log("response data", res);
        if (getStatus) getStatus(res.status);
        if (getResponse) getResponse(res.data.message);
        if (getData) getData(res.data.results);
      } catch (err) {}
    },
    []
  );

  return { sendRequest, sendGetRequest, sendPostRequest, sendAuthRequest };
};

export default useFetch;
