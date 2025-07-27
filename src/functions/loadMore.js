import { getPosts } from "../operations/getPostsApi";
import { checkPosts } from "./postsCheck";

export  let postsLoaded = 4
export const loadMore  = async () => {
document.querySelector(".load").addEventListener("click", async () => {
  postsLoaded += 4
  console.log(postsLoaded)
  await getPosts(postsLoaded)
await checkPosts()

})


}