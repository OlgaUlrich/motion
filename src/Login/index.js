import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//actions
import { signInAction } from '../actions/login';

//images
import logo from '../assets/images/logo_white.png';
import apple from '../assets/svgs/apple.svg';
import google from '../assets/svgs/google.svg';
import congrats from '../assets/svgs/congrats.svg';
//my components
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
//styles for left wrapper
import { LeftWrapper, MainWrapper, MainSectionWrapper, AppLinksWrapper } from './styles/LeftWrapper';
import loginUser from '../reducers/login';

const RightWrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    background-color: white;
`
const ChangeFormType = styled.div`
      text-align: right;
      margin-top: 40px;
      margin-right: 40px;

      p {
        font-size: 1.4rem;
        display: inline-block;
        color: black;
      }

      button {
        font-size: 1rem;
        text-transform: uppercase;
        display: inline-block;
        color: black;
        border:solid 2px rgb(231, 228, 228);
        margin-left: 30px;
        letter-spacing: 1px;
        background-color: transparent;
        border-radius: 20px;
        height: 40px;
        width: 126px;
        cursor: pointer;
      }
`
const SignInWrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      flex-grow: 1;

      button{
        color: white;
        border: solid 1px rgba(252, 251, 251, 0.6);
        border-radius: 40px;
        height: 60px;
        width: 300px;
        display: block;
        margin-top: 40px;
        background: linear-gradient(115deg, #c568ff 0%, #6e91f6);
        cursor: pointer;
      }
      .goodMsg{
          color:gray;
          text-align: center;
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex-basis: 50%;

        .progress{
            display: inline-block;
            position: absolute;
            /* border:solid 2px hotpink; */
            bottom:20px;
            margin-bottom: 10px;
            /* height:20px; */

            i{
                display: inline-block;
                height:8px;
                width:8px;
                content:'';
                border-radius: 50%;
                opacity: 0.2;
                border: 2px solid #000000;
                margin:0 8px;
                &.done{
                    opacity: 1;
                    background-color: black;
                }
            }
           
        }
      }

      h2 {
        font-size: 4rem;
        font-weight: 400;
        color: black;
        margin-bottom: 4.5rem;
  }
  p{color:tomato}
`

