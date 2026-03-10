import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';


const Todo = () => {
    const [task,setTask] = useState('');
    const [todos,setTodos] = useState([])
    const [edit,setEdit] = useState(null);
    const API = `http://localhost:3000`

    const fetchTodo = async()=>{
        // const res = await axios.get('http://localhost:3000/api/todo/');
        const res = await axios.get(`${API}/api/todo/`);
        setTodos(res.data);
       
    }
    useEffect(()=>{
        fetchTodo()
    },[]);
    
    const handleAddOrEdit=async()=>{

        if(edit){
            await axios.put(`${API}/api/todo/update/${edit}`,{task});
            setEdit(null);
        }
        else{
            await axios.post(`${API}/api/todo/create`,{task})
        }
        setTask('');
        fetchTodo();
    };
    const handleDelete=async(id)=>{
        await axios.delete(`${API}/api/todo/delete/${id}`)
        fetchTodo();
    };
    const handleToggleStatus= async(todo)=>{
        await axios.put(`${API}/api/todo/update/${todo._id}`,{
            completed:!todo.completed
        })
        fetchTodo();
    };

  return (
    <div>
        <h1>Todo</h1>
        <label>Task : </label>
        <input type="text" 
        placeholder='Enter the Task' 
        value={task}
        onChange={(e)=>setTask(e.target.value)}/> 
        <button onClick={handleAddOrEdit}>{(edit||edit===0)?"Update":"Add"}</button>
        <br /><br />
        <ul>
            {todos.map((todo)=>(
                <li key={todo._id}>
                    <span style={
                        {cursor:"pointer",
                    textDecoration:todo.completed?"line-through":"none"}
                }
                onClick={()=>handleToggleStatus(todo)}
                >{todo.task}</span>
                   
                    <button onClick={()=>{
                        setTask(todo.task);
                        setEdit(todo._id);
                    }}>🍗</button>
                    <button onClick={()=>handleDelete(todo._id)}>⛔</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo