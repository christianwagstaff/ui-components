import Tool from "../tools";

export default class ImageSlider {
  constructor() {
    this.imageList = [];
  }

  renderImageSlider() {
    let div = Tool.createDomElement("div", "imageSliderContainer");
    div.appendChild(this.createImageList());
    div.appendChild(this.createSliderButtons());
    return div;
  }

  createImageList() {
    let div = Tool.createDomElement("div", "imageFrameContainer");
    for (let image of this.imageList) {
      div.appendChild(this.createImageFrame(image));
    }
    div.firstChild.classList.add("active");
    return div;
  }

  createImageFrame(image) {
    let div = Tool.createDomElement("div", "imageFrame");
    div.appendChild(image);
    return div;
  }

  createSliderButtons() {
    let div = Tool.createDomElement("div", "directionContainer");
    let leftArrow = Tool.createDomElement(
      "div",
      "leftArrow sliderDirection",
      "<"
    );
    div.appendChild(leftArrow);
    let roundButtonContainer = Tool.createDomElement(
      "div",
      "roundButtonContainer"
    );
    for (let i = 0; i < this.imageList.length; i++) {
      let button = Tool.createDomElement("span", "roundButton");
      button.dataset.slideId = i;
      button.addEventListener("click", imageSliderControls.changeSlide);
      roundButtonContainer.appendChild(button);
    }
    let rightArrow = Tool.createDomElement(
      "div",
      "rightArrow sliderDirection",
      ">"
    );
    leftArrow.addEventListener("click", imageSliderControls.previousSlide);
    rightArrow.addEventListener("click", imageSliderControls.nextSlide);
    div.appendChild(roundButtonContainer);
    div.appendChild(rightArrow);
    return div;
  }

  addImage(img) {
    this.imageList.push(img);
  }

  addImageList(list) {
    this.imageList = list;
  }

  startAutomatic() {
    setInterval(imageSliderControls.nextSlide, 5000);
  }

  stopAutomatic() {
    clearInterval(this.startAutomatic())
  }
}

let imageSliderControls = (function () {
  let currentActiveIndex = 0;
  let slideList = document.getElementsByClassName("imageFrame");
  let dots = document.getElementsByClassName("roundButton");

  function changeSlide(n) {
    //To change Slide Based On SlideId Event
    if (n.target) {
      n = parseInt(n.target.dataset.slideId) || 0;
    }
    // let slides = document.getElementsByClassName("imageFrame");
    let slideLength = slideList.length;
    for (let slide of slideList) {
      removeActive(slide);
    }
    for (let dot of dots) {
      removeActive(dot);
    }
    currentActiveIndex = n % slideLength;
    slideList[currentActiveIndex].classList.add("active");
    dots[currentActiveIndex].classList.add("active");
  }

  function nextSlide() {
    changeSlide(currentActiveIndex + 1);
  }

  function previousSlide() {
    changeSlide(currentActiveIndex - 1);
  }

  function removeActive(item) {
    try {
      item.classList.remove("active");
    } catch (error) {
      console.error(`REMOVE ACTIVE: ${error}`);
    }
  }
  return {
    changeSlide: changeSlide,
    nextSlide: nextSlide,
    previousSlide: previousSlide,
  };
})();
