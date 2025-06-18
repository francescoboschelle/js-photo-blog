const endpoint = "https://lanciweb.github.io/demo/api/pictures/";
const rowEl = document.querySelector(".row");
const overlayEl = document.querySelector(".overlay");

overlayEl
  .getElementsByClassName("overlay-btn")[0]
  .addEventListener("click", () => {
    overlayEl.classList.add("d-none");
  });

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((post, index) => {
      rowEl.innerHTML += `<div class="col-12 col-md-6 col-xl-4">
            <div class="card" id="post-${index}">
              <img src="./img/pin.svg" alt="Pin" class="pin" />
              <img src="${post.url}" alt="Post Image" class="mb-1" />
              <p>${post.title}</p>
            </div>
          </div>`;
    });
  });

setTimeout(() => {
  const postEls = document.querySelectorAll(".row>.col-12 .card");

  postEls.forEach((postEl) =>
    postEl.addEventListener("click", () => {
      const imgSrc = postEl.getElementsByTagName("img")[1].src;

      overlayEl.getElementsByTagName("img")[0].src = imgSrc;
      overlayEl.classList.remove("d-none");
    })
  );
}, 100);
