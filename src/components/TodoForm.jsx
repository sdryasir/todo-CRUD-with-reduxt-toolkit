import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";


export default function TodoForm(){

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const dispatch = useDispatch();


    const handleTitleChange = (e)=>{
        setTitle(e.target.value)
    }
    const handleBodyChange = (e)=>{
       setBody(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const newTodo = {
            id:Date.now(),
            title,
            body,
            status: false
        }

        dispatch(addTodo(newTodo))
    }

    return (
        <form onSubmit={handleSubmit} className='w-100'>
            <div className="row mb-3">
                <div className="col-sm-10">
                    <input type="text" onChange={handleTitleChange} className="form-control w-100" placeholder="Enter the title"/>
                </div>
            </div>
            <div className="row mb-3">
                
                <div className="col-sm-10">
                    <input type="text" onChange={handleBodyChange} className="form-control w-100"  placeholder="Enter the body"/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Save Todo</button>
        </form>
    )
}