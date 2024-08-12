import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import {Button} from "../components/Button";
import InputBox from "../components/InputBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState('Student');
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleLogin = async () =>{
    try {
      const response = await axios.post(apiUrl+'auth/', {
        username,
        password,
        role
      });
      localStorage.setItem("role", role)
      localStorage.setItem("jwtToken", response.data.token);
      navigate("/dash");
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login error (e.g., show a notification or message to the user)
    }
  }
  

  
  return(
  <div>
    <div className="bg-white text-3xl font-bold p-3">
      Classroom App
    </div>
    <div className="bg-slate-300 h-screen flex justify-center">
      
      <div className="flex flex-col justify-center">
        
        <div className="rounded-lg bg-white w-100 text-center p-2 h-max px-4">
          <Heading label={"Login in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox onChange={e=>{
              setUsername(e.target.value)
          }} placeholder="student@classroom.com" label={"Email"} />
          <InputBox onChange={e=>{
              setPassword(e.target.value)
          }} placeholder="123456" label={"Password"} />

          <div className="m-2">
            <label htmlFor="cars" className="text-base font-medium text-left p-2">Select role:</label>
            <select
             onChange={(e) => setRole(e.target.value)} 
             className="text-base font-bold text-left" id="roles" name="roles">
              <option  value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Principal">Principal</option>
            </select>
          </div>
          <div className="pt-4">
            <Button label={"Login"} onClick={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  </div>
)
}