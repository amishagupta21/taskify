import { ADD_TASK, DELETE_TASK, EDIT_TASK,TOGGLE_TASK } from "./type";

export const addTaskAction = (data) => {
  return {
    type: ADD_TASK,
    payload: data
  };
};

export const deleteTaskAction = (data) => {
  return {
    type: DELETE_TASK,
    payload: data
  };
};

export const editTaskAction = (data) => {
  return {
    type: EDIT_TASK,
    payload: data
  };
};


export const toggleTaskAction = (data) => {
  return {
    type: TOGGLE_TASK,
    payload: data
  };
};
