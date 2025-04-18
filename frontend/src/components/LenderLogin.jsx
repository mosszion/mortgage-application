import React, {Fragment, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {GoogleOAuthProvider,GoogleLogin} from '@react-oauth/google'


const Login = ({setAuth})=> {

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email:"",
    password:""
  })

  const {email, password} = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value});
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {email, password};

      const response = await fetch("https://mortgage-application-server.vercel.app/auth/login", {
        method: "POST",
        headers : {"Content-Type" : "application/json"},
        body: JSON.stringify(body)
      });

      const parseRes = await response.json();

      if(parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success("Login Successfully!!")
        
      }else {
        setAuth(false)
        toast.error(parseRes)
        
      }
      
    } catch (error) {
      console.error(error.message)
      
    }
  }
  
 


  return (
    <>


<div className="w-full h-[982px] relative bg-stone-100 overflow-hidden">
   
    <form 
    onSubmit = {onSubmitForm}
    className="w-[541px] p-12 left-[370px] top-[234px] absolute bg-white rounded-lg inline-flex flex-col justify-start items-center gap-11">
        <div className="self-stretch flex flex-col justify-start items-start gap-12">
            <div className="self-stretch flex flex-col justify-start items-center gap-4">
                <h1 className="self-stretch text-center justify-start text-zinc-800 text-2xl font-bold font-['Inter'] leading-9 tracking-tight">Log in</h1>
                <div className="self-stretch text-center justify-start"><span class="text-zinc-800 text-base font-normal font-['Inter'] leading-normal">New to Fundify? </span><Link  to="/register" class="text-teal-500 text-base font-normal font-['Inter'] leading-normal">Sign up for free</Link></div>
            
       


            </div>
        
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch h-10 px-1 rounded-lg outline outline-1 outline-offset-[-1px] outline-black inline-flex justify-center items-center gap-2.5">
                        <input 
                         type="email"
                         name = "email"
                         placeholder="Email address *"
                         
                         value={email}
                         onChange={(e) => onChange(e)}
                        className="flex-1 h-6 justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal" / >
                    </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch h-10 px-1 rounded-lg outline outline-1 outline-offset-[-1px] outline-black inline-flex justify-center items-center gap-2.5">
                        < input
                        type = "password"
                        name = "password"
                        placeholder="Password *"
                        
                        value={password}
                        onChange={(e) => onChange(e)}
                        className="flex-1 h-6 justify-start text-zinc-800 text-base font-normal font-['Inter'] leading-normal" />
                    </div>
                </div>
            </div>
        </div>
        <div className="self-stretch h-10 p-2.5 bg-red-400 rounded-[48px] inline-flex justify-center items-center gap-2.5">
            <button className="justify-start text-white text-base font-['SF_Pro'] leading-snug">Log in</button>
        </div>
    </form>
    
</div>

      
    </>
  )

}
export default Login