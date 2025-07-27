import { getPosts } from "../operations/getPostsApi";
import { deletePostApi } from "../operations/deletePostApi";

export const delet = () => {
    document.querySelector("#postsContainer").addEventListener("click", async (event) => {
  if (event.target.textContent === "Видалити") {
    const item = event.target.parentElement;
    console.log(item.id);
    await deletePostApi(item.id);
    await getPosts(4)

  }
console.log(event.target.parentElement)
});
}