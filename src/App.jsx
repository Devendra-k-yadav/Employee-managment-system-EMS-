import React, { useContext, useEffect , useState} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
const [userData , setUserData] = useContext(AuthContext);

useEffect(() => {
const loggedInUser = localStorage.getItem('loggedInUser');
if(loggedInUser){
const userData = JSON.parse(loggedInUser);
console.log(userData);
}
},[])


  const handleLogin = (email,password) => {
    if(email == 'admin@me.com' && password == '123'){
        setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role: 'admin'}));
  }else if(userData){
    const employee = userData.find(emp => emp.email === email && emp.password === password);
    if(employee){
        setUser('employee')
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser',JSON.stringify({role: 'employee'}));
    }

  }else{
    alert('Invalid credentials')
    
  }
  }
 
const data = useContext(AuthContext)
console.log(data);


  return (
    <>
    {!user ?<Login handleLogin={handleLogin} />: ''}
    {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : (user=='employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null)}
    </>
  )
}

export default App