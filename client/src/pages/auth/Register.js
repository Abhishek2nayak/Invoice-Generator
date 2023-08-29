import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import FormControl from "../../Components/Form/FormControl";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    username: "",
    age: "",
    mobile: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
     const response =  await axios.post('http://localhost:9090/auth/register',formData)
     if(response.status === 201) {
      
      navigate('/login')
      toast.success("Registration Successfully")
     }
     const message = response.message;
     toast.error(message)
    } catch (err) {
      console.log(err);
      toast.error("Error occured during registration")
    }
  };

  return (
    <>
      <div className="w-full h-screen  flex justify-center items-center">
        <div
          className="card w-1/2 justify-items-center bg-base-300"
        
        >
          <h1 className="text-5xl font-bold text-center p-10 text-base-content">
            Register Here
          </h1>
          <form
            className="flex justify-center flex-col p-5 gap-10"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-5 ">
              <FormControl
                value={formData.fname}
                onChange={handleChange}
                label={"First Name"}
                name="fname"
              />

              <FormControl
                value={formData.lname}
                onChange={handleChange}
                label={"Last Name"}
                name="lname"
              />
              <FormControl
                value={formData.username}
                onChange={handleChange}
                label={"Username"}
                name="username"
              />
              <FormControl
                value={formData.age}
                onChange={handleChange}
                label={"Age"}
                type="number"
                name="age"
              />
              <FormControl
                value={formData.mobile}
                onChange={handleChange}
                label={"Mobile"}
                type="number"
                name="mobile"
              />
              <FormControl
                value={formData.email}
                onChange={handleChange}
                label={"Email"}
                type="email"
                name="email"
              />
              <FormControl
                value={formData.password}
                onChange={handleChange}
                label={"Password"}
                type="password"
                name="password"
              />
              <FormControl
                value={formData.cpassword}
                onChange={handleChange}
                label={"Confirm Password"}
                type="password"
                name="cpassword"
              />
            </div>
            <input
              type="submit"
              className="btn btn-success"
              value={"Register"}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
