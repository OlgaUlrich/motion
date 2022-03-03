import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getAllPosts } from "../actions";
import PostCard from "./postCard";
import styled from "styled-components"
import PublicPost from "./publickPost"
import NavBar from '../components/NavBar/NavBar';
import Modal from "./ModalPosts";
import { useNavigate } from "react-router-dom";



const PostContaineer = styled.div`
display: flex;
width: 100%;
justify-content: center;


`
const Left = styled.div`
width: 40%;


`
const Right = styled.div`
width: 40%;
`

function Posts() {
  // check if logged in //
    let navigate = useNavigate();
    const LoginLink = () => {
        navigate('/login');
    }
    useEffect(() => {
        // check to see if user is -- inside useEffect --
        if (!localStorage.getItem('token')) {
            LoginLink();
        }
    });

    const postsFromState = useSelector(state => state.posts)
    const LeftPosts = postsFromState.slice(0, 2)
    const RightPosts = postsFromState.slice(2, 5)

    //    const id = useSelector(state => state.modal)

    const dispatch = useDispatch()
    const fetchAndDispatchPosts = (dispatch,getAllPosts) => {
        const url = "https://motion.propulsion-home.ch/backend/api/social/posts/?limit=25"
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
                console.log('jan', data);
                dispatch(getAllPosts(data.results))

            })

    }


    useEffect(() => {   
        
           fetchAndDispatchPosts(dispatch,getAllPosts)

    })


    return (
        <>

            <NavBar />
            <Modal />
            <PostContaineer>


                <Left>
                    <PublicPost fetchAndDispatchPosts={()=>fetchAndDispatchPosts(dispatch,getAllPosts)} />

                    {LeftPosts.map((item, i) => {
                        return (
                            <PostCard key={i} item={item} />
                        )
                    })}

                </Left>


                <Right>

                    {RightPosts.map((item, i) => {
                        return (
                            <PostCard key={i} item={item} />
                        )
                    }
                    )}
                </Right>

            </PostContaineer>

        </>

    );
}

export default Posts;