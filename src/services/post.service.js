let url = 'https://jsonplaceholder.typicode.com/users';

const getPostsOfUser = async (id) => {
    return fetch(url + '/' + id + '/posts')
        .then(value => value.json());
};

export {getPostsOfUser};