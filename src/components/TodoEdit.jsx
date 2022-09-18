import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const TodoEdit = ({ modal, toggle, updateTask, taskObj }) => {
    const [values, setValues] = useState({
        title: '',
        description: '',
        sheduleDate: '',
        sheduleTime: '',
        orderBy: 'DESC',
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false
    });


    useEffect(() => {
        if (taskObj) {
            values.title = taskObj.Title;
            values.description = taskObj.Description;
            values.scheduleDate = taskObj.ScheduleDate;
            values.scheduleTime = taskObj.ScheduleTime;
            values.mon = taskObj.Mon;
            values.tue = taskObj.Tue;
            values.wed = taskObj.Wed;
            values.thu = taskObj.Thu;
            values.fri = taskObj.Fri;
            values.sat = taskObj.Sat;
            values.sun = taskObj.Sun;
            setValues(taskObj)
        }
    }, [taskObj]);

    const handleUpdate = (event) => {
        event.preventDefault();
        console.log(values);
        let taskObj = {}
        taskObj["Title"] = values.title
        taskObj["Description"] = values.description
        taskObj["SheduleDate"] = values.sheduleDate
        taskObj["SheduleTime"] = values.sheduleTime
        taskObj["Mon"] = values.mon
        taskObj["Tue"] = values.tue
        taskObj["Wed"] = values.wed
        taskObj["Fri"] = values.fri
        taskObj["Sat"] = values.sat
        taskObj["Sun"] = values.sun
        updateTask(taskObj)

    }


    return (


        <Modal className="container" isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}><h1 className='heading'>Edit Todo</h1></ModalHeader>
            <ModalBody>
                <div >
                    <div className='row  '>
                        <div className="card">


                            <form className="todo-form">
                                <div class="mb-3">
                                    <label for="title" className="form-label">Task</label>
                                    <input type="text" name='title' className="form-control" id="title" aria-describedby="titleHelp"
                                        value={values.title}
                                        onChange={(e) => {
                                            setValues({ ...values, title: e.target.value })
                                        }} />

                                </div>
                                <div class="mb-3">
                                    <label for="floatingTextarea2">Description</label>

                                    <textarea name='description' value={values.description} className="form-control" aria-label="With textarea"
                                        onChange={(e) => {
                                            setValues({ ...values, description: e.target.value })
                                        }}></textarea>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div class="mb-3">
                                            <label for="date" className="form-label">Shedule Date</label>
                                            <input type="date" name='date' className="form-control" id="date" value={values.sheduleDate}
                                                onChange={(e) => { setValues({ ...values, sheduleDate: e.target.value }) }} />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div class="mb-3">
                                            <label for="date" className="form-label">Shedule Time</label>
                                            <input type="time" name='time' className="form-control" id="date" value={values.sheduleTime}
                                                onChange={(e) => { setValues({ ...values, sheduleTime: e.target.value }) }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">


                                    <div style={{ width: 350, height: 22, display: "flex" }}>
                                        <div style={{ flex: 1 }}>Mon</div>
                                        <div style={{ flex: 1 }}>Tue</div>
                                        <div style={{ flex: 1 }}>Wed</div>
                                        <div style={{ flex: 1 }}>Thu</div>
                                        <div style={{ flex: 1 }}>Fri</div>
                                        <div style={{ flex: 1 }}>Sat</div>
                                        <div style={{ flex: 1 }}>Sun</div>
                                    </div>
                                    <div style={{ width: 350, height: 22, display: "flex" }}>
                                        <input name='mon' checked={values.mon} onChange={(e) => { setValues({ ...values, mon: e.target.checked }) }} style={{ flex: 1, display: "flex", justifyContent: "center" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                        <input name='tue' checked={values.tue} onChange={(e) => { setValues({ ...values, tue: e.target.checked }) }} style={{ flex: 1, display: "flex", justifyContent: "center" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                        <input name='wed' checked={values.wed} onChange={(e) => { setValues({ ...values, wed: e.target.checked }) }} style={{ flex: 1, display: "flex", justifyContent: "center" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                        <input name='thu' checked={values.thu} onChange={(e) => { setValues({ ...values, thu: e.target.checked }) }} style={{ flex: 1, display: "flex", justifyContent: "center" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                        <input name='fri' checked={values.fri} onChange={(e) => { setValues({ ...values, fri: e.target.checked }) }} style={{ flex: 1, display: "flex", justifyContent: "center" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                        <input name='sat' checked={values.sat} onChange={(e) => { setValues({ ...values, sat: e.target.checked }) }} style={{ flex: 1, display: "flex", justifyContent: "center" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                        <input name='sun' checked={values.sun} onChange={(e) => { setValues({ ...values, sun: e.target.checked }) }} style={{ flex: 1, display: "flex", justifyContent: "center" }} className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                    </div>



                                </div>

                                {/* <button type="button" onClick={handleSubmit}>Warning</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="warning" onClick={handleUpdate}>
                    Edit
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default TodoEdit