const u=async()=>{try{return await fetch("http://localhost:3000/posts").then(u=>u.json()).then(u=>{document.querySelector("#postsContainer").innerHTML=u.map(u=>`
<div class="post" id="${u.id}">
<h2>${u.title}</h2>
<p>${u.text}</p>
<button class="editPostButton" data-id="">\u{420}\u{435}\u{434}\u{430}\u{433}\u{443}\u{432}\u{430}\u{442}\u{438}</button>
<button class="deletePostButton" data-id="">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
<div class="commentsContainer" data-id="">
<h3>\u{41A}\u{43E}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}\u{456}:</h3>
<ul>
<li></li>
</ul>
<form class="createCommentForm">
<input type="text" class="commentInput" placeholder="\u{41D}\u{43E}\u{432}\u{438}\u{439} \u{43A}\u{43E}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}" required>
<button type="submit">\u{414}\u{43E}\u{434}\u{430}\u{442}\u{438} \u{43A}\u{43E}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}</button>
</form>
</div>
</div>
    `).join("")})}catch(u){console.log(u)}};document.querySelector("#load").addEventListener("click",async()=>await u());
//# sourceMappingURL=js2-project-async.223f49f0.js.map
