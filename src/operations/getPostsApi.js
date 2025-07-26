export const getPosts = async() => {
 try{ return await fetch("http://localhost:3000/posts")
    .then((res) => res.json())
    .then((data) => {
      const postsBody = document.querySelector("#postsContainer");
      postsBody.innerHTML = renderPosts(data).join('');
    })
  } catch (error) {
    console.log(error);
  }
    
    
}

function renderPosts(posts) {
  return posts.map((object) => {
    const commentsHTML = (object.comments || [])
      .map((comment) => `<li>${comment}</li>`)
      .join("");

    return `
<div class="post" id="${object.id}">
  <h2>${object.title}</h2>
  <p>${object.text}</p>
  <button class="editPostButton" data-id="${object.id}">Редагувати</button>
  <button class="deletePostButton" data-id="${object.id}">Видалити</button>
  
  <div class="commentsContainer" data-id="${object.id}">
    <h3>Коментарі:</h3>
    <ul class="commentsList">
      ${commentsHTML}
    </ul>
    <form class="createCommentForm">
      <input type="text" class="commentInput" placeholder="Новий коментар" required>
      <button type="submit">Додати коментар</button>
    </form>
  </div>
</div>
    `;
  });
}
