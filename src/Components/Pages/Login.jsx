import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center align-middle bg-zinc-500'>
      <div className="log w-full h-screen border ">
        <h3> Login Page </h3>
        <form className='flex-col-reverse justify-center'>
            <div className="mail"><lable>
                emailid
            </lable>
            <br />
        <input className=' text-black' type="email" name="EmailId" id="emailid" placeholder='enter your Mail id ' /></div>

        <div className="password"><lable>
            Password
        </lable>

        <br />


         <input className=' text-black ' type="password" name="" id="userpassword" placeholder='enter your password' /></div>

        </form>
        <a href="">
        <p> Forget Password</p>
        </a>

        <button> Submit </button>

      </div>
    </div>
  )
}

export default Login
