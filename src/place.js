import { deletePostApi } from "./operations/deletePostApi";
import { getPosts } from "./operations/getPostsApi";
import { postPostApi } from "./operations/postPostApi";
import { updatePostApi } from "./operations/updatePostApi";
import { getSinglePost } from "./operations/getSinglePostApi";
let loaded = false;


document.querySelector("#load").addEventListener("click", async () => {
return await getPosts(); 
})

document.querySelector("#postsContainer").addEventListener("click", async (event) => {
  if (event.target.textContent === "Видалити") {
    const item = event.target.parentElement;
    console.log(item.id);
    await deletePostApi(item.id);
    await getPosts()
    loaded = true
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
      comments: []
    }; 
    await postPostApi(postBlock);
        await getPosts()
        loaded = true
})

const openModal = () => {
document.querySelector(`.edit-backdrop`).style.visibility = "visible"
document.querySelector(`.edit-backdrop`).style.display = "flex"
}


let item = "";

document.querySelector("#postsContainer").addEventListener("click", async (event) => {
  if (event.target.textContent === "Редагувати") {
    openModal()
        item = event.target.parentElement
}
});

const closeColectModal = () => {
    document.querySelector(".form-edit").addEventListener("submit", async (event) => {
event.preventDefault()
    const name = event.target.elements.nameEditCollect.value;
    const discription = event.target.elements.discriptionEditCollect.value;
        const postBlock = {
      title: name,
      text: discription,
      comments:[]
    }; 
    document.querySelector(`.edit-backdrop`).style.visibility = "hidden"
    document.querySelector(`.edit-backdrop`).style.display = "none"
        await updatePostApi(item.id, postBlock)
        await getPosts()
})
}

closeColectModal()




document.addEventListener("submit", async (e) => {
  if (e.target.matches(".createCommentForm")) {
    e.preventDefault();

    const commentText = e.target.elements[0].value;
    console.log(commentText);
    const id = e.target.parentElement.parentElement.id;
    console.log(id);
    
    const post = await getSinglePost(id);
    const updatedComments = [...post.comments, commentText];

    updatePostApi(id, {
      comments: updatedComments
    });
  }
});
