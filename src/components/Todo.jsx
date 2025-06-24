import React, { useState } from 'react'

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const handleAddTask = () => {
        if (input.trim() !== "") {
            setTasks([...tasks, input]);
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
            <ul>
                {tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                ))}
            </ul>
        </div>
    )
}

export default Todo