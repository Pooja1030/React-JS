/* eslint-disable no-unused-vars */
import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex m-10 justify-between gap-5 screen'>
      <div className='rounded-xl w-[45%] px-9 py-6 bg-red-400'>
        <h2 className='text-2xl'>{data.taskCounts.failed}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl w-[45%] px-9 py-6 bg-blue-400'>
        <h2 className='text-2xl'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl w-[45%] px-9 py-6 bg-green-400'>
        <h2 className='text-2xl'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl w-[45%] px-9 py-6 bg-yellow-400'>
        <h2 className='text-2xl'>{data.taskCounts.active}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
