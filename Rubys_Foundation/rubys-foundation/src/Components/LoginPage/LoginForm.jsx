import {React, useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { createLogin } from '../../Services/ServicesLogin';
import { getUsers } from '../../Services/ServicesUsers';
function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function logIn (){
        const login = {
          username: email,
          password: password

        }
        const newLogin = await createLogin(login)
        console.log(login)
        console.log("-------------", newLogin)

        localStorage.setItem("token", JSON.stringify(newLogin));
        const token = JSON.parse(localStorage.getItem("token"));
        console.log("token:    " + token.access + "       refresh:     " + token.refresh);

        const users = await getUsers()
        const user = users.find(
          u => u.email.toLowerCase().trim() === email.toLowerCase().trim()
        );


        console.log(users)
        console.log(user)


        if(token){
          navigate('/Home')
        }
    }



  return (
    <div>
        <label>Email</label>
        <input type="email" value={email} placeholder='Email'  onChange={(e) => setEmail(e.target.value)}/>
        <label>Password</label>
        <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={logIn}>Log in </button >
        
        <small>Don’t have an account? <Link to="/Register">Register here</Link></small>
        
    </div>
  )
}

export default LoginForm