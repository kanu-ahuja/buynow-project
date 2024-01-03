import React, { useContext, useEffect } from 'react'
import userAuth from '../../Context/auth'
import { useNavigate } from "react-router-dom";

const Guard = ({ children }) => {
    const navigate = useNavigate();
    let {session,setSession} = useContext(userAuth)

    useEffect(() => {
        let localSession = localStorage.getItem("session") 
        
        // if user have session then browes 
        if(localSession){

            localSession = JSON.parse(localSession)
            if(localSession?.error){
                localStorage.removeItem("session")
                navigate("/login");
                return
            }

            setSession(localSession)
            return;
        }

        // if session null then redirect to login page
        if (session === null) {
            navigate("/login");
        }
    }, []);

    return (
        <React.Fragment>{children}</React.Fragment>
    )
}

export default Guard