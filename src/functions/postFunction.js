import { getPosts } from "../operations/getPostsApi";
import { postPostApi } from "../operations/postPostApi";

export const form = document.querySelector("#createPostForm")
form.addEventListener("submit", async (e) => {
e.preventDefault()
    const name = e.target.elements.nameCollect.value;
    const discription = e.target.elements.discriptionCollect.value;
        const postBlock = {
      title: name,
      text: discription,
      comments: []
    }; 
    await postPostApi(postBlock);
        await getPosts(4)
    
})