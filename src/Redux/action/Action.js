import axios from 'axios'

const FETCH_USERS_REQUEST = ' FETCH_USERS_REQUEST '
const FETCH_USERS_SUCCESS = ' FETCH_USERS_SUCCESS '
const FETCH_USERS_FAILURE = ' FETCH_USERS_FAILURE '

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSeccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error 
    }
}

export const fetchUsers = () => {  //thunk- instead of returning object we return a function(does't have to pure)
    return (dispatch) => {     //it is allowed to have side Effects such as async api call, receives dispatch as argument    
    dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')                          
     .then(response => {
         const users = response.data
         dispatch(fetchUsersRequest(users))
     })
     .catch(error => {
        const errorMsg = error.message
        dispatch(fetchUsersFailure(errorMsg))
     })
    }
}

