let url = 'https://jsonplaceholder.typicode.com/comments';

const getComments = async () => {
    let comments = await fetch(url)
        .then(value => value.json());
    return comments;
};
const getComment = async (id) => {
    let comment = await fetch(url + '/' + id)
        .then(value => value.json());
    return comment;
};

export {getComments,getComment};