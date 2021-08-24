const url = 'https://jsonplaceholder.typicode.com/users'

const getUsers = () => {
    return fetch(url)
        .then(response => response.json())
}
const getUser = (id) => {
    return fetch(url + '/' + id)
        .then(response => response.json())
}

export {getUsers,getUser}