function Login() {
    // form input fields
    const [formType, setFormType] = useState('Sign In');
    const [signUpAt, setSignUpAt] = useState(1);
    const [userName, setUsername] = useState('janice');
    const [password, setPassword] = useState('1234');
    const [email, setEmail] = useState('hello@janiceshaw.co.uk');
    // login errors
    const [error, setError] = useState('');
    // const [loggedIn, setLoggedIn] = useState(false);

    // for react router to change page 
    let navigate = useNavigate()
    const HomeLink = () => {
        navigate('/');
    }

    const dispatch = useDispatch()
    // hook version - componentDidMount 
    useEffect(() => {
        if (localStorage.getItem('token')) {
            HomeLink();
        }
    });

    //top right button changes from sign up to sign in
    const clickHandlerButton = (event) => {
        setError('');
        setFormType(event.target.innerHTML);
    }

    const handleSignIn = (event) => {
        event.preventDefault();
        console.log('click sign in big button');

        const url = "https://motion.propulsion-home.ch/backend/api/auth/token/";
        const method = "POST";
        const body = {
            email: email,
            password: password,
        };
        const headers = new Headers({
            "Content-type": "application/json",
        });
        const config = {
            method: method,
            body: JSON.stringify(body),
            headers: headers,
        };

        fetch(url, config)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // console.log("user data", data);
                console.log('data.user', data.user);
                if (data.user) {
                    localStorage.setItem("token", data.access);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    let result = { token: data.access, user: data.user }
                    console.log('result to send', result);
                    dispatch(signInAction(result));
                    HomeLink();
                } else {
                    // console.log('from server', data);
                    setError(data.detail ? data.detail : data.password);
                }
            })
            .catch((error) => {
                console.log("in error", error);
            });
    };


    const handleSignUp = (event) => {
        event.preventDefault();
        console.log('u clicked sign up continue');
        const url = 'https://motion.propulsion-home.ch/backend/api/auth/registration/';
        const method = 'POST';
        const body = {
            email: email,
        };
        const headers = new Headers({
            'Content-type': 'application/json',
        });
        const config = {
            method: method,
            body: JSON.stringify(body),
            headers: headers,
        };

        fetch(url, config)
            .then((response) => {
                console.log('responsej', response.status);
                if (response.status === 200) {
                    return response.status
                } else {
                    return response.json();
                }

            })
            .then((data) => {
                // Enter a valid email address.
                // This email is taken
                //
                console.log('user data', data);
                if (data === 200) {
                    setSignUpAt(2);
                    setError('please check your email for activation code')
                    //now need to go to congratulations!
                } else {
                    setError(data.email[0] + " please sign in")
                }
            })

    }

    const handleSignUpTwo = (event) => {
        event.preventDefault();
        console.log('you clicked me signup 2');
        setSignUpAt(3)
        setFormType('Verification')
    }


    const handleUserNameInput = (event) => {
        console.log(event.target.value);
        setUsername(event.target.value)
    }

    const handlePasswordInput = (event) => {
        console.log(event.target.value);
        setPassword(event.target.value)
    }

    const handleEmailInput = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value)
    }

    return (

        <MainWrapper>

            <LeftWrapper>
                <MainSectionWrapper>
                    <img src={logo} alt="Motion logo" />
                    <h1>Motion</h1>
                    <p>Connect with friends and the world around you with Motion.</p>
                    <AppLinksWrapper>

                        <Button img={apple} alt={'Apple store'} href={'https://www.apple.com/app-store/'} />

                        <Button img={google} alt={'Google play'} href={'https://play.google.com/store'} />

                    </AppLinksWrapper>
                </MainSectionWrapper>
                <Footer />
            </LeftWrapper>

            <RightWrapper>

                <ChangeFormType>
                    {formType === 'Sign In' &&
                        <>
                            <p>Don't have an account?</p>
                            <button onClick={clickHandlerButton}>Sign Up</button>
                        </>
                    }
                    {formType === 'Sign Up' ?
                        <>
                            <p>Already have an account?</p>
                            <button onClick={clickHandlerButton}>Sign In</button>
                        </>
                        : null
                    }

                </ChangeFormType>

                <SignInWrapper>
                    <div>
                        {signUpAt === 2 ?
                            <>
                                <h2>Congratulations!</h2>
                                <div><img src={congrats} alt="big tick" /></div>
                                <p className="goodMsg">We’ve sent a confirmation code to your email<br /> {email}</p>
                                <button onClick={handleSignUpTwo}>CONTINUE</button>
                            </>
                            :
                            <>
                                <h2> {formType}</h2>
                                <Form
                                    handleSignIn={handleSignIn}
                                    handleSignUp={handleSignUp}
                                    formType={formType}

                                    handleUserNameInput={handleUserNameInput}
                                    userName={userName}
                                    handlePasswordInput={handlePasswordInput}
                                    password={password}

                                    handleEmailInput={handleEmailInput}
                                    email={email}
                                    error={error}
                                />
                            </>
                        }
                        {formType === 'Sign Up' &&
                            <div className="progress">
                                <i className="done"></i>
                                {signUpAt === 2 ?
                                    <i className="done"></i>
                                    :
                                    <i></i>
                                }

                                <i></i>
                            </div>
                        }


                        {formType === 'Verification' &&
                            <div className="progress">
                                <i className="done"></i>
                                {signUpAt === 2 ?
                                    <i className="done"></i>
                                    :
                                    <i></i>
                                }

                                <i></i>
                            </div>
                        }

                    </div>

                </SignInWrapper>
            </RightWrapper>
        </MainWrapper >
    )
}

export default Login
