const endpoint = "https://lanciweb.github.io/demo/api/pictures/";
const rowEl = document.querySelector(".row");

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((post) => {
      rowEl.innerHTML += `<div class="col-12 col-md-6 col-xl-4">
            <div class="card">
              <img src="./img/pin.svg" alt="Pin" class="pin" />
              <img src="${post.url}" alt="Post Image" class="mb-1" />
              <p>${post.title}</p>
            </div>
          </div>`;
    });
  });
