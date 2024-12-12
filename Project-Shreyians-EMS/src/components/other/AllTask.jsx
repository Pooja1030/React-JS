/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData = useContext(AuthContext);

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
        
            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>
        <div className='overflow-auto'>

        {authData.employees.map(function(elem, idx){
            return <div key={idx} className='border-2 bg-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskCounts.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
        </div>  
        })}
        </div>

        <div className='bg-green-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Pooja</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-yellow-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Pooja</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-blue-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Pooja</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-purple-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Pooja</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>
    </div>
  )
}

export default AllTask
