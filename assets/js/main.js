/* Book Now */
const bookOpen = document.getElementById("book-open")
const bookClose = document.getElementById("book-close")
const bookContainer = document.getElementById("book-container")
const bookNow = document.getElementById("book-now")

bookOpen.addEventListener("click", () => {
  bookContainer.classList.add("show")
  bookNow.classList.add("show")
  bookNow.classList.remove("close")
})

bookClose.addEventListener("click", () => {
  bookContainer.classList.remove("show")
  bookNow.classList.remove("show")
  bookNow.classList.add("close")
})

/* Slide */
let slideContainer = document.querySelector(".slider-images")
let slideItems = document.querySelectorAll(".item-slide-img")
let valueCont = 1
let width = slideItems[0].clientWidth

window.addEventListener("resize", () => {
  width = slideItems[0].clientWidth
})

setInterval(() => {
  slides()
}, 8000)

function slides() {
  slideContainer.style.transform = `translate(-${width * valueCont}px)`
  valueCont++

  if (valueCont === slideItems.length) {
    setTimeout(() => {
      slideContainer.style.transform = `translate(0px)`
      slideContainer.style.transition = `transform 0s`
      valueCont = 1
    }, 1000)
  }
}
