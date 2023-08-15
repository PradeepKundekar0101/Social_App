import React,{useState} from "react";
import {FaArrowRight,FaArrowLeft} from 'react-icons/fa'
import NavBar from "../../components/Navbar/Navbar";
import './Register.css'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();
    
    const [formDetails,setFormDetails] = useState({ firstname:"",
    lastname:"",
    email:"",
    phonenumber:"",
    password:"",
    confirmpassword:"",
    location:"",
    occupation:"",}
    );
    
    const [profilePicture,setProfilePicture] = useState("");
    const [page, setPage] = useState(0);
   
    const titles = ["Step1/3","Step2/3","Step3/3"];
    const displayPage = ()=>
    {
        switch (page) {
            case 0:
                return <Step1 formDetails={formDetails} setFormDetails={setFormDetails}/> 
            case 1:
                return <Step2 formDetails={formDetails} setFormDetails={setFormDetails}/>
            case 2:
                return <Step3 formDetails={formDetails} setFormDetails={setFormDetails} setProfilePicture={setProfilePicture}/> 
            case 3:
                return <h1 style={{color:"blue"}} >Welcome {formDetails.firstname.toUpperCase()}  </h1>
            default:
                break;
        }
    }
    const handleFormSubmit = async ()=>{
        if(page!==2) return;
        
        const formData = new FormData();
        formData.append('firstname', formDetails.firstname);
        formData.append('lastname', formDetails.lastname);
        formData.append('email', formDetails.email);
        formData.append('password', formDetails.password);
        formData.append('phonenumber', formDetails.phonenumber);
        formData.append('location', formDetails.location);
        formData.append('occupation', formDetails.occupation);
        formData.append('picture', profilePicture);

        try {
            const response = await fetch("http://localhost:8000/auth/register",{
                method:"POST",
                body:formData
            });
            const json =await response.json();
            console.log(json)
            if(json){
                // dispatch()
                navigate("/login");
            }
        } catch (error) {
            
        }

    }
    return (
    <>
    <NavBar/>
    <div className="body-register">
        <div className="form-register">
            <div className="progressBar">
                <div style={{width: page===0?"33%":page===1?"66%":"110%",}}></div>
            </div>
            <div className="form-container-register">
                <div className="header">
                    <h1>Create an Account</h1>
                    <h4>{titles[page]}</h4>
                </div>
                <div className="body">
                    {displayPage()}
                </div>
                <div className="footer" style={{display:page===3?"none":"flex"}}>
                    <button 
                        disabled={page===0} 
                        onClick={()=>{setPage(page-1)}} 
                    >
                        <FaArrowLeft/> Prev 
                    </button>
                    <button 
                        disabled={page===3} 
                        onClick={()=>{handleFormSubmit();setPage(page+1);}}
                    >
                        {page===2?"Submit":"Next"}  <FaArrowRight/>
                    </button>
                </div> 
            </div>
        </div>
    </div>
    </>
  );
};



export default Register;