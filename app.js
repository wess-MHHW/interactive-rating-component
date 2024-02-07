const options = document.querySelectorAll(".option");
const button = document.querySelector("button");

let rate = "";

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    rate = e.target.innerText;
    e.target.classList.add("selected");
    options.forEach((item) => {
      if (item.innerText !== rate) {
        item.classList.remove("selected");
      }
    });
  });
});

button.addEventListener("click", () => {
  if (rate !== "") {
    const rating = document.querySelector(".rating");
    const thanks = document.querySelector(".thanks");
    rating.style.display = "none";
    thanks.style.display = "block";
    const result = thanks.querySelector(".result");
    result.innerHTML = ` <p>You selected ${rate} out of 5</p>`;
  }
});
