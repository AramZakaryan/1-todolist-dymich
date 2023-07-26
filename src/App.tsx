import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

function App() {

    let tasks1: TaskType[] = [
        {id:1, title: "CSS & HTML", isDone: true},
        {id:1, title: "JS", isDone: true},
        {id:1, title: "React", isDone: false}
    ]

    let tasks2: TaskType[] = [
        {id:1, title: "Cone", isDone: true},
        {id:1, title: "Matrix", isDone: false},
        {id:1, title: "Braking Bad", isDone: false}
    ]

    return (
        <div className="App">
            <Todolist title="What to learn?" tasks={tasks1}/>
            <Todolist title="Movies" tasks={tasks2}/>
        </div>
    );
}


export default App;
