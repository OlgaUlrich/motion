const initialState = []

const obj = (state = initialState, action)=>{
    switch (action.type){
        case 'GET_OBJ':
            let object = action.payload
            return object

        case 'DELETE_OBJ':
            let deleteObj = 0
       
            return deleteObj

        default:
            return state
    }
}


export default obj