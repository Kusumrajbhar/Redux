import axios from 'axios'

// const FETCH_USERS_REQUEST = ' FETCH_USERS_REQUEST '
// const FETCH_USERS_SUCCESS = ' FETCH_USERS_SUCCESS '
// const FETCH_USERS_FAILURE = ' FETCH_USERS_FAILURE '

const fetchUsersRequest = () => {
    return {
        type: 'FETCH_USERS_REQUEST'
    }
}

const fetchUsersSeccess = (users) => {
    return {
        type: 'FETCH_USERS_SUCCESS',
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: 'FETCH_USERS_FAILURE',
        payload: error 
    }
}

export const fetchUsers = () => {  //thunk provide- instead of returning action object, return a function(does't have to pure)
    return (dispatch) => {     //it is allowed to have side Effects such as async api call, receives dispatch as argument    
    dispatch(fetchUsersRequest)   //before api call dispatch to set loading true
        axios.get('https://jsonplaceholder.typicode.com/users') 
       //axios.get('https://jsonplaceholder.typicode.com/posts')                                      
     .then(response => {
         console.log('response', response)
         const users = response.data
         dispatch(fetchUsersSeccess (users))   //usersfromApi will passed as a payload in action
     })
     .catch(error => {
        const errorMsg = error.message
        dispatch(fetchUsersFailure(errorMsg))  //passing error
     })
    }
}

