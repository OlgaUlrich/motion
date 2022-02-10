import styled from "styled-components"

export const PostWrapper = styled.div`
border: 1px #DCDCDC solid;
background-color: #ffffff;
border-radius: 5px;
display: flex;
flex-direction: column;
box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
margin: 5%;
padding: 4%;
`

export const Menu = styled.div`
display: flex;
justify-content: flex-start;
align-content: flex-start;

     svg{
       width: 8px;
       color: rgba(0, 0, 0, 0.29);
       position: relative;
   }

      ul{
         display: none;
         margin:0;
         padding: 0;
         width:100px;
         border-radius: 5px;
         position: absolute;
         margin-left: 8px;
         box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
         background-color: #ffffff;
               
      
         li{
            list-style: none;
            display: flex;
            justify-content: flex-start;
            align-content: center;
            align-self: center;
            height: 2em;
       
            svg{
               margin-left: 10px;
               margin-right: 5px;
               
            }
            
         span{
            align-self: center;
         }
            
         }
      }

      svg:hover + ul{
       display: block;
      }
      ul:hover{
         display: block;
      }

      ul li:hover{
         cursor: pointer;
         background-color: #eeeeee;
      }
`
export const Content = styled.div`
padding-top:10px;
padding-bottom: 16px;
`

export const SocialMeasures = styled.div`
display: flex;
justify-content: space-between;
align-content: center;

   svg{
       width: 20px;
       color: rgba(0, 0, 0, 0.29);
       position: relative;
       margin-right: 4px;
       
   }
   svg:hover{
      color: #C468FF;
   }

label{
   margin-right: 10px;
}

`
export const PostInfo = styled.div`
display: flex;
justify-content: space-between;
align-content: center;
`

export const AvatarInfo = styled.div`
  display: inline-block;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  text-align: center;
  position: relative;
  overflow: hidden;

     img{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
     }

`
export const CreatingInfo = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 padding-left: 2%;
`
export const Name = styled.div`
font-weight: 500;

`
export const Data = styled.div`
font-weight: 200;
font-size: 12px;
`
export const Image = styled.div`
max-width: 200px;
max-height: 300px;
  img{
     max-width: 180px;
  }
`

