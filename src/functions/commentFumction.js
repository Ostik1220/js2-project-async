import { getSinglePost } from "../operations/getSinglePostApi";
import { updatePostApi } from "../operations/updatePostApi";
import { getPosts } from "../operations/getPostsApi";


export const commentFunction = () => {
 document.addEventListener("submit", async (e) => {
  if (e.target.matches(".createCommentForm")) {
    e.preventDefault();

    const commentText = e.target.elements[0].value;
    console.log(commentText);
    const id = e.target.parentElement.parentElement.id;
    console.log(id);
    
    const post = await getSinglePost(id);
    const updatedComments = [...post.comments, commentText];

    await updatePostApi(id, {
        id: post.id,
        title: post.title,
        text: post.text,
      comments: updatedComments
    });
    e.target.elements[0].value = "";
    await getPosts(4)
  }
  
});
}