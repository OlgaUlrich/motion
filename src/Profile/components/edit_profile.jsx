import styled from 'styled-components';
import ProfilePic from '../../assets/svgs/jenniferAvatar.svg';
import UploadIcon from '../../assets/svgs/upload.svg';
import TrashCanIcon from '../../assets/svgs/trashcan_icon.svg';

const EditContainer = styled.div`
  display: flex;
  width: 80%;
  height: 650px;
  border: 1px solid lightgray;
  flex-direction: row;
  z-index: 1;
`;

const EditPicBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditInfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const EditProfile = () => {
  return (
    <EditContainer>
      <EditPicBox className='edit-pic-box'>
        <img src={ProfilePic} alt='here should be the profil pic' />
        <button className='updateImageButton'>UPDATE IMAGE</button>
        <button className='uploadImageButton'>
          <img src={UploadIcon} alt='here should be the upload icon' />
          UPLOAD
        </button>
        <button className='removeImageButton'>
          <img src={TrashCanIcon} alt='here should be the trashcan icon' />
          REMOVE
        </button>
        <button className='deleteAccountButton'>DELETE ACCOUNT</button>
        <button className='saveChangesButton'>SAVE</button>
      </EditPicBox>
      <EditInfoBox className='edit-perosnalInfo-box'>
        <label for='firstName'>First name</label>
        <input className='firstName' type='text' />
        <label for='lastName'>Last name</label>
        <input className='lastName' type='text' />
        <label for='email'>Email</label>
        <input className='email' type='text' />
        <label for='username'>Username</label>
        <input className='username' type='text' />
        <label for='location'>Location</label>
        <input className='location' type='text' />
        <label for='phone'>Phone</label>
        <input className='phone' type='text' />
        <label for='About'>About</label>
        <input className='About' type='text' />
        <label for='password'>Password</label>
        <input className='password' type='password' />
        <b>Things i like</b>
        <input className='interests' type='text' />
      </EditInfoBox>
    </EditContainer>
  );
};

export default EditProfile;
