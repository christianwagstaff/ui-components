export default class NavBar {
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
