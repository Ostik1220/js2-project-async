 export  const getSinglePost = async (id) => {
  const res = await fetch(`http://localhost:3000/posts/${id}`);
  return await res.json();
};