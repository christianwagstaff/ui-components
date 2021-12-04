import NavBar from "./dropDownMenu";

function dropDownFunction(e) {
  let parent = e.target.closest("li");
  let dropDownContent = parent.querySelector(".drop-menu");
  let currentActive = findCurrentActive();
  if (currentActive && currentActive !== dropDownContent) {
    removeActive(currentActive);
  }
  if (dropDownContent) {
    dropDownContent.classList.toggle("active");
  }
}

function findCurrentActive() {
  let active = document.querySelector(".active");
  if (active) {
    return active;
  }
}

function removeActive(active) {
  active.classList.remove("active");
}

let navTemplate = [
  {
    title: "Haily",
    link: "#",
    submenu: [
      { title: "Nav 1", link: "#" },
      { title: "Nav 2", link: "#" },
      {
        title: "Nav 3",
        link: "#",
        submenu: [
          { title: "Sub 1", link: "#" },
          { title: "Sub 2", link: "#" },
          { title: "Sub 3", link: "#" },
          { title: "Sub 4", link: "#" },
        ],
        class: ["sub-menu"],
      },
      { title: "Nav 4", link: "#" },
    ],
  },
  {
    title: "Christian",
    submenu: [
      { title: "Sub 1", link: "#" },
      { title: "Sub 2", link: "#" },
      { title: "Sub 3", link: "#" },
      { title: "Sub 4", link: "#" },
    ],
  },
  {
    title: "Sophie",
    link: "https://www.google.com",
    target: "_blank",
  },
  { title: "Kaden", link: "#", submenu: [{ title: "Test" }] },
];

const navItem = new NavBar();
navItem.useTemplate(navTemplate);
document.body.appendChild(navItem.renderNav());
const nav = document.querySelector("nav");
nav.addEventListener("click", dropDownFunction);
