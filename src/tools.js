let Tool = (function () {
  let iconList = {
    home: "fas fa-home",
    compass: "far fa-compass",
    bell: "far fa-bell",
    envelope: "far fa-envelope-open",
    menu: "fas fa-bars",
  };

  function createDomElement(domType, userClass, userText) {
    let cont = document.createElement(domType);
    if (userClass) {
      let classArray = userClass.split(" ");
      for (let classItem of classArray) {
        cont.classList.add(classItem);
      }
    }
    if (userText) {
      cont.textContent = userText;
    }
    return cont;
  }

  function createIcon(iconName, classArray) {
    let iconClassList = iconList[iconName];
    let container = createDomElement("i", iconClassList);
    if (classArray) {
      for (let classItem of classArray) {
        container.classList.add(classItem);
      }
    }
    return container;
  }

  return {
    createDomElement: createDomElement,
    createIcon: createIcon,
  };
})();

export default Tool;
