const t=async t=>{try{return await fetch(`http://localhost:3000/posts/${t}`,{method:"DELETE"})}catch(t){console.log(t)}},e=async()=>{try{return await fetch("http://localhost:3000/posts").then(t=>t.json()).then(t=>{document.querySelector("#postsContainer").innerHTML=t.map(t=>`
<div class="post" id="${t.id}">
<h2>${t.title}</h2>
<p>${t.text}</p>
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
    `).join("")})}catch(t){console.log(t)}},o=async t=>{let e={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{return await fetch("http://localhost:3000/posts",e).then(t=>t.json())}catch(t){console.log(t)}},n=async(t,e)=>{let o={method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{return await fetch(`http://localhost:3000/posts/${t}`,o).then(t=>t.json())}catch(t){console.log(t)}};document.querySelector("#load").addEventListener("click",async()=>await e()),document.querySelector("#postsContainer").addEventListener("click",async o=>{if("Видалити"===o.target.textContent){let n=o.target.parentElement;console.log(n.id),await t(n.id),await e()}console.log(o.target.parentElement)}),document.querySelector("#createPostForm").addEventListener("submit",async t=>{t.preventDefault();let n=t.target.elements.nameCollect.value,a=t.target.elements.discriptionCollect.value;await o({title:n,text:a}),await e()}),document.querySelector("#postsContainer").addEventListener("click",async t=>{if("Редагувати"===t.target.textContent){document.querySelector(".edit-backdrop").style.visibility="visible",document.querySelector(".edit-backdrop").style.display="flex";let o=t.target.parentElement;console.log(t.target.parentElement),document.querySelector(".form-edit").addEventListener("submit",async t=>{t.preventDefault();let e=t.target.elements.nameEditCollect.value,o=t.target.elements.discriptionEditCollect.value;return document.querySelector(".edit-backdrop").style.visibility="hidden",document.querySelector(".edit-backdrop").style.display="none",{title:e,text:o}}),await n(o.id,postBlock),await e()}});
//# sourceMappingURL=js2-project-async.ce76ca3e.js.map
