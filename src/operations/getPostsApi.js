export const getPosts = async(postsOnPage) => {
 try{ return await fetch(`https://687bab4eb4bc7cfbda86bede.mockapi.io/posts?page=1&limit=${postsOnPage}`)
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
      .map((comment) => `<li class="comment">${comment}</li>`)
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
