import { getPosts } from "../operations/getPostsApi";
import { deletePostApi } from "../operations/deletePostApi";
import { postsLoaded } from "./loadMore";
import { checkPosts } from "./postsCheck";

export const delet = () => {
    document.querySelector("#postsContainer").addEventListener("click", async (event) => {
  if (event.target.textContent === "Видалити") {
    const item = event.target.parentElement;
    console.log(item.id);
    await deletePostApi(item.id);
    await getPosts(postsLoaded)
    await checkPosts()

  }
console.log(event.target.parentElement)
});
}