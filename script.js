const elementoDuvida = document.querySelectorAll(".duvida")
elementoDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
    duvida.classList.toggle("ativo")
  })
})
const images = document.querySelector(".duvide-question")
const image1 = document.querySelector(".image")
const image2 = document.querySelector(".image2")
const images2 = document.querySelector(".duvide-question2")
const image3 = document.querySelector(".image3")
const image4 = document.querySelector(".image4")
const images3 = document.querySelector(".duvide-question3")
const image5 = document.querySelector(".image5")
const image6 = document.querySelector(".image6")
const images4 = document.querySelector(".duvide-question4")
const image7 = document.querySelector(".image7")
const image8 = document.querySelector(".image8")
function tradeImage() {
  image1.classList.toggle("hide")
  image2.classList.toggle("hide")
}
function tradeImage2() {
  image3.classList.toggle("hide")
  image4.classList.toggle("hide")
}
function tradeImage3() {
  image5.classList.toggle("hide")
  image6.classList.toggle("hide")
}
function tradeImage4() {
  image7.classList.toggle("hide")
  image8.classList.toggle("hide")
}
images.addEventListener("click", tradeImage)
images2.addEventListener("click", tradeImage2)
images3.addEventListener("click", tradeImage3)
images4.addEventListener("click", tradeImage4)