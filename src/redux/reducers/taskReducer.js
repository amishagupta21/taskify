import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from "../actions/type";

const initialState = {
    tasks: []
};

export const taskReducer = (state = initialState, action) => {
    //deep copy
    const newState = JSON.parse(JSON.stringify(state));
    let updatedTask = newState.tasks

    switch (action.type) {
        case ADD_TASK:
            updatedTask.push(action.payload);
            return {
                ...newState,
                tasks: updatedTask
            }
        case DELETE_TASK:
            updatedTask = updatedTask.filter(task => task.id !== action.payload)
            // 
            return {
                ...newState,
                tasks: updatedTask
            }

        case EDIT_TASK:
            // console.log("reducer",action.payload)
            updatedTask = updatedTask.map(task => {
                if (task.id === action.payload.id) {
                    task.task = action.payload.newValue
                    return task
                }
                return task
            })
            return {
                ...newState,
                tasks: updatedTask
            }

        case TOGGLE_TASK:
            // console.log(action.payload) yaha par action.payload me id aa rahi hai task ki
            updatedTask = updatedTask.map((task) => {
                if (action.payload === task.id) {
                    task.isCompleted = !task.isCompleted;
                    return task;
                }
                return task;
            });
            return {
                ...newState,
                tasks: updatedTask
            }

        default:
            return state;
    }
};


