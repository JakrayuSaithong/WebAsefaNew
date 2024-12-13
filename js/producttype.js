function addScrollEventListener(container) {
  var isMouseDown = false;
  var startX;
  var scrollLeft;

  container.addEventListener("mousedown", function(e) {
    isMouseDown = true;
    startX = e.clientX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mouseup", function() {
    isMouseDown = false;
  });

  container.addEventListener("mouseleave", function() {
    isMouseDown = false;
  });

  container.addEventListener("mousemove", function(e) {
    if (!isMouseDown) return;
    e.preventDefault();
    var x = e.clientX - container.offsetLeft;
    var walk = x - startX;
    container.scrollLeft = scrollLeft - walk;
  });

  container.addEventListener("touchstart", function(e) {
    isMouseDown = true;
    startX = e.touches[0].clientX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("touchend", function() {
    isMouseDown = false;
  });

  container.addEventListener("touchcancel", function() {
    isMouseDown = false;
  });

  container.addEventListener("touchmove", function(e) {
    if (!isMouseDown) return;
    e.preventDefault();
    var x = e.touches[0].clientX - container.offsetLeft;
    var walk = x - startX;
    container.scrollLeft = scrollLeft - walk;
  });
}

document.addEventListener("DOMContentLoaded", function() {
  var containers = document.querySelectorAll(".container-asefa-model-product, .container-licensed-product, .container-sourcing-product, .container-system-integration, .container-services-product, .container-after-services, .box-popup-silder, .box-detail-silder");
  containers.forEach(function(container) {
    addScrollEventListener(container);
  });
});

function openpopup(index) {
  let sliders = document.getElementsByClassName('slider-nameproduct-popup');
  let popupContents = document.getElementsByClassName('full-popup-content-img-text');
  let popupContainer = document.getElementById("popupContainer");
  let closeButton = document.getElementById("closeButton");
  
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].classList.remove('active');
    popupContents[i].classList.remove('active');
  }

  // เพิ่มคลาส 'active' เข้าไปในคลาส 'slider-nameproduct-popup' และ 'full-popup-content-img-text' ที่เลือก
  sliders[index].classList.add('active');
  popupContents[index].classList.add('active');

  popupContainer.classList.add("popup-visible");

  closeButton.addEventListener("click", function() {
    popupContainer.classList.remove("popup-visible");
  });
}

function openpopuptwo(index) {
  let sliders = document.getElementsByClassName('slider-nameproduct-popup two');
  let popupContents = document.getElementsByClassName('full-popup-content-img-text two');
  let popupContainer = document.getElementById("popupContainertwo");
  let closeButton = document.getElementById("closeButtontwo");
  
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].classList.remove('active');
    popupContents[i].classList.remove('active');
  }

  // เพิ่มคลาส 'active' เข้าไปในคลาส 'slider-nameproduct-popup' และ 'full-popup-content-img-text' ที่เลือก
  sliders[index].classList.add('active');
  popupContents[index].classList.add('active');

  popupContainer.classList.add("popup-visible-2");

  closeButton.addEventListener("click", function() {
    popupContainer.classList.remove("popup-visible-2");
  });
}

function openpopupthree(index) {
  let sliders = document.getElementsByClassName('slider-nameproduct-popup three');
  let popupContents = document.getElementsByClassName('full-popup-content-img-text three');
  let popupContainer = document.getElementById("popupContainerthree");
  let closeButton = document.getElementById("closeButtonthree");
  
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].classList.remove('active');
    popupContents[i].classList.remove('active');
  }

  // เพิ่มคลาส 'active' เข้าไปในคลาส 'slider-nameproduct-popup' และ 'full-popup-content-img-text' ที่เลือก
  sliders[index].classList.add('active');
  popupContents[index].classList.add('active');

  popupContainer.classList.add("popup-visible-3");

  closeButton.addEventListener("click", function() {
    popupContainer.classList.remove("popup-visible-3");
  });
}

