import React from 'react'

const Step1 = (props) => {
    const {formDetails,setFormDetails} = props;
  return (
    <div className='steps-input'>
        <input 
            type="text" 
            placeholder='First Name' 
            value={formDetails.firstname}
            name="firstname"
            onChange={(e)=>{setFormDetails({...formDetails,firstname:e.target.value});}}
        />
        <input 
            type="text" 
            placeholder='Last Name' 
            value={formDetails.lastname}
            name="lastname"
            onChange={(e)=>{setFormDetails({...formDetails,lastname:e.target.value});}}
        />
        <input
            type="email"
            placeholder='Email' 
            value={formDetails.email}
            name="email"
            onChange={(e)=>{setFormDetails({...formDetails,email:e.target.value});}}    
        />
    </div>
  )
}

export default Step1