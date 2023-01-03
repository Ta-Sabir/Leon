// Dark Mode
const IcontoggleDark = document.querySelector(".toggleDark");
IcontoggleDark.addEventListener("click", () => {
  body.classList.toggle("dark");

  localStorage.setItem("theme", document.body.classList.contains("dark"));
  console.log(darkLocalStorage);
});
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
// Scrool Reval Js Animation
ScrollReveal({
  distance: "50px",
  duration: 2500,
  delay: 100,
});

ScrollReveal().reveal(
  ".landing h1,.landing p,.features .featicon,.pragraph-special,.about p",
  {
    delay: 700,
    origin: "top",
  }
);
ScrollReveal().reveal(".features p,.contact .info", {
  delay: 700,
  origin: "bottom",
});
ScrollReveal().reveal(".features h3,.special-heading", {
  delay: 900,
  origin: "top",
});
ScrollReveal().reveal("", {
  delay: 900,
  origin: "top",
});
ScrollReveal().reveal(
  ".services .srv-1,.portfolio .card-3,.services .image,.about .image",
  {
    delay: 500,
    origin: "left",
    distance: "300px",
  }
);
ScrollReveal().reveal(".services .srv-2,.portfolio .card-2", {
  delay: 900,
  origin: "left",
  distance: "300px",
});
ScrollReveal().reveal(".services .srv-3,.portfolio .card-1", {
  delay: 1200,
  origin: "left",
  distance: "300px",
});
ScrollReveal().reveal(".services .srv-4", {
  delay: 1400,
  origin: "left",
  distance: "300px",
});
// ScrollReveal().reveal(".services .image", {
//     delay: 500,
//     origin: "right",
//     distance: "300px",
//   });
//  Show Menu Box With Onclick Icon Menu
const toggle = document.querySelector(".toggle");
const li = document.querySelectorAll(".nav li");
console.log(li);
const nav = document.querySelector(".menu-box .nav");
const iconclose = document.querySelector(".close");
console.log(iconclose);
console.log(nav);
toggle.addEventListener("click", () => {
  nav.classList.add("open");
});
iconclose.addEventListener("click", (eo) => {
  eo.target.parentElement.classList.remove("open");
});

// Show Icon Scrool With Scrool
const icononscrool = document.querySelector(".icononscrool");
window.onscroll = function () {
  if (scrollY >= 400) {
    icononscrool.classList.add("open");
  } else {
    icononscrool.classList.remove("open");
  }
};
icononscrool.onclick = function () {
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
