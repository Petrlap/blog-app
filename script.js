document.addEventListener("DOMContentLoaded", function () {
  const areaContainer = document.querySelector(".area__container");
  const scrollbarThumb = document.querySelector(".area__scrollbar-thumb");
  const scrollbar = document.querySelector(".area__scrollbar");
  const itemsWraps = document.querySelectorAll(".banner__container");
  const button = document.querySelector(".language");
  const textElement = button.querySelector(".language__text");
  const burger = document.querySelector(".burger");
  const cross = document.querySelector(".cross");

  button.addEventListener("click", function () {
    if (textElement.textContent === "en") {
      textElement.textContent = "ru";
    } else {
      textElement.textContent = "en";
    }
    console.log("a");
  });

  burger.addEventListener("click", function () {
    this.classList.toggle(".active");
    document.querySelector(".navbar").classList.toggle("open");
    document.querySelector(".login").classList.toggle("open");
    document.querySelector(".signup").classList.toggle("open");
    document.querySelector(".buttons").classList.toggle("open");
    document.querySelector(".cross").classList.toggle("open");
    document.querySelector(".burger").classList.toggle("close");
    document.querySelector(".main").classList.toggle("close");
    document.querySelector(".footer").classList.toggle("close");
  });
  cross.addEventListener("click", function () {
    this.classList.toggle(".active");
    document.querySelector(".navbar").classList.toggle("open");
    document.querySelector(".login").classList.toggle("open");
    document.querySelector(".signup").classList.toggle("open");
    document.querySelector(".buttons").classList.toggle("open");
    document.querySelector(".cross").classList.toggle("open");
    document.querySelector(".burger").classList.toggle("close");
    document.querySelector(".main").classList.toggle("close");
    document.querySelector(".footer").classList.toggle("close");
  });

  itemsWraps.forEach(function (item) {
    const opacity = item.getAttribute("data-opacity");
    item.style.opacity = opacity;
  });

  const updateThumbPosition = () => {
    const containerHeight = areaContainer.scrollHeight;
    const visibleHeight = areaContainer.clientHeight;
    const scrollRatio = visibleHeight / containerHeight;
    const thumbHeight = Math.max(scrollRatio * scrollbar.clientHeight, 30);

    scrollbarThumb.style.height = `${thumbHeight}px`;
    const scrollPercentage =
      areaContainer.scrollTop / (containerHeight - visibleHeight);
    const thumbPosition =
      scrollPercentage * (scrollbar.clientHeight - thumbHeight);
    scrollbarThumb.style.transform = `translateY(${thumbPosition}px)`;
  };

  areaContainer.addEventListener("scroll", updateThumbPosition);
  updateThumbPosition();
});
