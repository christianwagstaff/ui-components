//import CSS files
import "./styles/imageSlider.css";
import "./styles/MobileNav.css";
import "./styles/dropDownMenu.css";

//Import JS files
import NavBar from "./dropDownMenu";
import ImageSlider from "./ImageSlider/imageSlider";
import MobileNav from "./mobileNav/mobileNav";

//import Images for Slider
import highway from "./images/highway.jpeg";
import autumn from "./images/autumn.jpeg";
import sunbeam from "./images/sunbeam.jpeg";
import treeRoad from "./images/tree-road.jpeg";
import trees from "./images/trees.jpeg";

//Nav Bar Template
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

const navBar = new NavBar();
navBar.useTemplate(navTemplate);
document.body.appendChild(navBar.renderNav());

//Images for Image Slider
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
imgSlider.startAutomatic();

//Nav Bar Template
let mobileNavTemplate = [
  {
    title: "Haily",
    icon: "home",
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
    icon: 'envelope'
  },
  {
    title: "Sophie",
    link: "https://www.google.com",
    target: "_blank",
    icon: "bell",
  },
  { title: "Kaden", link: "#", submenu: [{ title: "Test" }], icon: "menu" },
];

//Mobile Nav
let mobileNav = new MobileNav();
mobileNav.useTemplate(mobileNavTemplate);
document.body.appendChild(mobileNav.renderNav());
