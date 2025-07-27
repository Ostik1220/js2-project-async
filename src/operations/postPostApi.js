export const postPostApi = async (post) => {
  const options = {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  try {
    return await fetch("https://687bab4eb4bc7cfbda86bede.mockapi.io/posts", options).then((res) =>
      res.json()
    );
  } catch (error) {
    console.log(error);
  }
};
