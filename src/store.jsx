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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined;
export const store = createStore(taskReducer, composeEnhancers);
console.log(store)
// console.log("First", store.getState())


const addTask = (data) => {
    return { type: ADD_TASK, payload: data }
}
const deleteTask = (id) => {
    return { type: DELETE_TASK, payload: id }
}

store.dispatch(addTask("First Data"))
// store.dispatch(deleteTask())

console.log("First", store.getState())


store.dispatch({ type: ADD_TASK, payload: "Second Data !" })
console.log("Second", store.getState())


store.dispatch({ type: ADD_TASK, payload: "Third Task" })
console.log("Third", store.getState())

// store.dispatch(deleteTask())
// console.log("Third", store.getState())
