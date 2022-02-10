import Input from "../Input/Input";

const SignIn = ({ email, handleEmailInput, password, handlePasswordInput, error }) => {
    return (
        <>
            <Input
                type="input"
                id="user"
                placeholder="Email"
                value={email}
                changeHandler={handleEmailInput}
            />
            <Input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                changeHandler={handlePasswordInput}
            />
            <p>{error}</p>
        </>
    )
}

export default SignIn
