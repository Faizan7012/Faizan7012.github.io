import { useState } from 'react';
import {IoSend} from 'react-icons/io5'
import './form.scss'
let init = {
    name:'',
    email:'',
    message:''
}
const Wr = {
    name:false,
    email:false,
    message:false
}
function Form(){
const [info,setInfo] = useState(init)
const [isTrue ,setIsTrue] = useState(Wr)
const [loading,setLoading] = useState(false)
const [isSend,setIsSend] = useState(false)
const handleChange = (e)=>{
    e.preventDefault();
    const {name,value} = e.target;
    setInfo({...info,[name]:value});
}

const Submit =async(e)=>{
    e.preventDefault();
    setLoading(true)
     if(info.message !== '' && info.email !== '' && info.name !== ''){
          setIsTrue(Wr)

          let ans = await fetch('https://upset-teal-duck.cyclic.app/blog/sendmail',{
            method:"POST",
            body:JSON.stringify({
              name:info.name,
              message:info.message,
              email:info.email
            })
          })

          let data = await ans.json();
            if(data.status){
              setIsSend(true)
              setInfo({
                name:'',
                email:'',
                message:''
              })
              setLoading(false)
    
              setTimeout(()=>{
                setIsSend(false)
              },11000)
            }
            else{
            setIsTrue({...isTrue,message:false,email:true,name:false})
            setLoading(false)
            }
            }
                  
     else{
        if(info.message == '' && info.email == '' && info.name == ''){
            setIsTrue({...isTrue,message:true,email:true,name:true})
          setLoading(false)


        }
        else if(info.email=='' && info.name==''){
        setIsTrue({...isTrue,message:false,email:true,name:true})
        setLoading(false)


        }
        else if(info.email=='' && info.message==''){
            setIsTrue({...isTrue,message:true,email:true,name:false})
          setLoading(false)


            }
        else if(info.message=='' && info.name==''){
            setIsTrue({...isTrue,message:true,email:false,name:true})
          setLoading(false)

    
            }
            else if(info.email == ''){
                setIsTrue({...isTrue,message:false,email:true,name:false})
          setLoading(false)

                }
                else if(info.message==''){
                setIsTrue({...isTrue,message:true,email:false,name:false})
          setLoading(false)

                     
                }
                else if(info.name == ''){
                    setIsTrue({...isTrue,message:false,email:false,name:true})
          setLoading(false)

                }
         }

}

    return <>
         <form onSubmit={Submit} className='form'> 
            <label style={{display:!isTrue.email?'none':'block'}} className='required_lable'>* required</label>  
            <input value={info.name} onChange={handleChange} placeholder=' Name' name='name' type="text" />
            <label style={{display:!isTrue.email?'none':'block'}} className='required_lable'>* required</label>  
            <input value={info.email} onChange={handleChange} placeholder=' Email' name='email' type="text" />
            <label style={{display:!isTrue.message?'none':'block'}} className='required_lable'>* required</label>  
            <input value={info.message} onChange={handleChange} placeholder=' message' name='message' type="text" />
            <button className='send_btn'>{!loading?<div>Send <IoSend fontSize='30px' color='cornflowerblue' /></div>:'Sending ...'}</button>
         </form>
           {
            isSend?  <div className='after_message'>
            <p>
              Thanks! for sending a message
            </p></div>:null
           }
           <br /><br />

    </>
}

export default Form;