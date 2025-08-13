import React from 'react'


const Header = (props) => {
  // const [username, setUsername] = useState('')

  // if(!data) {
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
   props.changeUser('')
    // window.location.reload()
   
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-semibold text-white'>Hello <br /><span className='text-3xl font-semibold text-white'>username</span></h1>
        <button onClick={logOutUser} className='bg-red-500 text-lg font-medium text-white px-4 py-2 rounded-semibold'>Log Out</button>
    </div>
  )
}

export default Header