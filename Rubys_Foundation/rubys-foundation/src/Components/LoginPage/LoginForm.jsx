import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createLogin } from '../../Services/ServicesLogin';
import { getUsers } from '../../Services/ServicesUsers';
import { jwtDecode } from "jwt-decode";


function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function logIn (){
        const login = {
          username: email,
          password: password
        }
        //Posteo a el edpoint de login para obtener el access y el refresh token
        const token = await createLogin(login)
        
        //subir el acces al local storage para ser util con als rutas privadas 
        localStorage.setItem("access", JSON.stringify(token.access));


        //decodificar el token para obtener al usuario mediante le id 
        const decoded = jwtDecode(token.access);
        const user = await getUsers(decoded.user_id);

        //subir al usuario para tenerlo a la mano 
        sessionStorage.setItem("currentUser", JSON.stringify(user));
        const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

        //verificar si existe el usuario para redireccionar al homepage 
        if(currentUser){
          navigate('/Home')
        }
        else{
          alert("Gmail o password wrong")
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