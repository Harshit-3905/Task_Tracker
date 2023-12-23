export const taskReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "GET_TASKS":
      return action.payload;
    case "TOGGLE_TASKS":
      return state.map((task) =>
        task._id === action.payload._id
          ? { ...task, completed: !task.completed }
          : task
      );
    case "UPDATE_TASK":
      return state.map((task) =>
        task._id === action.payload._id
          ? { ...task, title: !action.payload.title }
          : task
      );
    case "DELETE_TASK":
      return state.filter((task) => task._id !== action.payload._id);
    case "LOGOUT":
      return [];
    default:
      return state;
  }
};
