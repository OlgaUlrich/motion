import Avatar from '../../assets/svgs/jenniferAvatar.svg';
import ProfileIcon from '../../assets/svgs/icon-profile.svg';
import LogOutIcon from '../../assets/svgs/icon-logout.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  /* overflow: hidden; */
  /* width: 5%; */
  /* padding: 0 2%; */
`;

const StyledLi = styled.li`
  float: left;
  width:80px;
`;

const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  margin: 14px 16px;
  text-decoration: none;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  /* min-width: 160px; */
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  a {
    display: flex;
    text-decoration: none;
  }
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover {
    /* background-color: #f1f1f1; */
    /* border-radius: 50%; */
    cursor: pointer;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const SubA = styled.a`
  color: grey;
  padding: 12px 16px;
  width: 100%;
  /* border-radius: 20px; */
  text-decoration: none;
  display: block;
  text-align: left;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const AvatarButton = () => {

  //logout handler
  const handleClick = () => {
    console.log('you clicked logout');
    // Remove all keys from local storage
    localStorage.clear()
  };

  return (
    <StyledUl>
      <DropDownLi>
        <Dropbtn>
          <img src={Avatar} alt='here should be the MenuIcon' />
        </Dropbtn>
        <DropDownContent>

          <Link to={'/profile'}>
            <SubA >
              <img src={ProfileIcon} alt='here should be the profile-icon' />
              <p>Profile</p>
            </SubA>
          </Link>

          <Link to={'/login'}>
            <SubA onClick={handleClick}>
              <img src={LogOutIcon} alt='here should be the logout-icon' />
              <p>LogOut</p>
            </SubA>
          </Link>

        </DropDownContent>
      </DropDownLi>
    </StyledUl>
  );
};

export default AvatarButton;
