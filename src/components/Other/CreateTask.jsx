
import {useContext, useState } from 'react'

import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  // State to manage task title, date, assigned employee, category, and description

  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [assignedTo, setAssignedTo] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()

    setNewTask({
      title,
      date,
      category,
      description,
      active: false,
      newTask: true,  
      completed: false,
      failed: false,

    })

    const data = userData
     console.log(data);

    userData.forEach(function(elem){
      if(elem.firstName == assignedTo){
        elem.tasks.push(newTask)
        elem.taskCount.newTask = elem.taskCount.newTask + 1

      }
    })

    setUserData(data)
 console.log(data);
    // localStorage.setItem('employees',JSON.stringify(data))
    setAssignedTo('')
    setTitle('')
    setDate('')
    setCategory('')
    setDescription('')

  }
  return (
    <div className='p-5 bg-[#935c5c] mt-7 rounded'>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }}
             className='flex flex-wrap w-full items-start  justify-between'>
                <div className='w-1/2'>
                <div>
                <h3 className='text-sm text-gray-600 mb-0.5'>Task Title</h3>
                <input value={title} 
                onChange={(e) => setTitle(e.target.value)}
                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                </div>
                <div>
                <h3 className='text-sm text-gray-600 mb-0.5'>Date</h3>
                <input value={date} onChange={(e) => setDate(e.target.value)}
                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                </div>
                <div>
                <h3 className='text-sm text-gray-600 mb-0.5'>Asign to</h3>
                <input value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)}
                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
                </div>
                <div>
                <h3 className='text-sm text-gray-600 mb-0.5'>Category</h3>
                <input value={category} onChange={(e) => setCategory(e.target.value)}
                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design,dev,etc' />
                </div>

                </div>
               
                
                <div>
                <h3 className='text-sm text-gray-600 mb-0.5'>Description</h3>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} 
                className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols={30} rows={10}></textarea>
                </div>
                
                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                

            </form>
        </div>
  )
}

export default CreateTask