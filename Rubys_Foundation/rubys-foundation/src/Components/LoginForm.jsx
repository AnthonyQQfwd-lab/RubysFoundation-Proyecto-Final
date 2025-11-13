import {React, useState} from 'react'

function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
  return (
    <div>
        <label>Email</label>
        <input type="email" value={email} placeholder='Email'/>
        <label>Password</label>
        <input type="password" value={password} placeholder='Password'/>
    </div>
  )
}

export default LoginForm