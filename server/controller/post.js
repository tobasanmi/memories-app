import postMessage from '../models/postMessage.js'

 export const getPosts = async (req,res) => {
    try {
        const postMessages = await postMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages)
    } catch (error) {
        console.log(error);
    }
}

//createPost controller 
 export const createPosts = async (req,res) => {
    try {
        const newPost = new postMessage(req.body) 
        await newPost.save();
        res.status(200).json({message: "post created succesfully "})

    } catch (error) {
        console.log(error);
    }
}


