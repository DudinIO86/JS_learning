const CLIEN_ID = "WZAJsMq2RtVes8yAZbQIFsl3T3vQQnJHY35lfNnJgTY";
let state = [];
let curCapture;

const capEl = document.querySelector(".capture");

const getPhoto = async () => {
  try {
    const url = `https://api.unsplash.com/photos/random/?client_id=${CLIEN_ID}&count=10`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if (response.ok && data.length) {
      state = data;
      curCapture = data[0].id;
      setPhoto();
    }
  } catch (err) {
    console.log(err);
  }
};

const render = () => {
  return state
    .map(({ urls: { regular }, user: { name }, id }) => {
      const isActive = curCapture === id ? "active" : "";
      return `<div class="capt ${isActive}" data-id="${id}" style="background-image: url(${regular})">
    <div class="capt-text">
        <span>photo by </span>${name}
    </div>
</div>`;
    })
    .join("");
};

const handleClick = ({ currentTarget }) => {
  const cap = document.querySelectorAll(".capt");
  const { id } = currentTarget.dataset;
  cap.forEach((item) => item.classList.remove("active"));
  currentTarget.classList.add("active");
  curCapture = id;
};

const setPhoto = () => {
  capEl.innerHTML = render();
  const capture = document.querySelectorAll(".capt");
  capture.forEach((item) => {
    item.addEventListener('click', handleClick);
  });
};

getPhoto();
