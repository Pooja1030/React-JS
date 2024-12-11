/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({childern}) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const {employees, admin} = getLocalStorage()
        setUserData({employees, admin})
    }, [])

    

  return (
    <div>
      <AuthContext.Provider value={userData}>
            {childern}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
