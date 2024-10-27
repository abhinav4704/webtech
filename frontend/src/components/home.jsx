import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"; 

export const Home = () => {
    const [User,setUser]=useState("")
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            console.log('Token is present:', token);

            // Define an async function to fetch the protected resource
            const fetchProtectedData = async () => {
                try {
                    const response = await fetch("http://localhost:3000/dashboard", {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        }
                    });
            
                    if (response.ok) {
                        const data = await response.json();
                        console.log('Protected data:', data);
                        setUser(data.user); // Ensure this corresponds to the returned user object
                    } else {
                        console.error('Failed to fetch protected data:', response.status);
                        navigate('/login'); 
                    }
                } catch (error) {
                    console.error('Error during fetch:', error);
                    navigate('/login'); 
                }
            };
            
            fetchProtectedData(); // Call the async function

        } else {
            console.log('No token found.');
        }
    }, [navigate]);    

    return ( 
        <>
            <h1>Welcome to the home page</h1>
            <h1>Hello {User.name}</h1>
        </>
    )
}