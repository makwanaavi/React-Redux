import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

function Todo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.task);

    const handleAddTask = () => {
        if (input.trim() !== "") {
            dispatch({ type: "task/add", payload: input });
            setInput("");
        }
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul >
                {tasks.map((curTask, index) => {
                    return <li style={{display:"flex"}} key={index}>
                        <p>{index} : {curTask}</p>
                        <button style={{marginLeft:"10px"}} onClick={() => dispatch({ type: "task/delete", payload: index })}>
                            Delete
                        </button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Todo