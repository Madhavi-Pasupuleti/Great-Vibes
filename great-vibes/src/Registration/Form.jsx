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

    const handleChange = (e) => {
        const {name , value} = e.target;
        SetInputVal({...inputval, [name] : value})
        console.log(inputval)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        SetInputErrors(validation(inputval))
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
        console.log("inputerrors",inputErrors)
        if(Object.keys(inputErrors).length == 0){
            console.log("inputval", inputval)
            SetInputVal({...obj})
            alert("Registration is Successfull")
        }
    },[inputErrors])

    return (
        <div id="f">
            <form onSubmit={handleSubmit}>
                <h1>Great Vibes</h1>
                <div>
                    <label>Name</label><br />
                    <input 
                        type="text" 
                        name = "name"
                        placeholder="Name"
                        value = {inputval.name}
                        onChange = {handleChange}
                    />
                </div>
                <p>{inputErrors.name}</p>
        
                <div>
                    <label>Email</label><br />
                    <input 
                        type="email" 
                        name = "email"
                        placeholder="Email"
                        value = {inputval.email}
                        onChange = {handleChange}
                    />
                </div>
                <p>{inputErrors.email}</p>

                <div>
                    <label>Mobile</label><br />
                    <input 
                        type="tel" 
                        name = "mobile"
                        placeholder="enter your mobile"
                        value = {inputval.mobile}
                        onChange = {handleChange}
                    />
                </div><br />
                <div>
                    <label>Country</label><br />
                    <input 
                        type="text" 
                        name = "country"
                        placeholder="Country"
                        value = {inputval.country}
                        onChange = {handleChange}
                    />
                </div><br />
                <div>
                    <label>City</label><br />
                    <input 
                        type="text" 
                        name = "city"
                        placeholder="City"
                        value = {inputval.city}
                        onChange = {handleChange}
                    />
                </div><br />
                <div>
                    <label>State</label><br />
                    <input 
                        type="text" 
                        name = "state"
                        placeholder="State"
                        value = {inputval.state}
                        onChange = {handleChange}
                    />
                </div><br />
                <div>
                    <label>Message</label><br />
                    <textarea 
                        placeholder="Enter your message"
                        name="message"
                        value = {inputval.message}
                        onChange = {handleChange}
                    />
                </div><br />
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Form