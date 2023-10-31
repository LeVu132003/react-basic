const initState = {
    users: [
        {id:1, name: 'Vu'},
        {id:2, name: 'Le'},
        {id:3, name: 'Hoang'},
        {id:4, name: 'Anh'}
    ],
    posts:[]
}
const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'DELETE_USER':
            console.log('>>> run into delete user', action)
            let users = state.users;
            users = users.filter (item => item.id !== action.payload.id)
            return {
                // ghi đè users trong state
                ...state, users
            };
        case 'CREATE_USER':
            let id = Math.floor(Math.random() *10000)
            let user = {
                id:id,
                name:`random ${id}`
            }
            return {
                    // ghi đè users trong state
                    ...state, users:[...state.users,user]
            };
        default:
            return state;
    }
    return state;
}
export default rootReducer