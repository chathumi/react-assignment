import React,{useState} from 'react'
import TodoEdit from './TodoEdit'
import './Todo.css'

const Todo = ({taskObj,index,deleteTask,updateListArray}) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const updateTask = (obj) => {
        updateListArray(obj, index)
        console.log(obj)
    }


    const handleDelete=()=>{
     
        deleteTask(index);
       
    }
  return (
    <div className='card-wrapper mx-2'>
      <div className="card-top" style={{"background-color":"#ffd700"}}></div>
      <div className="task-holder">
        <p className='card-header' style={{"background-color":"#F2FAF1"}}><b>{taskObj.Title}</b></p>
        <p>{taskObj.Description}</p>
        <div className="row mt-0">
            <div className="col-6">
                <p>{taskObj.SheduleDate}</p>
            </div>
            <div className="col-6">
                <p>{taskObj.SheduleTime}</p>  
            </div>
        </div>
        
              
        <div style={{"position":"absolute","right":"20px","bottom":"5px"}}>
            <i className='far fa-edit mx-3' onClick={()=>setModal(true)} style={{"color":"#ffd700"}}></i>
            <i className='far fa-trash-alt' onClick={handleDelete} style={{"color":"#ffd700"}}></i>
        </div>
      </div>
      <TodoEdit toggle={toggle} modal={modal} updateTask={updateTask} taskObj={taskObj}/>
    </div>
  )
}

export default Todo
