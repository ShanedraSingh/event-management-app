import React, {useState} from "react";
import {Link} from 'react-router-dom';
import './Signup.css';
const Signup = () => {
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[phone,setPhone]=useState();
  const[password,setPassword]=useState();
  const Register=()=>{
    
}
  return(
    <div className="signup_container">
      <div className="signup_main">
        <div className="signup_grid"><h1>Signup</h1></div>
        <div className="signup_text">
          Already a member? <Link to='/login'>Login Here</Link>
        </div>
        <div className="signup_form">
          <form onSubmit={Register}>
             {/* name */}
             <div className="mb-3">
              <label htmlFor="name" className='form-lable'>Enter Name</label>
              <input type="text" id='name' className='form-control' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>

            {/* email */}
            <div className="mb-3">
              <label htmlFor="email" className='form-lable'>Enter email</label>
              <input type="email" id='email' className='form-control' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            {/* phone */}
            <div className="mb-3">
              <label htmlFor="phone" className='form-lable'>Enter phone</label>
              <input type="number" id='phone' className='form-control' placeholder='Enter phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            </div>

            {/* password */}
            <div className="mb-3">
              <label htmlFor="password" className='form-lable'>Enter password</label>
              <input type="password" id='password' className='form-control' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup