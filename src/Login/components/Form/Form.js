import styled from 'styled-components';
import SignIn from './SignIn'
import SignUp from './SignUp'
import Verification from './Verification';

const FormWrapper = styled.form`


button {
    color: white;
    border: solid 1px rgba(252, 251, 251, 0.6);
    border-radius: 40px;
    height: 60px;
    width: 300px;
    display: block;
    margin-top: 40px;
    background: linear-gradient(115deg, #c568ff 0%, #6e91f6);
    cursor: pointer;
};
p.error{color:tomato}
`

const Form = ({
    handleSignIn,
    formType,
    userName,
    handleUserNameInput,
    password,
    handlePasswordInput,
    email,
    handleEmailInput,
    error,
    handleSignUp
}) => {

    return (

        <FormWrapper>
            {formType === 'Sign In'
                && <>
                    <SignIn
                        email={email}
                        handleEmailInput={handleEmailInput}
                        password={password}
                        handlePasswordInput={handlePasswordInput}
                        error={error}
                    />
                    <button onClick={handleSignIn}>SIGN IN</button>
                </>

            }
            {formType === 'Sign Up'
                && <>
                    <SignUp
                        handleEmailInput={handleEmailInput}
                        email={email}
                        error={error}
                    />
                    <button onClick={handleSignUp}>CONTINUE</button>
                </>
            }
            {formType === 'Verification'
                && <>
                    <Verification />
                    <button>COMPLETE</button>
                </>
            }

        </FormWrapper>

    )
}
export default Form
