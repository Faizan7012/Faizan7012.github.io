import { useState } from 'react';
import {IoSend} from 'react-icons/io5'
import Swal from "sweetalert2";
import './form.scss'
let init = {
    name:'',
    email:'',
    message:''
}
function Form(){
const [info,setInfo] = useState(init)
const [loading,setLoading] = useState(false)

const handleChange = (e)=>{
    e.preventDefault();
    const {name,value} = e.target;
    setInfo({...info,[name]:value});
}

const Submit =async(e)=>{
    e.preventDefault();
    setLoading(true)
      let ans = await fetch('https://upset-teal-duck.cyclic.app/sendmail',{
        method:"POST",
        body:JSON.stringify(info),
        headers:{
          'Content-Type':'Application/json'
        }
      }).then((res)=>res.json()).then((data)=>{
        if(data.status){
          setInfo({
            name:'',
            email:'',
            message:''
          })
          setLoading(false)
          Swal.fire({
            position: "center",
            icon: "success",
            title: "You have sent an email!",
            showConfirmButton: false,
            timer: 4000,
          });
       }
       else{
        setLoading(false)
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Something went wrong !",
            showConfirmButton: false,
            timer: 4000,
          });
       }

      }).catch((e)=>{
        setLoading(false)
        Swal.fire({
          position: "center",
          icon: "error",
          title: e.message,
          showConfirmButton: false,
          timer: 4000,
        });
      })
    }
    return <>
         <form onSubmit={Submit} className='form'> 
            <input value={info.name} onChange={handleChange} required placeholder= 'Name' name='name' type="text" />
            <input value={info.email} onChange={handleChange} required placeholder='Email' name='email' type="text" />
            <input value={info.message} onChange={handleChange} required placeholder='message' name='message' type="text" />
            <button className='send_btn'>{!loading?<div>Send <IoSend fontSize='30px' color='cornflowerblue' /></div>:'Sending ...'}</button>
         </form><br /><br />
    </>
}

export default Form;