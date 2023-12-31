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

const loaderSection = document.getElementById("loader_section");

window.addEventListener("load", () => {
  heroTl.play();
  loaderSection.classList.add("hide");
  setTimeout(() => {
    loaderSection.style.display = "none";
  }, 400);
});

const heroTl = gsap.timeline({
  defaults: { duration: 0.4, ease: "linear" },
  paused: true,
});

heroTl
  .fromTo(
    ".nav_link_btn",
    {
      y: "-80px",
      duration: 800,
      opacity: 0,
    },
    { y: 0, stagger: 0.1, opacity: 1 }
  )
  .from(".hero_dis_small_header", { opacity: 0, y: 20 }, "-=0.2")
  .from(".hero_dis_header", { opacity: 0, y: 20 })
  .from(".hero_dis_text", { opacity: 0, y: 20 })
  .fromTo("#hero_btn", { opacity: 0 }, { opacity: 1 });
