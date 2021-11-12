export  const postReducer =   (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE_POST':
            console.log(posts);
        return [...posts, action.payload];
        default:
            return posts;
    }
}