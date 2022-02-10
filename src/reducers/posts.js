const initialState = []

const allPosts = (state = initialState, action)=>{
    switch (action.type){
        case 'GET_POSTS':
            let allPosts = action.payload
            return allPosts

        default:
            return state
    }
}


export default allPosts