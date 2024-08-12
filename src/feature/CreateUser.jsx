import { useState } from "react";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import { Button } from "../components/Button";
import axios from "axios";
import { Link } from "react-router-dom";


export const CreateUser = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleClick =  async ()=>{
    try {
        const response = await axios.post(apiUrl+'user/', {
          name,
          username,
          password,
          role
        });
            
        if (response.status === 200) {
            alert('User created successfully!');
        }
      } catch (error) {
        console.error("Login failed:", error);
        alert('Failed to create user. Please try again.');
      }
  }

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-200 text-center p-2 h-max px-4">
            <Heading label={'Create User'} />
            <SubHeading label={"Enter credentials to create an account"} />
            <InputBox
                onChange={(e) => {
                setName(e.target.value);
                }}
                placeholder="abs xyz"
                label={"Name"}
            />
            <InputBox
                onChange={(e) => {
                setUsername(e.target.value);
                }}
                placeholder="student@classroom.com"
                label={"Email"}
            />
            <InputBox
                onChange={(e) => {
                setPassword(e.target.value);
                }}
                placeholder="123456"
                label={"Password"}
            />
            <div className="m-2">
                <label htmlFor="cars" className="text-base font-medium text-left p-2">Select role:</label>
                <select
                    onChange={(e) => setRole(e.target.value)} 
                    className="text-base font-bold text-left" id="roles" name="roles">
                    <option  value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                </select>
            </div>

            <Button label={'Create'} onClick={handleClick} />
            <Link to={'/dash'}>Go to Dashboard</Link>
            </div>
        </div>
    </div>
  );
};
