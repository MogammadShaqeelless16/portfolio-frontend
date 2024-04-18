import axios from "axios";
import { blogActionType } from "./blogActionType";

export const getAllBlogs = () => async (dispatch) => {
  try {
    dispatch({
      type: blogActionType.ALL_BLOGS_REQUEST,
    });
    const res = await axios.get(`https://portfolio-backend-389u.onrender.com/api/v1/publications`);

    dispatch({
      type: blogActionType.ALL_BLOGS_SUCCESS,
      payload: res.data.items,
    });
  } catch (error) {
    dispatch({
      type: blogActionType.ALL_BLOGS_FAIL,
      payload: error.response.data.message,
    });
  }
};
