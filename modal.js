const images = document.querySelectorAll(".container img");
const modal = document.querySelector(".image-modal");
const modalContent = document.querySelector(".modal-content");

const imageText = document.querySelector(".image-text")
const close = document.querySelector(".close");


images.forEach(image => {

image.addEventListener("click",() => {
    
modalContent.style.backgroundImage = `url(${image.src})`;
imageText.innerText = image.alt;

modal.classList.add("show");

close.addEventListener("click",() => {
    modal.classList.remove("show")
})
})

}
 );
