import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    

   const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email,password)
        
        setEmail("");
        setPassword("");
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className=''>
            {/* <form className='flex flex-col items-center justify-center'>
            <input className='border-2 border-red-600 py-3 px-5 rounded-full placeholder:text-white' type="email" placeholder='Username' />
            <input className='border-2 border-red-600  py-3 px-5 rounded-full placeholder:text-white' type="password" placeholder='Password' />
            <button>Submit</button>
            </form> */}

<form
        onSubmit={(e)=>{handleSubmit(e)}}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
            
          }}
          required
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
           
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)}}
            required
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </form>
        </div>

    </div>
  )
}

export default Login