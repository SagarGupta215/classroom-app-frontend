
import { Route, Routes,Navigate } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import Layout from './components/Layout'
import DashLayout from './components/DashLayout'
import { useEffect, useState } from 'react'
import { PrincipalDash } from './pages/PrincipalDash'
import { TeacherDash } from './pages/TeacherDash'
import { StudentDash } from './pages/StudentDash'
import { CreateUser } from './feature/CreateUser'



function App() {
  const isAuthenticated = !!localStorage.getItem("jwtToken")

  const [role, setRole] = useState(''); 

  useEffect(()=>{
    setRole(localStorage.getItem('role'))
  },[])

  const renderDashboard = () => {
    switch (role) {
      case 'Principal':
        return <PrincipalDash/>;
      case 'Teacher':
        return <TeacherDash/>;
      case 'Student':
        return <StudentDash/>;
      default:
        return <StudentDash/>;
    }
  };



  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login/>} />
            
            {/* Protected Route */}
            <Route 
                path="/dash/*" 
                element={
                    isAuthenticated ? <DashLayout /> : <Navigate to="/" />
                }
                >
                <Route index element={renderDashboard()} />
                {/* Nested Routes inside Dashboard */}
                <Route path='createuser' element={<CreateUser/>} />  
              
            </Route>

            {/* <Route path="/dash/*" element={<DashLayout/>} >
              <Route index element={<PrincipalDash/>} />
              <Route path='createuser' element={<CreateUser/>} />
            </Route> */}
            


          </Route>
          
        </Routes>
    </>
  )
}

export default App
