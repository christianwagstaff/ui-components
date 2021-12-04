// function createNestedList(list, how) {
//   let lstType;
//   let itemType;
//   switch (how) {
//     case "ordered":
//       lstType = "ol";
//       itemType = "li";
//       break;
//     case "unordered":
//       lstType = "ul";
//       itemType = "li";
//       break;
//     default:
//       lstType = "ul";
//       itemType = "li";
//   }
//   let menu = document.createElement(lstType);
//   for (let item of list) {
//     if (typeof item === "string") {
//       let lstItem = document.createElement(itemType);
//       lstItem.textContent = item;
//       menu.appendChild(lstItem);
//     } else if (typeof item === "object") {
//       menu.appendChild(createNestedList(item, how));
//     }
//   }
//   return menu;
// }

// function createNested(template) {
//   let nav = document.createElement("nav");
//   nav.classList.add("navBar");
//   nav.appendChild(createNestedList(template));
//   return nav;
// }

// let sampleTemplate = [
//   "Nav 1",
//   ["Drop 1", "Drop 2"],
//   "Nav 2",
//   "Nav 3",
//   ["Drop 1", "Drop 2", ["Inner 1", "Inner 2"], "Drop 3"],
// ];

let otherSample = [
  ["Nav 1", ["Drop 1", "Drop 2"], "menu-1"],
  ["Nav 2"],
  ["Nav 3", ["Drop 1", "Drop 2", "Drop 3"], "menu-3"],
  ["Nav 4", ["Drop 4-1", ["Drop 4-2", ["Drop 4-1", "Drop 4-2"]]], "menu-4"],
];

// (function createNav(template) {
//   let nav = document.createElement("nav");
//   nav.appendChild(createNestedList(template));
//   document.body.appendChild(nav);
// })(otherSample);

function createNestedList(list, classItem) {
  let ul = document.createElement("ul");
  if (classItem) {
    for (let item of classItem) {
      ul.classList.add(item);
    }
  }
  for (let item of list) {
    let classes = ["drop-menu"];
    let li = document.createElement("li");
    if (typeof item === "string") {
      li.textContent = item;
    } else {
      li.textContent = item[0];
      if (item[2]) {
        classes.push(item[2]);
      }
      if (item.length > 1) {
        let innerMenu = item[1];
        li.appendChild(createNestedList(innerMenu, classes));
      }
    }
    ul.appendChild(li);
  }
  return ul;
}

function dropDownFunction(e) {
  if (eventDelegationByInner(e, "li", ".drop-menu")) {
  }
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

(function createNav(template) {
  let nav = document.createElement("nav");
  nav.appendChild(createNestedListFromObject(template));
  document.body.appendChild(nav);
})(navTemplate);

function createNestedListFromObject(list) {
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
      let innerList = createNestedListFromObject(key["submenu"]);
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

let nav = document.querySelector("nav");
nav.addEventListener("click", dropDownFunction);

class NavBar {
  constructor() {
    this.navList = [];
  }

  createOLForNav(list) {
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
        let innerList = createNestedListFromObject(key["submenu"]);
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

  createNavItem(title) {
    return { title };
  }
}
