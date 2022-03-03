import React, {useState} from "react";
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { setLike } from "./setLike";
import { DeletePost } from "./deletePost"
import {getObj} from "../../actions/index"
import SharePostModal from "./sharePost";

import {
   PostWrapper,
   Menu,
   Content,
   SocialMeasures, 
   PostInfo,
   AvatarInfo,
   CreatingInfo, 
   Name,
   Data,
   Image
} from "./style"

import {toDate} from "./timeConverter"

function PostCard(props) {
    const dispatch = useDispatch()

    const [shareToggled, setshareToggled] = useState(false)
    const [id, setid] = useState('')


const FetchFunction = (state) => {
       const url = `https://motion.propulsion-home.ch/backend/api/social/posts/${state}/`
        const method = 'GET'
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ2NDk5OTQ3LCJqdGkiOiI4Zjc1YTYzYWZjZjY0OTc0OWMyMDdlOGUxOTM3NTBjOCIsInVzZXJfaWQiOjExNDB9.SXCUtrEe5WYXqk0hLLuqk-TchzcLBmuQ9nMtpC-EYwA'
        const headers = new Headers({
            authorization: `Bearer ${token}`

        })

        fetch(url, {
            method,
            headers: headers,
        })
            .then((response) => {
               return response.json()
            })
            .then((data) => {
                
               return dispatch(getObj(data))
            })
         }       


    return (
       <>
    <PostWrapper>
      <PostInfo>
            <CreatingInfo>
                <AvatarInfo> {props.item.user.avatar===null?<img src="./assets/22.jpg" alt='' />:<img src={props.item.user.avatar} alt='' />}</AvatarInfo>
             <div style={{"display":"flex", "flexDirection":"column", "justifyContent":"center", "paddingLeft":"5px"}}>
             <Name>{props.item.user.first_name} {props.item.user.last_name}</Name>
             <Data>{toDate(props.item.created)}</Data>
             </div>
             </CreatingInfo>
      <Menu>      
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-v" className="svg-inline--fa fa-ellipsis-v fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path></svg>
      <ul>
        {/* <li key={props.item.key}><span> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" className="svg-inline--fa fa-pen fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg> edit</span></li> */}
        <li key={props.item.id}><span onClick={()=>{DeletePost(props.item.id)}}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" className="svg-inline--fa fa-trash fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>delete</span></li>
      </ul>
      </Menu>

     
 </PostInfo>


 {props.item.shared === null ?
 <>
 <div onClick={()=>{FetchFunction(props.item.id)}}>  
<Content> {props.item.content} </Content>
<Image> {props.item.images.map((img, i)=>{
   return(
      <img key={i} src={img.image} alt='' />
      // onClick={()=>setImage(img.image, props.item.id)}
   )
}
)}</Image>
</div>
</>
:
<>
<Content> {props.item.content} </Content>
<CreatingInfo style={{"justifyContent":"flex-start"}}>
                <AvatarInfo> {props.item.shared.user.avatar===null?<img src="./assets/22.jpg" alt='' />:<img src={props.item.shared.user.avatar} alt='' />}</AvatarInfo>
             <div style={{"display":"flex", "flexDirection":"column", "justifyContent":"center", "paddingLeft":"5px"}}>
             <Name>{props.item.shared.user.first_name} {props.item.shared.user.last_name}</Name>
             <Data>{toDate(props.item.shared.created)}</Data>
              <div onClick={()=>{FetchFunction(props.item.id)}}> 
             <Content> {props.item.shared.content} </Content>
            <Image> {props.item.shared.images.map((img, i)=>{
               return(
                  <img key={i} src={img.image} alt='' />
                  // onClick={()=>setImage(img.image, props.item.id)}
               )
            }
            )}</Image>
            </div>
             </div> 
</CreatingInfo>

</>
}



<SocialMeasures>
   <div style={{"display":"flex", "alignItems":"center", "justifyContent":"center"}}>
       { props.item.logged_in_user_liked === true ?
    <svg id="like"style={{"color": "#C468FF"}} onClick={()=>setLike(props.item.id, props.item.logged_in_user_liked)} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
    :
     <svg id="like" style={{"color": "rgba(0,0,0,0.29)"}} onClick={()=>setLike(props.item.id, props.item.logged_in_user_liked)} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
         }
    <label htmlFor="like"> like</label>
     {/* */}
    <svg id="share" onClick={() => {setshareToggled(true)
                                    setid(props.item.id)
   }}  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share" className="svg-inline--fa fa-share fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path></svg>
    <label htmlFor="share"> share</label>
   </div>

    <div>
    {props.item.amount_of_likes === 1? 
       `${props.item.amount_of_likes} like`:
             props.item.amount_of_likes > 0?
           `${props.item.amount_of_likes} likes`
           :
           ''
        }
        
    </div>
</SocialMeasures>

    </PostWrapper>

   <SharePostModal show ={shareToggled} id ={id} setToggle={setshareToggled}/> 
    </>
      );
}

export default PostCard;