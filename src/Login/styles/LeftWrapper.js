import styled from 'styled-components';
import bgImage from '../../assets/images/background_image.png';


export const LeftWrapper = styled.div`
    width: 40%;
    background-image: url(${bgImage}),
    linear-gradientrgba(0, 0, 0, 0.35);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
`

export const MainWrapper = styled.div`
    box-sizing:border-box;
    display: flex;
    height: 100vh;

  h2 {
    font-size: 4rem;
    font-weight: 400;
    color: black;
    margin-bottom: 4.5rem;
  }

  p {
    color: white;
    line-height: 2.5rem;
  }
`

export const MainSectionWrapper = styled.section`
      text-align: center;
      max-width: 270px;
      flex-basis: 50%;
      img {
        padding-bottom: 20px;
      }

      h1 {
        font-size: 3rem;
        color: white;
        margin-bottom: 25px;
        font-weight: 400;
      }
`
export const AppLinksWrapper = styled.section`
        margin-top: 40px;
        margin-bottom: 20px;

        a {
          line-height: 45px;
          border-width: 2px;
        }

        a:first-child {
          margin-right: 10px;
        }

        img {
          padding-bottom: 0;
        }
    
`