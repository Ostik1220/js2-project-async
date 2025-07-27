import { getPosts } from "./operations/getPostsApi";
import { commentFunction } from "./functions/commentFumction";
import { openModal } from "./functions/openModal";
import { loadMore } from "./functions/loadMore";
import { delet } from "./functions/deleteFunction";
import { closeColectModal } from "./functions/updateFunction";
import { form } from "./functions/postFunction";



document.querySelector("#load").addEventListener("click", async () => {
return await getPosts(4); 
})



let item = "";

document.querySelector("#postsContainer").addEventListener("click", async (event) => {
  if (event.target.textContent === "Редагувати") {
    openModal()
        item = event.target.parentElement
}
});



closeColectModal()

delet()

commentFunction()

form()

loadMore()

