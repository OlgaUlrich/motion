import styled from "styled-components"
import { useState } from "react";


const FormWrapper = styled.div`
border: 1px #DCDCDC solid;
background-color: #ffffff;
border-radius: 5px;
box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
margin: 5%;
padding: 4%;

form{
    border: none;
    display: flex;
    flex-direction: column;
    width: 100%;

    input{
        border: none;
        width:80%;
        
    }

    input:focus {
    outline: none;
    }

    button{
        border-radius: 100%;
        width: 60px;
        height: 60px;
        background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
        border: none;
     
        svg{
            width: 20px;
            color: #ffffff;
        }
    }
}

`

const PublicPost =(props) => {

const [image, setImage] = useState(null)
const [msg, setMsg] = useState('')

  let handleSubmitPhoto = (event) => {
    event.preventDefault();
    console.log("submitting", image)

  }

  let handleImageUpload = (event) => {
    console.log("uploading", URL.createObjectURL(event.target.files[0]))
    setImage(event.target.files[0])
  }

const formData = new FormData()
formData.append("images", image)
formData.append("content", msg)
    

const createPost = ()=>{
    // e.preventDefault()
  
    const url = "https://motion.propulsion-home.ch/backend/api/social/posts/"
    const method = 'POST' 
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
    props.fetchAndDispatchPosts()
    setMsg('')
    setImage(null)
  
}


    return (
        <FormWrapper>
            <div>
                
            </div>
            <form onSubmit={handleSubmitPhoto}>
        <div style={{"display":"flex", "justifyContent":"space-between", "width":"100%"}}>
          <input  type='text'
           value={msg}
           placeholder='New post...'
           onChange={e => setMsg(e.target.value)} />

             <button onClick={() => createPost()}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" className="svg-inline--fa fa-paper-plane fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>
             
             </button>
        </div>     

            <label>
          <input type="file" onChange={handleImageUpload} multiple={false} style={{"display":"none"}} />
          <svg aria-hidden="true" style={{"width":"3em", "height":"3em", "color":"#a477fb"}} focusable="false" data-prefix="fas" data-icon="image" className="svg-inline--fa fa-image fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"></path></svg>
            </label>
   
            </form>
        </FormWrapper>
      );
}

export default PublicPost;
