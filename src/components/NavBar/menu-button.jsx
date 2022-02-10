import MenuIcon from '../../assets/svgs/menu.svg';
import styled from 'styled-components';

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  /* width: 5%;
  padding-left: 2%; */
`;

const StyledLi = styled.li`
  float: left;
`;

const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  .menu-icon-container {
    border-radius: 50%;
  }
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  right: 0;
  border-radius: 0 0 5px 5px;
  background-color: #f9f9f9;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
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
  /* width: 100%; */
  text-decoration: none;
  display: block;
  text-align: left;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Menu = () => {
  const handleClick = (action) => {
    if (!action) return;

    // if (this.props.onClick) this.props.onClick(action);
  };

  return (
    <StyledUl>
      <DropDownLi>
        <Dropbtn onClick={() => handleClick('Dropdown')}>
          <div class='menu-icon-container'>
            <img src={MenuIcon} alt='here should be the MenuIcon' />
          </div>
        </Dropbtn>
        <DropDownContent>
          {' '}
          <SubA onClick={() => handleClick('Link1')}>Saved</SubA>
          <SubA onClick={() => handleClick('Link2')}>Settings</SubA>
          <SubA onClick={() => handleClick('Link3')}>Blocked</SubA>
          <SubA onClick={() => handleClick('Link4')}>Synchronise</SubA>
        </DropDownContent>
      </DropDownLi>
    </StyledUl>
  );
};

export default Menu;
