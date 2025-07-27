export const checkPosts = async () => {
    let postsOnServ = ''
const postsOnScreen = document.querySelectorAll('.post').length
await fetch(`https://687bab4eb4bc7cfbda86bede.mockapi.io/posts`).then((res) => res.json())
    .then((data) => {
      postsOnServ = data.length
      console.log(postsOnServ)
      if(postsOnScreen === postsOnServ){

        document.querySelector(".load").style.visibility = "hidden"
        document.querySelector(".load").style.display = "none"
      } else {
                document.querySelector(".load").style.visibility = "visible"
        document.querySelector(".load").style.display = "block"
      }
    })
console.log(postsOnScreen)
}