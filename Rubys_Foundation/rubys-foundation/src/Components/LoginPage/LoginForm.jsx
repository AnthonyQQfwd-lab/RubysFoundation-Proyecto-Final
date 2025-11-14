import {React, useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom';
function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function logIn (){
      
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