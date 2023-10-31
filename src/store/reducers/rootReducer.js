const initState = {
    users: [
        {id:1, name: 'Vu'},
        {id:2, name: 'Le'}
    ]
}
const rootReducer = (state=initState, action) => {
    return state;
}
export default rootReducer