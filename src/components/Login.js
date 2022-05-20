import React ,{useState}from 'react'
import { useNavigate } from "react-router-dom"

const Login = (props) => {
    const [credentials, setCredentials] = useState({email:"",password:""})
    let navigate = useNavigate();
    

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
            });
            const json = await response.json()
            console.log(json)
            if(json.success){
                //Save authtoken and redirect
                localStorage.setItem('token', json.authtoken)
                navigate("/")
                props.showAlert("Login Successfull", "success")
            }else{
                props.showAlert("Invalid Credentials", "danger")
            }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]:e.target.value})
    }
    return (  
        <div className='container my-4 '>
            <h2><u>Login</u></h2>
            <form className='my-3' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} id="email" onChange={onChange} name='email' aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} id="password" onChange={onChange} name="password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        
    )
}

export default Login