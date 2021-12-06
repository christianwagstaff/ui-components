//import CSS files
import "./styles/imageSlider.css";

//Import JS files
import NavBar from "./dropDownMenu";
import ImageSlider from "./ImageSlider/imageSliderClass";

//import Images for Slider
import highway from "./images/highway.jpeg";
import autumn from "./images/autumn.jpeg";
import sunbeam from "./images/sunbeam.jpeg";
import treeRoad from "./images/tree-road.jpeg";
import trees from "./images/trees.jpeg";

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

//Images
let imageSrcList = [autumn, highway, sunbeam, treeRoad, trees];
let imageList = [];
for (let image of imageSrcList) {
  let container = new Image();
  container.src = image;
  imageList.push(container);
}

// Image Slider
let imgSlider = new ImageSlider();
imgSlider.addImageList(imageList);
document.body.appendChild(imgSlider.renderImageSlider());