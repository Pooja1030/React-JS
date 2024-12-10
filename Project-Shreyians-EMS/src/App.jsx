/* eslint-disable no-unused-vars */
import React,  { useContext, useEffect, useState }  from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'
import { use } from 'react'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogin = (email,password) => {
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      console.log('This is Admin')
    } else if(email == 'user@me.com' && password == '123'){
      setUser('employee')
      console.log("This is User")
    }
    else {
      alert("Inalid Credentials")
    }
  }

  handleLogin();
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} />: ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App
