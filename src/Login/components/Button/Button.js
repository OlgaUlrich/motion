import styled from 'styled-components';
const ButtonWrapper = styled.a`
    color: white;
    background-color: transparent;
    border: solid 1px rgba(252, 251, 251, 0.6);
    border-radius: 20px;
    height: 40px;
    width: 126px;
    cursor: pointer;
    display:inline-block;
    line-height: 40px;
`

const Button = (props) => {

    return (
        <ButtonWrapper href={props.href} target="_blank">
            <img src={props.img} alt={props.alt} />
        </ButtonWrapper>
    )

}
export default Button