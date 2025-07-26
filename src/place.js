import { deletePostApi } from "./operations/deletePostApi";
import { getPosts } from "./operations/getPostsApi";
import { postPostApi } from "./operations/postPostApi";
import { updatePostApi } from "./operations/updatePostApi";



document.querySelector("#load").addEventListener("click", async () => {
return await getPosts(); 
})

document.querySelector("#postsContainer").addEventListener("click", async (event) => {
  if (event.target.textContent === "Видалити") {
    const item = event.target.parentElement;
    console.log(item.id);
    await deletePostApi(item.id);
    await getPosts()
  }
console.log(event.target.parentElement)
});

const form = document.querySelector("#createPostForm")
form.addEventListener("submit", async (e) => {
e.preventDefault()
    const name = e.target.elements.nameCollect.value;
    const discription = e.target.elements.discriptionCollect.value;
        const postBlock = {
      title: name,
      text: discription,
    }; 
    await postPostApi(postBlock);
        await getPosts()
})

const openModal = () => {
document.querySelector(`.edit-backdrop`).style.visibility = "visible"
document.querySelector(`.edit-backdrop`).style.display = "flex"
}


const closeColectModal = () => {
    document.querySelector(".form-edit").addEventListener("submit", async (event) => {
event.preventDefault()
    const name = event.target.elements.nameEditCollect.value;
    const discription = event.target.elements.discriptionEditCollect.value;
        const postBlock = {
      title: name,
      text: discription,
    }; 
    document.querySelector(`.edit-backdrop`).style.visibility = "hidden"
    document.querySelector(`.edit-backdrop`).style.display = "none"
return postBlock
})
}



document.querySelector("#postsContainer").addEventListener("click", async (event) => {
  if (event.target.textContent === "Редагувати") {
    openModal()
        const item = event.target.parentElement
        console.log(event.target.parentElement)
        closeColectModal()
        await updatePostApi(item.id, postBlock)
        await getPosts()
}
});
