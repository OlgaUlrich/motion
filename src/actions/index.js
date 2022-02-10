export const getAllPosts = content => {
    return ({
        type: 'GET_POSTS',
        payload: content,
    })
}

export const getObj = content => {
    return ({
        type: 'GET_OBJ',
        payload: content,
    })
}

export const deletObj = content => {
    return ({
        type: 'DELETE_OBJ'
    })
}