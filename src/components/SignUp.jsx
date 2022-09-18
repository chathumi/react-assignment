import React, { useState } from 'react'
import { json } from 'react-router-dom';
import './Style.css';
import validation from './Validation';
import TodoList from './TodoList';

const SignUp = () => {
    const [values, setValues] = useState({
        fullname:"",
        phone:"",
        email: "",
        password: ""
    });

    const[todoList,setTodoList]=useState(true);
    const [errors,setErrors]=useState({});

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        if(!values.fullname|| !values.phone|| !values.email ||!values.password){
            setErrors(validation(values));
        }
        else{
            localStorage.setItem("Email",JSON.stringify(values.email));
            localStorage.setItem("Password",JSON.stringify(values.password));

            setTodoList(!todoList);
        }
    }
    return (
        <div>
            <div className="main-signup">
                {todoList ? (
                <div class="container-fluid h-custom mt-5">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                class="img-fluid" alt="Sample image" />
                        </div>
                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <div className="login-card">
                                <h1 className='header'>Create Account</h1>

                                <form>
                                <div class="mb-3">
                                        <label for="exampleInputName" class="form-label">Full Name</label>
                                        <input type="text" class="form-control" id="exampleInputName"
                                            value={values.fullname} name="fullname"
                                            onChange={handleChange} />
                                            {errors.fullname && <p className='error'>{errors.fullname}</p>}

                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPhone" class="form-label">Phone No</label>
                                        <input type="text" class="form-control" id="exampleInputPhone"
                                            value={values.phone} name="phone"
                                            onChange={handleChange} />
                                              {errors.phone && <p className='error'>{errors.phone}</p>}
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                            value={values.email} name="email"
                                            onChange={handleChange} />
                                              {errors.email && <p className='error'>{errors.email}</p>}

                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1"
                                            value={values.password} name="password"
                                            onChange={handleChange} />
                                              {errors.password && <p className='error'>{errors.password}</p>}
                                    </div>

                                    <button type="submit" onClick={handleSubmit} class="btn btn-warning">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                ):(
                    <TodoList/>
                )}
            </div>
        </div>
    )
}

export default SignUp