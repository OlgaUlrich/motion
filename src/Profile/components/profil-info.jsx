import styled from 'styled-components';
import ProfilePic from '../../assets/svgs/jenniferAvatar.svg';
import { useState } from 'react';


const ProfilInfo = styled.span`
  display: flex;
  width: 80%;
  height: 350px;
  border: 1px solid lightgray;
  flex-direction: row;
  z-index: 1;
`;

const ProfilePicBox = styled.div`
  display: flex;
  padding: 5% 2%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  border: 1px solid lightgray;
  background-color: white;

  img {
    width: 55%;
  }
  h3 {
    margin: 5% 0 2% 0;
  }
  p {
    margin: 0 0 5% 0;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    padding: 5%;
    margin-top: 10%;
    width: 80%;
    background-color: #f1f1f1;
    border: 1px solid lightgray;
    cursor: pointer;
    &:hover {
      box-shadow: 2px 2px 2px 1px grey;
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const InfosInterestBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 1px solid lightgray;
`;

const StatusInfoBox = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  width: 50%;
  margin: 0;
  padding: 3%;
  border-right: 1px solid lightgray;

  p {
    margin: 0%;
  }
  background-color: white;
  .email {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    padding-right: 2%;
  }
  .phone {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;
  }
`;

const InterestsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  width: 50%;
  padding: 2%;
  flex: 1;
  justify-content: center;
  align-items: center;
  p {
    min-width: 20%;
  }
  div {
    display: flex;
    border: none;
    border-radius: 30px;
    width: 20%;
    height: 20%;
    margin: 1%;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;
    &:hover {
      box-shadow: 2px 2px 2px 1px grey;
    }
  }
`;

const ProfilStats = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  .stats {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 100%;
    width: 100%;
    &:hover {
      box-shadow: inset 0 -4px 0 0 #c468ff;
    }
  }

  h3 {
    margin: 0;
  }

  p {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
  }
`;

const ProfileContainer = () => {
  const AddEditButton = (props) => {
    return <button onClick={props.editProfile}>EDIT PROFILE</button>;
  };
  return (
    <ProfilInfo className='profil_info'>
      <ProfilePicBox className='profile_pic_box'>
        <img src={ProfilePic} alt='Profile-pic should appear' />
        <h3>Jennifer Smith</h3>
        <p>Zürich, Switzerland</p>
        <AddEditButton editProfile={this.triggerEditProfileState} />
      </ProfilePicBox>
      <InfoContainer className='info_container'>
        <InfosInterestBox className='infos_interests_box'>
          <StatusInfoBox className='status_info_box'>
            <b>About</b>
            <p>
              Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has
              tantas laudem iracundia et, ad per utamur ceteros apeiran
            </p>
            <div className='email'>
              <b>Email</b>
              <p>jennifersmith@gmail.com</p>
            </div>
            <div className='phone'>
              <b>Phone</b>
              <p>123-456-7890</p>
            </div>
          </StatusInfoBox>
          <InterestsBox className='interest_box'>
            <b>Things I like</b>
            <div>Cooking</div>
            <div>Travel</div>
            <div>Reading</div>
            <div>Swimming</div>
            <div>Running</div>
          </InterestsBox>
        </InfosInterestBox>
        <ProfilStats className='profil_stats'>
          <div className='stats'>
            <h3>34</h3>
            <p>Posts</p>
          </div>
          <div className='stats'>
            <h3>256</h3>
            <p>Likes</p>
          </div>
          <div className='stats'>
            <h3> 98 </h3>
            <p>Friends</p>
          </div>
          <div className='stats'>
            <h3> 129 </h3>
            <p>Followers</p>
          </div>
          <div className='stats'>
            <h3> 154 </h3>
            <p>Following</p>
          </div>
        </ProfilStats>
      </InfoContainer>
    </ProfilInfo>
  );
};

export default ProfileContainer;
