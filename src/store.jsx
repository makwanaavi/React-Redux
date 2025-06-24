import { createStore } from "redux"
/* eslint-disable no-case-declarations */
const ADD_TASK = "task/add"
const DELETE_TASK = "task/delete"

const initialState = {
    task: [],
    isLoading: false
}

// eslint-disable-next-line no-unused-vars
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: [...state.task, action.payload]
            }
        case DELETE_TASK:
            // eslint-disable-next-line no-unused-vars
            const updatedTask = state.task.filter((curtask, index) => {
                return index !== action.payload;
            })
            return {
                ...state,
                task: updatedTask
            }
        default:
            return state;
    }
}

const store = createStore(taskReducer);
console.log(store)
// console.log("First", store.getState())



store.dispatch({ type: ADD_TASK, payload: "Add First Data in Store!" })
console.log("First", store.getState())


store.dispatch({ type: ADD_TASK, payload: "Add Second Data !" })
console.log("Second", store.getState())


store.dispatch({ type: DELETE_TASK, payload: 1 })
console.log("Third", store.getState())
