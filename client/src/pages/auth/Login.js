import React from "react";
import { useState } from "react";
import axios from 'axios'
import FormControl from "../../Components/Form/FormControl";
import { useNavigate } from 'react-router-dom'

const initialData = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialData);
  const navigate = useNavigate()



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:9090/auth/login', formData)
      if (response == 201) {
        const data  = response.data;
        alert(data)

        // saving token to local storage 
        localStorage.setItem('token',data.token)

        alert('login sucessfully')
        navigate('/')
      } 
      const data = await response.json()
      alert(data.message);

    } catch (err) {
      console.error("Error during login",err)
      alert("internal server error")

    }



  }
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="card w-1/2 justify-items-center  bg-info-content text-neutral-content " style={{
          background: "rgb(238,174,202)",
          background:
            " radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,0.6550817836900384) 100%)",
        }}>
          <h1 className="text-5xl font-bold text-center p-10 text-base-content">Login Here</h1>
          <form className="flex justify-center flex-col p-5 gap-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-5 ">

              <FormControl
                value={formData.email}
                onChange={handleChange}
                label={"Email"}
                type="email"
                name='email'
              />

              <FormControl
                value={formData.password}
                onChange={handleChange}
                label={"Password"}
                type="password"
                name='password'
              />

            </div>
            <input
              type="submit"
              className="btn btn-success"
              value={"Login"}
            />
          </form>
          {/* <p className="text-center">--or--</p>
          <button className="btn">Register</button> */}
        </div>

      </div>
    </>
  );
};
export default Login;
