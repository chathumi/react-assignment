import React, { useEffect, useState } from 'react'
import Todo from './Todo';
import TodoCreate from './TodoCreate';

// import {BrowserRouter as Router,Routes, Route, useNavigate } from 'react-router-dom';


const TodoList = (props) => {
  

    const [taskList,setTaskList]=useState([]);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    useEffect(()=>{
        let arr=localStorage.getItem("taskList");
        
        if(arr){
            let obj=JSON.parse(arr)
            setTaskList(obj)
        }
    },[])

    const saveTask=(taskObj)=>{
            let tempList=taskList;
            tempList.push(taskObj);
            localStorage.setItem('taskList',JSON.stringify(tempList))
            setTaskList(tempList);
            setModal(false)
           
    }

    const deleteTask=(index)=>{
       
        let tempList=taskList
        tempList.splice(index,1)
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
       
    }
   // const navigate = useNavigate();

   const updateListArray = (obj, index) => {
    let tempList = taskList
    tempList[index] = obj
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
}
    return (
        <div>
            <div className='header text-center'>
                <h1>
                    Todo List
                </h1>
                <button onClick={()=>setModal(true)} className="btn btn-warning mt-2">Create Task</button>
                {/* <Router>
                <Routes>
          <Route path="/create" element={<TodoCreate />} />          
        </Routes>
        </Router> */}
                {/* <Link to="/" className="btn btn-primary">Sign up</Link> */}
            </div>
            <div className='task-container'>
                {taskList.map((tas,index)=><Todo taskObj={tas} index={index} deleteTask={deleteTask}  updateListArray = {updateListArray}/>)}
            </div>
            <TodoCreate toggle={toggle} modal={modal} save={saveTask}/>
        </div>

    )
}

export default TodoList
