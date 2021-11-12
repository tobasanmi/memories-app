import express from 'express'
import {getPosts} from '../controller/post.js'
import {createPosts} from '../controller/post.js'

const router = express.Router()

router.get('/',getPosts)
router.post('/', createPosts)


export default router;