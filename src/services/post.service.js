let url = 'https://jsonplaceholder.typicode.com/posts';

const getPosts = async () => {
    let posts = await fetch(url)
        .then(value => value.json());
    return posts;
};

const getPost = async (id) => {
    if (+id < 0) {
        throw new Error('id must gt 0');
    }
    let post = await fetch(url+'/'+id)
        .then(value => value.json());
    return post;
};

export {getPosts,getPost};