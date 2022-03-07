"use strict"

function docReady(fn) {
  // see if DOM is already available
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // call on next available tick
    setTimeout(fn, 1)
  } else {
    document.addEventListener("DOMContentLoaded", fn)
  }
}

docReady(bookNow(), slidesImages(), valuesBookNow())

function bookNow() {
  const bookOpen = document.getElementById("book-open")
  const bookClose = document.getElementById("book-close")
  const bookContainer = document.getElementById("book-container")
  const bookNow = document.getElementById("book-now")

  bookOpen.addEventListener("click", () => {
    bookNow.classList.remove("close")
    bookContainer.classList.add("show")
    bookNow.classList.add("show")
  })

  bookClose.addEventListener("click", () => {
    bookContainer.classList.remove("show")
    bookNow.classList.remove("show")
    bookNow.classList.add("close")
  })
}
function slidesImages() {
  let slideContainer = document.querySelector(".slider-images")
  let slideItems = document.querySelectorAll(".item-slide-img")
  let valueCont = 1
  let width = slideItems[0].clientWidth

  window.addEventListener("resize", () => {
    width = slideItems[0].clientWidth
    location.reload()
  })

  setInterval(() => {
    slides(slideContainer, valueCont)
  }, 8000)

  const slides = () => {
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
}
function valuesBookNow() {
  let arrivalInput = document.getElementById("arrival")
  let departureInput = document.getElementById("departure")

  let today = new Date()
  let dd = String(today.getDate()).padStart(2, "0")
  let mm = String(today.getMonth() + 1).padStart(2, "0") //January is 0!
  let yyyy = today.getFullYear()

  today = `${yyyy}-${mm}-${dd}`
  arrivalInput.value = today
  arrivalInput.min = today
  departureInput.min = today
}
function submitBoook(e) {
  e.preventDefault()
  const arrivalInput = document.getElementById("arrival").value
  const departureInput = document.getElementById("departure").value
  const countAdultsInput = document.getElementById("countAdults").value
  const countChildInput = document.getElementById("countChild").value
  let objectBookNow = {}

  objectBookNow = {
    arrivalInput,
    departureInput,
    countAdultsInput,
    countChildInput,
  }

  alert("Data of Book Now in _console.log_")
  console.log(objectBookNow)
}
