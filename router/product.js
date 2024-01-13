import express from 'express';
import { addPost,getPost,getPostById,updatePost,deletePost,removePost} from '../controllers/product.js';

import { Authenticate } from '../middlewares/auth.js';



export const postRouter = express.Router();

postRouter.post('/addpost',Authenticate, addPost);


postRouter.get('/posts/:id',Authenticate,getPostById);  

postRouter.put('/posts/:id',Authenticate, updatePost)

postRouter.get('/posts',getPost);

postRouter.delete('/posts/:id',Authenticate, deletePost)

postRouter.delete('/removepost/:id', Authenticate,removePost);

 