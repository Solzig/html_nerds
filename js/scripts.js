var modalClose = document.getElementById("modal-close"),
    contactModal = document.getElementById("modal-open"),
    modal = document.querySelector(".modal")

contactModal.addEventListener("click", function (evt){
  evt.preventDefault();
  modal.classList.add("modal--active");
})

modalClose.addEventListener("click", function (evt){
  evt.preventDefault();
  modal.classList.remove("modal--active");
})

var sliderControl = document.querySelectorAll(".hero__control"), sliderBlocks = document.querySelectorAll(".hero__slider"), j, h, k;
console.log(sliderControl)

for (i = 0; i < sliderControl.length; ++i)
    sliderControl[i].addEventListener("click", function(e) {
        for (e.preventDefault(e),
        j = 0; j < sliderControl.length; ++j)
            sliderControl[j].classList.remove("hero__control--active");
        for (h = 0; h < sliderControl.length; ++h)
            if (sliderControl[h] == this) {
                for (sliderControl[h].classList.add("hero__control--active"),
                k = 0; k < sliderBlocks.length; ++k)
                    sliderBlocks[k].classList.remove("hero__slider--active");
                sliderBlocks[h].classList.add("hero__slider--active")
            }
          });