import Input from "../Input/Input";

const SignUp = ({ handleEmailInput, email, error }) => {
    return (
        <>
            <Input
                type="email"
                id="email"
                placeholder="Email"
                changeHandler={handleEmailInput}
                value={email}
            />
            <p>{error}</p>
        </>
    )
}

export default SignUp
