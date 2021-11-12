import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPost = () => axios.get(url)
export const createPosts = (newPost) => axios.post(url, newPost);