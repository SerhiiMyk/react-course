let url = 'https://jsonplaceholder.typicode.com/posts';

const getComments = async (id) => {
    let comments = await fetch(url + '/'+id +'/comments')
        .then(value => value.json());
    return comments;
};

export {getComments};