const fetchData = () => {
  //   console.log("Fetching Data");
  const listEl = document.querySelector("ul");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      return res.json();
      //   console.log(res);
    })
    .then((data) => {
      data.forEach((post) => {
        listEl.insertAdjacentHTML("beforeend", `<h2>${post.title}</h2>`);
        listEl.insertAdjacentHTML("beforeend", `<p>${post.body}</p>`);
      });

      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

fetchData();
