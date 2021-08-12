let url = 'https://jsonplaceholder.typicode.com/users';

const getPostsOfUser = async (id) => {
    let post = await fetch(url + '/' + id + '/posts')
        .then(value => value.json());
    return post;
};

export {getPostsOfUser};