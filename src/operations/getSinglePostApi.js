 export  const getSinglePost = async (id) => {
  const res = await fetch(`https://687bab4eb4bc7cfbda86bede.mockapi.io/posts/${id}`);
  return await res.json();
};