document.addEventListener("DOMContentLoaded", function() {
  var sliderContainer = document.querySelector(".slider-container");
  var sliderItems = document.querySelectorAll(".slider-nameproduct-popup");
  var currentIndex = 0;

  function slideTo(index) {
    if (index < 0 || index >= sliderItems.length) {
      return;
    }

    currentIndex = index;

    var translateX = -currentIndex * sliderItems[0].offsetWidth;
    sliderContainer.style.transform = "translateX(" + translateX + "px)";
  }

  function slideNext() {
    slideTo(currentIndex + 1);
  }

  function slidePrev() {
    slideTo(currentIndex - 1);
  }

  var startX;
  var isDragging = false;

  sliderContainer.addEventListener("mousedown", function(event) {
    startX = event.clientX;
    isDragging = true;
  });

  sliderContainer.addEventListener("mousemove", function(event) {
    if (!isDragging) {
      return;
    }

    var currentX = event.clientX;
    var diffX = currentX - startX;

    var currentTranslateX = -currentIndex * sliderItems[0].offsetWidth;
    var translateX = currentTranslateX + diffX;

    sliderContainer.style.transform = "translateX(" + translateX + "px)";
  });

  sliderContainer.addEventListener("mouseup", function() {
    isDragging = false;

    var currentTranslateX = -currentIndex * sliderItems[0].offsetWidth;
    var translateX = parseFloat(sliderContainer.style.transform.slice(11, -3));

    var diffTranslateX = translateX - currentTranslateX;
    var threshold = sliderItems[0].offsetWidth / 3;

    if (diffTranslateX > threshold) {
      slidePrev();
    } else if (diffTranslateX < -threshold) {
      slideNext();
    } else {
      slideTo(currentIndex);
    }
  });

  sliderContainer.addEventListener("mouseleave", function() {
    isDragging = false;
    slideTo(currentIndex);
  });
});

const sliders = document.getElementsByClassName("slider-nameproduct-popup");
const popupContents = document.getElementsByClassName("full-popup-content-img-text");
const sliderstwo = document.getElementsByClassName("slider-nameproduct-popup two");
const popupContentstwo = document.getElementsByClassName("full-popup-content-img-text two");
const slidersthree = document.getElementsByClassName("slider-nameproduct-popup three");
const popupContentsthree = document.getElementsByClassName("full-popup-content-img-text three");

function openPopupContent(index) {
  for (let i = 0; i < popupContents.length; i++) {
    popupContents[i].classList.remove("active");
    sliders[i].classList.remove("active");
  }

  popupContents[index].classList.add("active");
  sliders[index].classList.add("active");
}

for (let i = 0; i < sliders.length; i++) {
  sliders[i].addEventListener("click", function () {
    openPopupContent(i);
  });
}

function openPopupContenttwo(index) {
  for (let i = 0; i < popupContentstwo.length; i++) {
    popupContentstwo[i].classList.remove("active");
    sliderstwo[i].classList.remove("active");
  }

  popupContentstwo[index].classList.add("active");
  sliderstwo[index].classList.add("active");
}

for (let i = 0; i < sliderstwo.length; i++) {
  sliderstwo[i].addEventListener("click", function () {
    openPopupContent(i);
  });
}

function openPopupContentthree(index) {
  for (let i = 0; i < popupContentsthree.length; i++) {
    popupContentsthree[i].classList.remove("active");
    slidersthree[i].classList.remove("active");
  }

  popupContentsthree[index].classList.add("active");
  slidersthree[index].classList.add("active");
}

for (let i = 0; i < slidersthree.length; i++) {
  slidersthree[i].addEventListener("click", function () {
    openPopupContent(i);
  });
}

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  if (n === 2) {
    document.getElementsByClassName("mySlides")[0].classList.add("active");
  } else {
    document.getElementsByClassName("mySlides")[0].classList.remove("active");
  }
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function openPopup(imageUrl) {
  var popupContainer = document.querySelector('.popup-container');
  var popupImage = document.getElementsByClassName("popup-image");

  popupContainer.classList.add('popup-visible');

  for(i = 0; i < popupImage.length; i++){
    popupImage[i].classList.remove("showimages");
  }
  popupImage[imageUrl].classList.add("showimages");
}

function closePopup() {
  var popupContainer = document.querySelector('.popup-container');
  popupContainer.classList.remove('popup-visible');
}

function namesection(index) {
  let namesection = document.getElementsByClassName('name-section');

  for(i = 0; i < namesection.length; i++) {
    namesection[i].classList.remove("active");
  }
  namesection[index].classList.add("active");
}
