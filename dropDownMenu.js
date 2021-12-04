class NavBar {
  constructor() {
    this.navList = [];
  }

  createOLForNav() {
    let list = this.navList;
    let ul = document.createElement("ul");
    for (let key of list) {
      let li = document.createElement("li");
      if (key["link"]) {
        let a = document.createElement("a");
        a.href = key["link"];
        a.textContent = key.title;
        if (key["target"]) {
          a.target = key["target"];
        }
        li.appendChild(a);
      } else {
        li.textContent = key.title;
      }
      if (key["submenu"]) {
        let innerList = this.createNestedListFromObject(key["submenu"]);
        innerList.classList.add("drop-menu");
        if (key["class"]) {
          let classes = key["class"];
          for (let userClass of classes) {
            innerList.classList.add(userClass);
          }
        }
        li.appendChild(innerList);
      }

      ul.appendChild(li);
    }
    return ul;
  }

  createNestedListFromObject(list) {
    let ul = document.createElement("ul");
    for (let key of list) {
      let li = document.createElement("li");
      if (key["link"]) {
        let a = document.createElement("a");
        a.href = key["link"];
        a.textContent = key.title;
        if (key["target"]) {
          a.target = key["target"];
        }
        li.appendChild(a);
      } else {
        li.textContent = key.title;
      }
      if (key["submenu"]) {
        let innerList = this.createNestedListFromObject(key["submenu"]);
        innerList.classList.add("drop-menu");
        if (key["class"]) {
          let classes = key["class"];
          for (let userClass of classes) {
            innerList.classList.add(userClass);
          }
        }
        li.appendChild(innerList);
      }

      ul.appendChild(li);
    }
    return ul;
  }

  renderNav() {
    let nav = document.createElement("nav");
    nav.appendChild(this.createOLForNav());
    return nav;
  }

  createNavItem(title, link) {
    let obj = { title, link };
    this.navList.push(obj);
  }

  useTemplate(template) {
    this.navList = template;
  }
}

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

function eventDelegationByInner(event, nodeType, innerClassName) {
  //attaching eventListeners to the main books div, checks if target is what we want
  if (event.target && event.target.nodeName === nodeType.toUpperCase()) {
    if (event.target.querySelector(innerClassName)) {
      return true;
    }
  }
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

const navItem = new NavBar;
navItem.useTemplate(navTemplate);
document.body.appendChild(navItem.renderNav())
const nav = document.querySelector("nav");
nav.addEventListener("click", dropDownFunction);