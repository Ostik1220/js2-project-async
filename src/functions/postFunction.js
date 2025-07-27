import { getPosts } from "../operations/getPostsApi";
import { postPostApi } from "../operations/postPostApi";

export const form = () => { 
document.querySelector("#createPostForm").addEventListener("submit", async (e) => {
e.preventDefault()
    const name = e.target.elements.nameCollect.value;
    const discription = e.target.elements.discriptionCollect.value;
        const postBlock = {
      title: name,
      text: discription,
      comments: []
    }; 
    await postPostApi(postBlock);
    e.target.elements.discriptionCollect.value = ""
    e.target.elements.nameCollect.value = ""
        await getPosts(4)
    
})
}