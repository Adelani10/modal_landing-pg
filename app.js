// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


const openEl = document.querySelector(".open")
const cancel = document.querySelector(".cancel")
const secLayout = document.querySelector(".sec-layout")

openEl.addEventListener("click", function(){
    secLayout.classList.add("show-modal")
})

cancel.addEventListener("click", function(){
    secLayout.classList.remove("show-modal")
})