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

/* swiper general */
const myCustomSlider = document.querySelectorAll('.general-swiper');
const mySliderPrev = document.querySelectorAll('.swiper-button-prev');
const mySliderNext = document.querySelectorAll('.swiper-button-next');

for( i=0; i< myCustomSlider.length; i++ ) {
  myCustomSlider[i].classList.add('general-swiper-' + i);
  mySliderPrev[i].classList.add('swiper-button-prev-' + i);
  mySliderNext[i].classList.add('swiper-button-next-' + i);

  var vidswiper = new Swiper('.general-swiper-' + i, {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-' +i,
      prevEl: '.swiper-button-prev-' +i,
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
}

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


const form = document.getElementById("contactForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        result.classList.add("text-green");
      } else {
        console.log(response);
        result.innerHTML = json.message;
        result.classList.add("text-red");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});
