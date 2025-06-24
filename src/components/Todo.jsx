import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function Todo() {
    const [tasks1, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const handleAddTask = () => {   
        if (input.trim() !== "") {
            setTasks([...tasks1, input]);
            setInput("");
        }
    };

    const tasks = useSelector((state) => state.task);
    // console.log(state.task)



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
            <ul>
                {tasks.map((curTask , index) =>{
                    return <li key={index}>
                        <p>{index} : {curTask}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Todo