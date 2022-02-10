
import styled from 'styled-components';
import usernameImg from '../../../assets/svgs/avatar.svg';
import passswordImg from '../../../assets/svgs/password.svg';
import emailImg from '../../../assets/svgs/email.svg';
const InputWrapper = styled.input`
          width: 100%;
          height: 40px;
          padding-left: 40px;
          padding-bottom:5px;
          border: none;
          border-bottom: solid 2px rgb(230, 229, 229);
          margin-bottom: 30px;

          &:focus {
            outline: none;
          }
          &#user {
            background-image: url(${usernameImg});
            background-repeat: no-repeat;
            background-position-y: 8px
          }

          &#password {
            background-image: url(${passswordImg});
            background-repeat: no-repeat;
            background-position-y: 8px
          }

          &#email {
            background-image: url(${emailImg});
            background-repeat: no-repeat;
            background-position-y: 12px
          }

          ::placeholder {
            color: black;
          }

`

const Input = ({ type, id, placeholder, value, changeHandler }) => {
  return (
    <InputWrapper
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
    />

  )
}
export default Input

