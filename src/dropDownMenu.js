import { eventDelegationCheck } from "./eventDelegation.js";
import Tool from "./tools.js";

export default class NavBar {
  constructor() {
    this.navList = [];
  }

  createOLForNav(optionalList) {
    let list = optionalList || this.navList;
    if (list === []) return;
    let ul = document.createElement("ul");
    for (let key of list) {
      let li = document.createElement("li");
      if (key.icon) {
        console.log(key.icon);
        li.appendChild(Tool.createIcon(key.icon));
        li.classList.add("iconListItem");
      }
      if (key.link) {
        let a = document.createElement("a");
        a.href = key.link;
        if (key.target) {
          a.target = key.target;
        }
        a.textContent = key.title;
        a.classList.add("menuTitle");
        li.appendChild(a);
      } else {
        li.appendChild(Tool.createDomElement("div", "menuTitle", key.title));
      }
      if (key.submenu) {
        let innerList = this.createNestedListFromObject(key.submenu);
        innerList.classList.add("drop-menu");
        if (key.class) {
          let classes = key.class;
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
      if (key.icon) {
        console.log(key.icon);
        li.appendChild(Tool.createIcon(key.icon));
        li.classList.add("iconListItem");
      }
      if (key.link) {
        let a = document.createElement("a");
        a.href = key.link;
        a.textContent = key.title;
        if (key.target) {
          a.target = key.target;
        }
        li.appendChild(a);
      } else {
        li.textContent = key.title;
      }
      if (key.submenu) {
        let innerList = this.createNestedListFromObject(key.submenu);
        innerList.classList.add("drop-menu");
        if (key.class) {
          let classes = key.class;
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
    nav.addEventListener("click", navControls.dropDownFunction);
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

let navControls = (function () {
  function dropDownFunction(e) {
    if (
      eventDelegationCheck(e.target.firstChild.nextSibling, "ul", "drop-menu")
    ) {
      let parent = e.target.closest("li");
      let nav = e.target.closest("nav");
      let dropDownContent = parent.querySelector(".drop-menu");
      let currentActive = findCurrentActive(nav);
      if (currentActive && currentActive !== dropDownContent) {
        removeActive(currentActive);
      }
      if (dropDownContent) {
        dropDownContent.classList.toggle("active");
      }
    }
  }
  function findCurrentActive(nav) {
    let active = nav.querySelector(".active");
    if (active) {
      return active;
    }
  }

  function removeActive(active) {
    active.classList.remove("active");
  }
  return {
    dropDownFunction: dropDownFunction,
  };
})();
