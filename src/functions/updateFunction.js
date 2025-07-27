import { updatePostApi } from "../operations/updatePostApi";
import { getPosts } from "../operations/getPostsApi";
import { postsLoaded } from "./loadMore";
import { item } from "../place";
import { getSinglePost } from "../operations/getSinglePostApi";

export const closeColectModal = () => {
    document.querySelector(".form-edit").addEventListener("submit", async (event) => {
event.preventDefault()
const post = await getSinglePost(item.id);
console.log(item.id)
    const name = event.target.elements.nameEditCollect.value;
    const discription = event.target.elements.discriptionEditCollect.value;
        const postBlock = {
      title: name,
      text: discription,
      comments:[post.comments]
    }; 
    document.querySelector(`.edit-backdrop`).style.visibility = "hidden"
    document.querySelector(`.edit-backdrop`).style.display = "none"
        await updatePostApi(item.id, postBlock)
        await getPosts(postsLoaded)
})
}