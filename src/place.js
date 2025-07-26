import { getPosts } from "./operations/getPostsApi";

document.querySelector("#load").addEventListener("click", async () => {
return await getPosts(); 
})