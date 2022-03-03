import styled from "styled-components";
import { useSelector } from "react-redux";
import React, {useState, useEffect} from "react";
import { CreatingInfo, AvatarInfo, Name, Data, Content, Image, SocialMeasures, Menu } from "./postCard/style"
import { toDate } from "./postCard/timeConverter";
import { setLike } from "./postCard/setLike";
import { deletObj } from "../actions";



import { useDispatch } from "react-redux";
// import {closeImg} from "../../actions"

const ModalWrapper=styled.div`
 position: fixed;
 top: 0;
 left: 0;
  width: 100%;
  height: 100%; 
  background-color: rgba(0,0,0,0.5); 
  z-index: 999; 
  
`
const ContentWrapper=styled.div`
width: 40%;
height: 50%;
margin: auto;
margin-top: 5rem;
background-color: #ffffff;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
border-radius: 5px;
position: relative;

`
const ImageWrapper=styled.div`
width: 70%;
display: flex;
align-items: center;
justify-content: center;
img{
    width: 100%;
}
`

const InfoWrapper=styled.div`
width: 40%;
border-radius: 0 5px 5px 0;
display: flex;
flex-direction: column;
padding: 5px;
position: relative;
justify-content: space-between;
background-color: #f8f8f9;
/* align-items: flex-start; */
button{
       background: linear-gradient(132.96deg,#8f82fa 3.32%,#6E91F6 100%) ;
      color: #ffffff;
      border: none;
      cursor: pointer;
      width: 6em;
      height: 3em;
      border-radius: 5px;
      margin: 5%;
}

 input{
        border: none;
        width: 100%;
        
    }

    input:focus {
    outline: none;
    }

`



function Modal() {
const state = useSelector(state => state.object)
// const saved = localStorage.getItem(user.id);
const dispatch = useDispatch()

const [editToggle, setEditToggle] = useState(false)
// let b = state.content
// const [oldMsg, getOldMsg] = useState(b)
const [msg, setmsg] = useState("")


let changePost = ()=>{
    // e.preventDefault()
    const formData = new FormData()
    formData.append("content", msg)
  
    const url = `https://motion.propulsion-home.ch/backend/api/social/posts/${state.id}`
    const method = 'PATCH' 
   const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ2NDk5OTQ3LCJqdGkiOiI4Zjc1YTYzYWZjZjY0OTc0OWMyMDdlOGUxOTM3NTBjOCIsInVzZXJfaWQiOjExNDB9.SXCUtrEe5WYXqk0hLLuqk-TchzcLBmuQ9nMtpC-EYwA'
    const headers = new Headers({
       authorization: `Bearer ${token}`,
       //"Content-Type" : 'application/json'

    })
   
    fetch(url, {
        method,
        headers: headers,
        //body: JSON.stringify(content, images)
        body: formData
        
    })
        .then(()=>{
           console.log('new content added!')
          
         
        })
       

     



}
   
  

    return (
<>
{state !== 0 && state !== undefined && state !== null && isNaN(state)===true ?


<ModalWrapper style={{"display": "block"}}>
<ContentWrapper>
{state.images.length === 0 ? 
<ImageWrapper style={{"backgroundColor":"#f8f8f9"}}> 
        <Image  style={{"padding":"0", "margin":"0"}}>
        </Image>
</ImageWrapper>
:
<ImageWrapper> 
        <Image  style={{"padding":"0", "margin":"0"}}>
          
             {state.images.map((img, i)=>{
                return(
                    <div style={{"padding":"0", "margin":"0", "backgroundImage": `url('${img.image}')`, "backgroundPosition":"cover", "width":"300px",
                 "background-repeat":"no-repeat", "backgroundSize":"contain", "height":"200px"}}> .</div>
                )
           })}
        </Image>

</ImageWrapper>
}

<InfoWrapper style={{"padding":"3%"}}>
    <div onClick={()=>{dispatch(deletObj())
                       setEditToggle(false)}} style={{"position":"absolute", "top":"-30px", "right":"-30px", "cursor":"pointer", "fontSize":"20px"}}> X </div>
   <div>
       <div style={{"display":"flex", "justifyContent":"space-between"}}>
     <CreatingInfo>
         <div style={{"display":"flex", "width":"100%", "alignItems":"flex-start"}}>
              <AvatarInfo> {state.user.avatar===null ? <img src="./assets/22.jpg" alt='' />:<img src={state.user.avatar} alt='' />}</AvatarInfo> 
             <div style={{"display":"flex", "flexDirection":"column", "paddingLeft":"5px"}}>
             <Name>{state.user.first_name} {state.user.last_name}</Name>
             <Data>{toDate(state.created)}</Data>
             </div>
        </div>
             
     </CreatingInfo>
      <Menu>      
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-v" className="svg-inline--fa fa-ellipsis-v fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path></svg>
      <ul>
        <li key={state.key}><span  onClick={()=>{setEditToggle(true)}}> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" className="svg-inline--fa fa-pen fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg> edit</span></li>
      </ul>
      </Menu>
      </div>

 {/* || saved !== state.user.id */}
     {editToggle ===false ? 
      <Content style={{"alignSelf":"self-start", "paddingTop":"10%"}}> {state.content} </Content>
      :
    <>
      <Content style={{"alignSelf":"self-start", "paddingTop":"10%"}}>
           <input type="text"   value={msg} onChange={e => setmsg(e.target.value)} /></Content>
          <button onClick={()=> {changePost();
                                  setEditToggle(false)}}>Save</button>
   </> 
    }
     
    </div>

    
<SocialMeasures>
   <div style={{"display":"flex", "alignItems":"center", "justifyContent":"end"}}>
       { state.logged_in_user_liked === true ?
    <svg id="like"style={{"color": "#C468FF"}} onClick={()=>setLike(state.id, state.logged_in_user_liked)} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
    :
     <svg id="like" style={{"color": "rgba(0,0,0,0.29)"}} onClick={()=>setLike(state.id, state.logged_in_user_liked)} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
         }
    <label htmlFor="like"> like</label>
    <svg id="share" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share" className="svg-inline--fa fa-share fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path></svg>
    <label htmlFor="share"> share</label>
   </div>

    <div>
    {state.amount_of_likes === 1? 
       `${state.amount_of_likes} like`:
             state.amount_of_likes > 0?
           `${state.amount_of_likes} likes`
           :
           ''
        }
        
    </div>
 </SocialMeasures>  

 </InfoWrapper>

    </ContentWrapper>

</ModalWrapper>

:
''
    }
</>
    )


}

export default Modal;