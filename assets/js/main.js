const bookOpen = document.getElementById("book-open")
const bookClose = document.getElementById("book-close")
const bookContainer = document.getElementById("book-container")
const bookNow = document.getElementById("book-now")

bookOpen.addEventListener("click", () => {
  bookContainer.classList.add('show')
  bookNow.classList.add('show')
})

bookClose.addEventListener("click", () => {
  bookContainer.classList.remove('show')
  bookNow.classList.remove('show')
})
