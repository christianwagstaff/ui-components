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
}

let imageSliderControls = (function () {
  let currentActiveIndex = 0;

  function changeSlide(n) {
    //To change Slide Based On SlideId Event
    if (n.target) {
      n = parseInt(n.target.dataset.slideId);
    }
    console.log(`Current Index: ${n}`)
    let slides = document.querySelectorAll(".imageFrame");
    let slideLength = slides.length;
    let dots = document.querySelectorAll(".roundButton");

    for (let slide of slides) {
      removeActive(slide);
    }
    for (let dot of dots) {
      removeActive(dot);
    }
    if (n >= slideLength || !n) {
      currentActiveIndex = 0;
    } else if (n < 0) {
      currentActiveIndex = slideLength - 1;
    } else {
      currentActiveIndex = n;
    }
    slides[currentActiveIndex].classList.add("active");
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
