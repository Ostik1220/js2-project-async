export const postPostApi = async (post) => {
  const options = {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  try {
    return await fetch("http://localhost:3000/posts", options).then((res) =>
      res.json()
    );
  } catch (error) {
    console.log(error);
  }
};
