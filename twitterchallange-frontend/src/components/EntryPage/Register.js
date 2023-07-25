import React, { useState, useEffect,useContext } from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import { EntryPageNavContext } from '../../context/EntryPageNavContext';

function RegisterUser() {
  const {setEntryPageNum} = useContext(EntryPageNavContext)
  const [registerErrorReponse,setRegisterErrorReponse]=useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode:'onChange'
})
const registerHandleSubmit=(data)=>{
  axios
  .post(
    "http://localhost:9000/api/auth/register",data
  )
  .then((res) => {
    //console.log("Yeni urun kayıt res > ", res.data);  
    setEntryPageNum(1)
  })
  .catch((err)=>{
    setRegisterErrorReponse(err.response.data.message)
  })
}
  useEffect(()=>{
    setTimeout(() => {
      setRegisterErrorReponse("")
    }, 2000);
  },[registerErrorReponse])


  return (
    <section id="firstPageLoginMainContainer">
      <button id="loginExitIcon" onClick={()=>{
        setEntryPageNum(0)
      }}><i className="fa-sharp fa-regular fa-circle-xmark fa-4x"></i></button>
      
      <form id='entryPageForm' onSubmit={handleSubmit(registerHandleSubmit)} >
        <h2>Register</h2>
        <label htmlFor="title ">Name</label>
        <input
        data-cy="registerDataName"
        type="text"
        placeholder="Name"
        {...register("name", { required: "Please enter your name" })}
        />
        {errors?.name && <p id="formError">{errors.name.message}</p>}
        <label htmlFor="title "> Username </label>
        <input
        data-cy="registerUserName"
        type="text"
        placeholder="Username"
        {...register("userName", { required: "Please enter your username" })}
        />
        {errors?.userName && <p id="formError">{errors.userName.message}</p>}
        <label htmlFor="title "> E-mail</label>
        <input
        data-cy="registerUserEmail"
        type="text"
        placeholder="E-mail"
        {...register("userEmail", { required: "Please enter your E-mail" })}
        />
        {errors?.userEmail && <p id="formError">{errors.userEmail.message}</p>}
        <label htmlFor="title "> Password </label>
        <input
        data-cy="registerPassword"
        type="text"
        placeholder="Password"
        {...register("password", { required: "Please enter password"})}
        />
        {errors?.password && <p id="formError">{errors.password.message}</p>}
        
        <button data-cy="registerSbmtBtn" type="submit">Submit</button>
        {registerErrorReponse&&<p id="axiosError">{registerErrorReponse}</p>}
      </form>
    </section>
  )
}

export default RegisterUser