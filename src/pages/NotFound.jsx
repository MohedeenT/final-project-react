import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound(){
    const navigate = useNavigate() //navigate the user to desired page

    useEffect(()=>{
        setTimeout(()=>{
            navigate("/")
        },2000) //after 2 seconds, the user will be sent back to the home page
    },[])
    return(<h1>Page not found, redirecting you to Home </h1>)
}