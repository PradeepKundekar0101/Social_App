import React from 'react'

const Step3 = (props) => {
    const {formDetails,setFormDetails,setProfilePicture} = props;
    const handleProfilePictureChange=(e)=>{
        setProfilePicture(e.target.files[0]);
    }
    return (
      <div className='steps-input'>
          <input 
              type="text" 
              placeholder='Occupation' 
              value={formDetails.occupation}
              name="phonenumber"
              onChange={(e)=>{setFormDetails({...formDetails,occupation:e.target.value});}}
          />
          <input 
              type="text" 
              placeholder='Location' 
              value={formDetails.location}
              name="location"
              onChange={(e)=>{setFormDetails({...formDetails,location:e.target.value});}}
          />

        
         
          <input
            type="file"
            id="picture"
            accept="image/*"
            onChange={handleProfilePictureChange}
          />

         
      </div>
    )
}

export default Step3