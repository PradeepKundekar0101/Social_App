import React from 'react'

const Step2 = (props) => {
    const {formDetails,setFormDetails} = props;
    return (
      <div className='steps-input'>
          <input 
              type="text" 
              placeholder='Phone Number' 
              value={formDetails.phonenumber}
              name="phonenumber"
              onChange={(e)=>{setFormDetails({...formDetails,phonenumber:e.target.value});}}
          />
          <input 
              type="password" 
              placeholder='Password' 
              value={formDetails.password}
              name="password"
              onChange={(e)=>{setFormDetails({...formDetails,password:e.target.value});}}
          />
          <input
              type="password"
              placeholder='Confirm Password' 
              value={formDetails.confirmpassword}
              name="email"
              onChange={(e)=>{setFormDetails({...formDetails,confirmpassword:e.target.value});}}    
          />
      </div>
    )
}

export default Step2