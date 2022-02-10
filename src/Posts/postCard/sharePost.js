import styled from "styled-components";
import { useState } from "react";

const ModalWrapper=styled.div`
 position: fixed;
  width: 20%;
  height: 30%; 
  top: 30%;
  left: 40%;
  background-color: #ffffff; 
  z-index: 999; 
  border: 1px #DCDCDC solid;
 border-radius: 5px;
 box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
 padding: 10px;
 display: flex;
 flex-direction: column;
 justify-content: space-between;




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
        height: 3rem;
          border: 1px #DCDCDC solid;
          margin-top: 10%;
    }

     input:focus {
    outline: none;
    }
  
`

function SharePostModal(props) {

    const [msg, setMsg] = useState('')


const sharePost = (arg) =>{
const formData = new FormData()
formData.append("shared", arg)
formData.append("content", msg)
  
    const url = "https://motion.propulsion-home.ch/backend/api/social/posts/"
    const method = 'POST' 
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ0NjY5NDI0LCJqdGkiOiI1ZDM2Y2RhMTZhZDg0Njg3YWYyZDM2YjYyOThiNTdhNCIsInVzZXJfaWQiOjExNDB9.zZTB51ukivDkJ8iKLVqZVQkzjd7tf1DmgSrwzeGuAt8'
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
props.show === true ?
        <ModalWrapper>
  <div style={{"display":"flex", "flexDirection":"column", "justifyContent":"spaceBetween", "alignContent":"center"}}>          
<div onClick={()=>props.setToggle(false)} style={{"color":"#DCDCDC "}}>X</div>
<div style={{"alignSelf":"center"}}>
Share with friends?
</div>



   <input  type='text'
           value={msg}
           placeholder='Comment your post...'
           onChange={e => setMsg(e.target.value)} />
  </div>

<div  style={{"display":"flex", "alignSelf":"center"}}>
<button onClick={()=>{sharePost(props.id)
                      props.setToggle(false)}}>Yes</button>
<button onClick={()=>props.setToggle(false)}>Cancel</button>
</div>
        </ModalWrapper>
:
''

      );
}

export default SharePostModal;