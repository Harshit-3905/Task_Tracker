import axios from "axios";

export const addTask = (data) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:5000/api/task", data);
    dispatch({ type: "ADD_TASK", payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllTasks = () => async (dispatch) => {
  try {
    const email = JSON.parse(localStorage.getItem("userInfo")).email;
    const res = await axios.get(
      `http://localhost:5000/api/task/email?email=${email}`
    );
    dispatch({ type: "GET_TASKS", payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const toggleTask = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/task/id?id=${id}`);
    dispatch({ type: "TOGGLE_TASKS", payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(
      `http://localhost:5000/api/task/id?id=${id}`,
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
      `http://localhost:5000/api/task/id?id=${id}`
    );
    dispatch({ type: "DELETE_TASK", payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
