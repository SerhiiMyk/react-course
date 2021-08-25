const reducer = (state, action) => {
    if (action === '+') {
        return state + 10
    } else if (action === '-') {
        return state - 2
    }
    return {...state};
}
export default reducer;