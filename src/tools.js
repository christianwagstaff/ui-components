let Tool = (function () {
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

  return {
    createDomElement: createDomElement,
  };
})();

export default Tool;
