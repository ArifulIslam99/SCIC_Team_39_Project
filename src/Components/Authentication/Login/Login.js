import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'
import loginbg from '../../../images/login_bg.jpg'
const Login = () => {


    const [loginData, setLoginData] = useState({});

const loginBackground = {
    background : `url(${loginbg})`,
    backgroundSize: 'cover'
   
} 

    const handleOnBlur = event =>{
     const field = event.target.name;
     const value = event.target.value;

     const newLoginData = {...loginData};
     newLoginData[field] = value;
     setLoginData(newLoginData)
     }

     const handleGoogleSignIn = () =>{

     }

     const handleLoginSubmit = () =>{

     }
    return (
        <>
          
         <div style={loginBackground} className="login-bg">
            
            </div>

            <div className="login-field">

                <h2>Please Login</h2>
                
                 <form onSubmit={handleLoginSubmit } 
                style={{color:'white'}}
                >
                <input 
                onBlur={handleOnBlur}
                type='email'
                className='input-filed'
                id="outlined-basic"
                name="email"
                label="Email"
                required 
                 />
                   <br />
                <input 
                onBlur={handleOnBlur}
                id="outlined-basic"
                label="Password"
                type='password'
                className='input-filed'
                name="password"
                required 
                variant="standard"
                color= "warning"
                />

                   <br />

                 <Button 
         
                 type="submit" 
                 variant="warning">Login</Button>
                </form>  

                <br />

                {/* <h6 style={{color:"red"}}>{error} </h6> */}
                <p className="alternate-msg">New User ? <Link style={{textDecoration:'none', color:'orange'}} to="/register">Please Signup first</Link> </p> 
                <p>----- OR -----</p>
                <Button onClick={handleGoogleSignIn} variant="danger"><i className="fab fa-google"></i>oogle Sign In</Button>

                
 
            </div> 
        </>
    );
};

export default Login;