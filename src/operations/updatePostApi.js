export const updatePostApi = async (id, post) => {
  const options = {
    method: "PATCH",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
    try {
    return await fetch(
      `http://localhost:3000/posts/${id}`,
      options
    ).then((response) => response.json());
  } catch (error) {
    console.log(error);
  }

};