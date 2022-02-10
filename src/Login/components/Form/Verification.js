import Input from "../Input/Input";
import styled from 'styled-components';


const WrapperValForm = styled.div`
    width: 590px;
    input{
        padding: 0 0 5px 0;
        margin-right:30px
    }
    
    /* border:solid 2px green; */
    div{
        /* border:solid 1px yellow; */
        width:100%;
        display:flex;
        flex-direction: row;
        flex-wrap: ;
        margin: 0 10px;
        input{
            padding: 0 0 5px 0;
            margin-right:30px
        }
    }
`

const Verification = ({ code, handleCodeInput, email, handleEmailInput, password, handlePasswordInput, error }) => {
    return (
        <>
            <WrapperValForm>
                <Input
                    type="text"
                    value={code}
                    onChange={handleCodeInput}
                    id="vCode"
                    placeholder="Validation code" />
                <div>
                    <Input
                        type="email"
                        value={email}
                        onChange={handleEmailInput}
                        id="vEmail"
                        placeholder="Email" />

                    <Input type="text" id="vUsername" placeholder="Username" />
                </div>
                <div>
                    <Input type="text" id="vFirstname" placeholder="First name" />
                    <Input type="text" id="vLastname" placeholder="Last name" />
                </div>
                <div>
                    <Input
                        type="password"
                        value={password}
                        onChange={handlePasswordInput}
                        id="vPassword"
                        placeholder="Password" />

                    <Input type="password" id="vPasswordr" placeholder="password" />
                </div>
            </WrapperValForm>
        </>
    )
}

export default Verification
