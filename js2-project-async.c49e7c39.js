const t=async t=>{try{return await fetch(`https://687bab4eb4bc7cfbda86bede.mockapi.io/posts?page=1&limit=${t}`).then(t=>t.json()).then(t=>{document.querySelector("#postsContainer").innerHTML=t.map(t=>{let e=(t.comments||[]).map(t=>`<li class="comment">${t}</li>`).join("");return`
<div class="post" id="${t.id}">
  <h2>${t.title}</h2>
  <p>${t.text}</p>
  <button class="editPostButton" data-id="${t.id}">\u{420}\u{435}\u{434}\u{430}\u{433}\u{443}\u{432}\u{430}\u{442}\u{438}</button>
  <button class="deletePostButton" data-id="${t.id}">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
  
  <div class="commentsContainer" data-id="${t.id}">
    <h3>\u{41A}\u{43E}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}\u{456}:</h3>
    <ul class="commentsList">
      ${e}
    </ul>
    <form class="createCommentForm">
      <input type="text" class="commentInput" placeholder="\u{41D}\u{43E}\u{432}\u{438}\u{439} \u{43A}\u{43E}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}" required>
      <button type="submit">\u{414}\u{43E}\u{434}\u{430}\u{442}\u{438} \u{43A}\u{43E}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}</button>
    </form>
  </div>
</div>
    `}).join("")})}catch(t){console.log(t)}},e=async t=>{let e=await fetch(`https://687bab4eb4bc7cfbda86bede.mockapi.io/posts/${t}`);return await e.json()},a=async(t,e)=>{let a={method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{return await fetch(`https://687bab4eb4bc7cfbda86bede.mockapi.io/posts/${t}`,a).then(t=>t.json())}catch(t){console.log(t)}};let n=4;const o=async()=>{document.querySelector(".load").addEventListener("click",async()=>{console.log(n+=4),await t(n)})},c=async t=>{try{return await fetch(`https://687bab4eb4bc7cfbda86bede.mockapi.io/posts/${t}`,{method:"DELETE"})}catch(t){console.log(t)}},i=async t=>{let e={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{return await fetch("https://687bab4eb4bc7cfbda86bede.mockapi.io/posts",e).then(t=>t.json())}catch(t){console.log(t)}};document.querySelector("#load").addEventListener("click",async()=>await t(4));document.querySelector("#postsContainer").addEventListener("click",async t=>{"Редагувати"===t.target.textContent&&(document.querySelector(".edit-backdrop").style.visibility="visible",document.querySelector(".edit-backdrop").style.display="flex",t.target.parentElement)}),document.querySelector(".form-edit").addEventListener("submit",async e=>{e.preventDefault();let n=e.target.elements.nameEditCollect.value,o=e.target.elements.discriptionEditCollect.value;document.querySelector(".edit-backdrop").style.visibility="hidden",document.querySelector(".edit-backdrop").style.display="none",await a(item.id,{title:n,text:o,comments:[]}),await t(4)}),document.querySelector("#postsContainer").addEventListener("click",async e=>{if("Видалити"===e.target.textContent){let a=e.target.parentElement;console.log(a.id),await c(a.id),await t(4)}console.log(e.target.parentElement)}),document.addEventListener("submit",async n=>{if(n.target.matches(".createCommentForm")){n.preventDefault();let o=n.target.elements[0].value;console.log(o);let c=n.target.parentElement.parentElement.id;console.log(c);let i=await e(c),s=[...i.comments,o];await a(c,{id:i.id,title:i.title,text:i.text,comments:s}),n.target.elements[0].value="",await t(4)}}),document.querySelector("#createPostForm").addEventListener("submit",async e=>{e.preventDefault();let a=e.target.elements.nameCollect.value,n=e.target.elements.discriptionCollect.value;await i({title:a,text:n,comments:[]}),e.target.elements.discriptionCollect.value="",e.target.elements.nameCollect.value="",await t(4)}),o();
//# sourceMappingURL=js2-project-async.c49e7c39.js.map
