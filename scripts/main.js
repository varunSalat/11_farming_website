// // !HERO SECTION SLIDE SHOW
// const heroBgs = document.querySelectorAll(".hero_img");
// let i = 0;
// const interval = setInterval(() => {
//   if (i == heroBgs.length) {
//     i = 0;
//   }
//   heroBgs.forEach((bg) => {
//     bg.classList.remove("active");
//   });
//   heroBgs[i].classList.add("active");
//   i++;
// }, 3000);

// console.log(heroBgs);

// !BURGER TOGGLE
const burgerBtn = document.querySelector(".burger_container"),
  navLinkContainer = document.querySelector(".nav_link_container");
burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  navLinkContainer.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (burgerBtn.classList.contains("active")) {
    burgerBtn.classList.remove("active");
    navLinkContainer.classList.remove("active");
  }
});

window.addEventListener("load", () => {
  gsap.fromTo(
    ".nav_link_btn",
    {
      y: "-80px",
      duration: 800,
      opacity: 0,
    },
    { y: 0, stagger: 0.1, opacity: 1 }
  );
  heroTl.play();
});

const heroTl = gsap.timeline({
  defaults: { duration: 0.4, ease: "linear" },
  paused: true,
});

heroTl
  .from(".hero_dis_small_header", { opacity: 0, y: 20 })
  .from(".hero_dis_header", { opacity: 0, y: 20 })
  .from(".hero_dis_text", { opacity: 0, y: 20 })
  .fromTo("#hero_btn", { opacity: 0 }, { opacity: 1 });
