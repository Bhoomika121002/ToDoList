import React from 'react';
import { useState } from 'react';
import ToDo from "./ToDo";
import ToDoform from './ToDoform';

export default function ToDoList() {

    const [ToDos, setToDos] = useState([]);

    const addTask = Task => {
        if (!Task.text) {
            return
        }

        const newToDos = [Task,...ToDos];
        setToDos(newToDos);
        }


    const removeTask = id => {
        let updatedTasks = [...ToDos].filter(Task => Task.id !== id)
        setToDos(updatedTasks)
    }


    const completeTask = id => {
        let updatedTasks = ToDos.map(ToDo => {
            if (ToDo.id === id) {
                ToDo.isComplete = true;
            }
            return ToDos
        })
            setToDos(updatedTasks)

    }
    


    return <div>
        <ToDoform addTask={addTask}>  </ToDoform>
        <ToDo ToDos={ToDos} completeTask={completeTask} removeTask={removeTask} >

        </ToDo>
    </div>;
}