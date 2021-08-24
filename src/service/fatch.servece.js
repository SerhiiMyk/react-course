const url = 'https://jsonplaceholder.typicode.com'

const getUsers = () => {
    return fetch(url+'/users')
        .then(response => response.json())
}
const getUser = (id) => {
    return fetch(url+'/users/' + id)
        .then(response => response.json())
}
const getPosts=()=>{
    return fetch(url+'/posts')
        .then(response=>response.json())
}

export {getUsers,getUser,getPosts}