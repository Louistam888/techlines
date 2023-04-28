import axios from "axios";
import { setLoading, setError, userLogin } from "../slices/user";

export const login = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const {data} = await axios.post("/api/users/login", { email, password }, config);
    dispatch(userLogin(data))
    localStorage.setItems("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch(setError(
      error.response && error.response.data.message 
        ? error.response.data.message 
        : error.message 
        ? error.message 
        : "An unexpected error has ocurred. Please try again later."
      )
    );
  }
}; 