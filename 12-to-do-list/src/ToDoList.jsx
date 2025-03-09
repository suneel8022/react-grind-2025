import React,{ useState } from "react";

function ToDoList(){
    
    const[tasks, setTasks] = useState(["Wake up","Go Bed","Cook something"])
    const[newTask, setNewTask] = useState("")

    const handleTaskChange = (event) =>{
        setNewTask(event.target.value)
    }

    const addNewTask = () =>{
        setTasks(tasks => [...tasks, newTask]);
        setNewTask("");
    }

    const removeTask = (index) =>{
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);
    }


    const moveTaskDown = (index) => {
        if(index < tasks.length -1 ){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] = 
            [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }
    
    const moveTaskUp = (index) => {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = 
            [updatedTasks[index-1],updatedTasks[index]] ;
            setTasks(updatedTasks)
        }
        
    }


    return (
        <>
        <h2>ToDo List</h2>
            <input type="text" 
            value={newTask} 
            onChange={handleTaskChange}
            placeholder="Enter a task..."/>
            <button onClick={addNewTask}>Add</button>

            <ol>
                {tasks.map((task,index) => 
                <li key={index}>
                    <span>{task}</span>
                    <button onClick={() => removeTask(index)}>Remove</button>
                    <button onClick={() => moveTaskUp(index)}>👆</button>
                    <button onClick={() => moveTaskDown(index)}>👇</button>
                </li>
                )}
            </ol>
        </>
    );
}

export default ToDoList;