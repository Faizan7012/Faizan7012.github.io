import { useState } from 'react';
import {IoSend} from 'react-icons/io5'
import './form.scss'
let init = {
    name:'',
    email:'',
    massage:''
}
const Wr = {
    name:false,
    email:false,
    massage:false
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

const Submit = (e)=>{
    e.preventDefault();
    setLoading(true)
     if(info.massage !== '' && info.email !== '' && info.name !== ''){
          setIsTrue(Wr)
          setIsSend(true)
                setInfo({
                  name:'',
                  email:'',
                  massage:''
                })
                setLoading(false)
      
                setTimeout(()=>{
                  setIsSend(false)
                },11000)
              }      
     else{
        if(info.massage == '' && info.email == '' && info.name == ''){
            setIsTrue({...isTrue,massage:true,email:true,name:true})
          setLoading(false)


        }
        else if(info.email=='' && info.name==''){
        setIsTrue({...isTrue,massage:false,email:true,name:true})
        setLoading(false)


        }
        else if(info.email=='' && info.massage==''){
            setIsTrue({...isTrue,massage:true,email:true,name:false})
          setLoading(false)


            }
        else if(info.massage=='' && info.name==''){
            setIsTrue({...isTrue,massage:true,email:false,name:true})
          setLoading(false)

    
            }
            else if(info.email == ''){
                setIsTrue({...isTrue,massage:false,email:true,name:false})
          setLoading(false)

                }
                else if(info.massage==''){
                setIsTrue({...isTrue,massage:true,email:false,name:false})
          setLoading(false)

                     
                }
                else if(info.name == ''){
                    setIsTrue({...isTrue,massage:false,email:false,name:true})
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
            <label style={{display:!isTrue.massage?'none':'block'}} className='required_lable'>* required</label>  
            <input value={info.massage} onChange={handleChange} placeholder=' Massage' name='massage' type="text" />
            <button className='send_btn'>{!loading?<div>Send <IoSend fontSize='30px' color='cornflowerblue' /></div>:'Sending ...'}</button>
         </form>
           {
            isSend?  <div className='after_massage'>
            <p>
              Thanks! for sending massage
            </p></div>:null
           }
           <br /><br />

    </>
}

export default Form;