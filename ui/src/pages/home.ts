import React from "react";
import { useState, useEffect } from "react";



function Home() {

    const [users, setUsers] = useState([]);

    const loadUser = async () => {
        const response = await fetch("///url", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/jason'
            }
        });
        const user = await response.json();
        setUsers(user);
    }

    useEffect(() => {
        loadUser();
    }, []);


    return(
        {users} 
    );
};

export default Home;


