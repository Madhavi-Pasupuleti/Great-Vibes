import { useEffect } from "react";
import { useState } from "react"
import "./from.css"

function Form() {
    let obj = {
        name : "",
        email : "",
        mobile : "",
        country : "",
        city : "",
        state : "",
        message : ""
    }
    
    const [inputval, SetInputVal] = useState(obj);
    const [inputErrors, SetInputErrors] = useState({})
    const [submit, SetSubmit] = useState(false)
    const handleChange = (e) => {
        const {name , value} = e.target;
        SetInputVal({...inputval, [name] : value})
        // console.log(inputval)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        SetInputErrors(validation(inputval))
        SetSubmit(true)
    }

    const validation = (val) => {
        const errors = {};

        if(!val.name){
            errors.name = "Name is required"
        }
        if(!val.email){
            errors.email = "Email is required"
        }
         
        return errors
    }

    useEffect(() => {

        if(Object.keys(inputErrors).length === 0 && submit){
            SetInputVal({...obj})
            alert("Registered Successfully")
        }
    },[inputErrors])

    return (
        <div id="f">
            <form onSubmit={handleSubmit}>
                <h1><span style={{color:"lightgreen"}}>Great</span> Vibes</h1>
                <div>
                    <input 
                        type="text" 
                        name = "name"
                        placeholder="Name"
                        value = {inputval.name}
                        onChange = {handleChange}
                    />
                </div>
                <p className="error">{inputErrors.name}</p>
        
                <div>
                    <input 
                        type="email" 
                        name = "email"
                        placeholder="Email"
                        value = {inputval.email}
                        onChange = {handleChange}
                    />
                </div>
                <p className="error">{inputErrors.email}</p>

                <div>  
                    <input 
                        type="number" 
                        name = "mobile"
                        placeholder="Mobile"
                        value = {inputval.mobile}
                        onChange = {handleChange}
                    />
                </div><br />
                <div> 
                    <input 
                        type="text" 
                        name = "country"
                        placeholder="Country"
                        value = {inputval.country}
                        onChange = {handleChange}
                    />
                </div><br />
                <div>  
                    <input 
                        type="text" 
                        name = "city"
                        placeholder="City"
                        value = {inputval.city}
                        onChange = {handleChange}
                    />
                </div><br />
                <div>  
                    <input 
                        type="text" 
                        name = "state"
                        placeholder="State"
                        value = {inputval.state}
                        onChange = {handleChange}
                    />
                </div><br />
                <div> 
                    <textarea 
                        placeholder="Enter Your Message"
                        name="message"
                        value = {inputval.message}
                        onChange = {handleChange}
                    />
                </div><br />
                <div>
                     <button>SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default Form