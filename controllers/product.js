import { Post } from "../Models/Product.js";

export const addPost = async (req, res) => {
  const { title, description, imgUrl } = req.body;

  const post = await Post.create({
    title,
    description,
    imgUrl,
    user: req.user
  });
  res.status(200).json({ message: "Post uploded..! ", post })
}

export const getPost = async (req,res) => {
  const posts = await Post.find();

  if(posts.length==0) return res.json({message:'No post'});
   res.json({posts})
};

export const updatePost = async (req,res) => {
  console.log(req.body)

  const id = req.params.id;
  const {title,description,imgUrl}= req.body;


  let post = await Post.findById(id);
  if(!post)return res.json({message:"Invalid Id"});

  post.title=title,
  post.description=description,
  post.imgUrl=imgUrl

  await post.save();

  res.json({message:"Your post has been update..!",post})
}; 

export const deletePost = async (req,res) => {
  const id = req.params.id;

  const post = await Post.findById(id);

   if(!post)return res.json({message:"Invalid Id"});

   await post.deleteOne();
 
   res.json({message:"Your Post has been deleted"})

}; 
 
export const getPostById = async (req,res) => {
  const id = req.params.id;

  let post = await Post.findById(id)

  if(!post) return res.json({message:'Post not exit'})

  res.json({post})


};

export const removePost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findById(id);
    if (!post) return res.json({ message: "Post Not Found...!" });
    res.json({ message: "Post removed successfully...!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};