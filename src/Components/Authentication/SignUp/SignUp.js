import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import loginbg from '../../../images/login_bg.jpg'
const SignUp = () => {


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

     const handleRegisterSubmit = () =>{

     }
    return (
        <>
          
         <div style={loginBackground} className="login-bg">
            
            </div>

            <div className="login-field">

                <h2> SignUp </h2>
                
                 <form onSubmit={handleRegisterSubmit } 
                style={{color:'white'}}
                > 
                <input 
                onBlur={handleOnBlur}
                placeholder='Enter Name'
                type='text'
                className='input-filed'
                name="name"
                label="Name"
                required 
                 />
                   <br />
                <input 
                onBlur={handleOnBlur}
                placeholder='Enter Email'
                type='email'
                className='input-filed'
                name="email"
                label="Email"
                required 
                 />
                   <br />
                <input 
                onBlur={handleOnBlur}
                placeholder='Enter Password'
                label="Password"
                type='password'
                className='input-filed'
                name="password"
                required  
                />

                   <br />

                <input 
                onBlur={handleOnBlur}
                placeholder='Re Enter Password'
                type='password'
                className='input-filed'
                name="password2"
                required  
                />

                   <br />

                 <Button 
         
                 type="submit" 
                 variant="warning">Register</Button>
                </form>  

                <br />

                {/* <h6 style={{color:"red"}}>{error} </h6> */}
                <p className="alternate-msg">Already a User ? <Link style={{textDecoration:'none', color:'orange'}} to="/login">Please Login</Link> </p> 
                <p>----- OR -----</p>
                <Button onClick={handleGoogleSignIn} variant="danger"><i className="fab fa-google"></i>oogle Sign In</Button>

                
 
            </div> 
        </>
    );
};

export default SignUp;