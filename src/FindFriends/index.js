import NavBar from '../components/NavBar/NavBar'
import styled from "styled-components"
import binoculars from '../assets/images/binoculars.png'
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const WrapperFriends = styled.div`
text-align: center;
    h1{margin-top:40px; font-size:30px}
`

const FindFriends = () => {

    // check if logged in //
    let navigate = useNavigate();
    const LoginLink = () => {
        navigate('/login');
    }
    useEffect(() => {
        // check to see if user is -- inside useEffect --
        if (!localStorage.getItem('token')) {
            LoginLink();
        }
    });

    return (
        <WrapperFriends>
            <NavBar />
            <h1>Find Friends page</h1>
            <p>Coming soon...</p>
            <img src={binoculars} alt="binoculars" />
        </WrapperFriends>
    )
}

export default FindFriends