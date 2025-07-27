export const deletePostApi = async (id) => {
  try {
  return await fetch(`https://687bab4eb4bc7cfbda86bede.mockapi.io/posts/${id}`, {
    method: "DELETE",
  });
  } catch (error) {
console.log(error)
  }
};