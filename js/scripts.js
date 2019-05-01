var modalClose = document.getElementById("modal-close");
var contactModal = document.getElementById("modal-open");
var modal = document.querySelector(".modal")

contactModal.addEventListener("click", function (evt){
  evt.preventDefault();
  modal.classList.add("modal_active");
})

modalClose.addEventListener("click", function (evt){
  evt.preventDefault();
  modal.classList.remove("modal_active");
})