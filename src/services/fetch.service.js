const url = 'https://jsonplaceholder.typicode.com/users'

const getUsers = () => {
    return fetch(url)
        .then(value => value.json())
}

const getPosts = (userID) => {
    return fetch(url +'/'+ userID + '/posts')
        .then(value => value.json())
}

export {getUsers, getPosts}
