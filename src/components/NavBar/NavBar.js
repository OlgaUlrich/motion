import styled from 'styled-components';
import Logo from '../../assets/svgs/Logo.svg';
import PostsIcon from '../../assets/svgs/posts_logo.svg';
import FindFriendsIcon from '../../assets/svgs/icon-friends.svg';
import NotificationBell from '../../assets/svgs/notification_bell.svg';
import Menu from './menu-button';
import AvatarButton from './avatar_button';
import { Link } from 'react-router-dom';

const NavWrapper = styled.nav`
  display: flex;
  /* width: 100%; */
  justify-content: space-between;
  align-items: center;
  height: 80px;
  box-shadow: 0px 3px 10px 0px #dadbdb;
  /* margin-bottom: 20px; */
  padding: 0 40px;
  background-color: white;
  
  .logo-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10%;
    height: 100%;
  }
  .icon-box {
    display: flex;
    color: black;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-decoration: none;
    
    &:hover {
      box-shadow: inset 0 -4px 0 0 #c468ff;
    }
  }
  .left-container {
    display: flex;
    height: 100%;
    /* width: 30%; */
    justify-content: space-evenly;
    align-items: center;
    padding-right: 20px;
    flex-grow: 1;

    a {
      width:157px;
    }
    .icon {
      display: flex;
      justify-content: center;
      align-self: center;
      margin-right:20px
      /* margin-right: 20%; */
    }
    h3 {
      font-weight: 450;
      font-size: 22px;
      line-height: 25.78px;
    }
  }
  .right-container {
    display: flex;
    width: 60%;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    margin-right: 2%;
    .notifications {
      display: flex;
      background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
      border-radius: 50%;
      color: white;
      width: 21px;
      height:21px;
      padding: 5%;
      margin-bottom: 20%;
      justify-content: center;
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <div className='left-container'>
        <div className='logo-box'>
          <img className='logo' src={Logo} alt='purple-logo should appear' />
          <h3>Motion</h3>
        </div>
        <Link to={'/posts'} className='icon-box'>
          <img
            className='icon'
            src={PostsIcon}
            alt='posts-icon should appear'
          />
          <p>Posts</p>
        </Link>
        <Link to={'/find-friends'} className='icon-box'>
          <img
            className='icon'
            src={FindFriendsIcon}
            alt='find friends icon should appear'
          />
          <p>Find Friends </p>
        </Link>
      </div>
      <div className='right-container'>
        <div className='icon-box'>
          <img
            className='icon'
            src={NotificationBell}
            alt='notifications-bell should appear'
          />
          <p className='notifications'>3</p>
        </div>
        <AvatarButton />

        <Menu />
      </div>
    </NavWrapper>
  );
};
export default Nav;
