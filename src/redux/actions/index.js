import axios from "axios";

export const addTask = (data) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://tasktrackerbackend-raao.onrender.com/api/task",
      data
    );
    dispatch({ type: "ADD_TASK", payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllTasks = () => async (dispatch) => {
  try {
    const email = JSON.parse(localStorage.getItem("userInfo")).email;
    const res = await axios.get(
      `https://tasktrackerbackend-raao.onrender.com/api/task/email?email=${email}`
    );
    dispatch({ type: "GET_TASKS", payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const toggleTask = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://tasktrackerbackend-raao.onrender.com/api/task/id?id=${id}`
    );
    dispatch({ type: "TOGGLE_TASKS", payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(
      `https://tasktrackerbackend-raao.onrender.com/api/task/id?id=${id}`,
      data
    );
    dispatch({ type: "UPDATE_TASK", payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const deleteTask = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `https://tasktrackerbackend-raao.onrender.com/api/task/id?id=${id}`
    );
    dispatch({ type: "DELETE_TASK", payload: res.data });
    dispatch(getAllTasks());
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => ({
  type: "LOGOUT",
});
