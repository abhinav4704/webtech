import { useState } from "react"
import { useNavigate } from "react-router-dom";
export const Login = () => {
    const [email,setemail] = useState("")
    const [password, setPassword] = useState('');
    const [Error,setError] = useState('')  
    const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      if (response.ok) {
        
        const data = await response.json();
        
        const jwtToken = data.token; // Make sure to retrieve the token correctly
        localStorage.setItem('token', jwtToken); // Store the JWT token
        console.log('Token stored:', jwtToken);
        navigate('/dashboard');
        // Optionally redirect or update UI after login
    } else {
        const errData = await response.json();
        setError(errData.message); // Show error message
        console.log(Error)
    }

  } 
    

  


    return(
        <>
         <h1>Login page</h1>
         <form action="/login" method="POST" onSubmit={handleSubmit}>
         

            <input type="email" name="email" placeholder="Email" onChange={(e)=>setemail(e.target.value)}/>
            <br></br>
            <input type="password" name='password' placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            <br />
            <button type="submit">console</button>
         </form> 
         
         </>
    )
}