const validation=(values)=>{
    let errors={};
    if(!values.fullname){
        errors.fullname="Name is required."
    }
    if(!values.phone){
        errors.phone="Phone is required."
    }
    else if(/^[0-9\b]+$/.test(values.phone)){
        errors.phone="Please enter only number."
    }
    else if(values.phone.length!==10){
        errors.phone="Please enter valid phone number."
    }

    if(!values.email){
        errors.email="Email is required."
    }
    else if(!/\S+@\S.\S+/.test(values.email)){
        errors.email="Email is invalid."
    }

    if(!values.password){
        errors.password="Password is required."
    }
    else if(values.password.length<5){
        errors.password="Password must be more than five characters."
    }

    return errors;
}

export default validation