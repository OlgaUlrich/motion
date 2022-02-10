import React from 'react';

import Nav from '../components/NavBar/NavBar';


import ProfileContainer from './components/profil-info';

import styled from 'styled-components';
import BackgroundImage from '../assets/images/feedPics/backgroundImage.png';
// import EditProfile from './components/edit_profile';

// const ProfilePageContent = styled.main`
//   display: flex;
//   justify-content: center;
//   margin-top: -220px;
// `;

// const Background = styled.div`
//   background-image: url(${BackgroundImage});
//   background-repeat: no-repeat;
//   background-size: cover;
//   height: 400px;
// `;

function Profile(props){
return(
  <div>
  <div className='left'>
    <img></img>
    <div className='Name'></div>
    <button>Edit profile</button>
  </div>
  <div className='right'></div>

  </div>
)
}

export default Profile;
