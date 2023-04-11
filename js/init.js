const swiper = new Swiper('.feedback-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      direction: 'vertical',
      slidesPerView: 2,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
    }
  }
});

const swiper2 = new Swiper('.general-swiper', {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20      
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

/* contact form */
let modalBtns = [...document.querySelectorAll(".contact-modal-button")];
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
    document.body.parentNode.classList.add("opened-popup");
  };
});
let closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.closest(".contact-form");
    modal.style.display = "none";
    document.body.parentNode.classList.remove("opened-popup");
  };
});
window.onclick = function (event) {
  if (event.target.className === "contact-form") {
    event.target.style.display = "none";
    document.body.parentNode.classList.remove("opened-popup");
  }
};

let input = document.querySelectorAll('.input');
input.forEach(function(e) {
  e.addEventListener('focus', () => {
    e.parentNode.classList.add("input-focused");
  });

  e.addEventListener('blur', () => {
    if ((e.value.length == null || e.value.length == "")) {
      e.parentNode.classList.remove("input-focused");
    }
  })
})
