
/*======== COUNTDOWN TIMER =========*/
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "01/01/",
        releaseDay = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > releaseDay) {
      releaseDay = dayMonth + nextYear;
    }
    
    const countDown = new Date(releaseDay).getTime(),
        x = setInterval(function() {    
            const now = new Date().getTime(),
            distance = countDown - now;
  
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          if (distance < 0) {
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
        }, 0)
    }());


/*========= FAQ LIST ==========*/
const toggles = document.querySelectorAll('.c-faq-toggle');
toggles.forEach(toggle => {
  console.log("sdhsdhsjg")
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    });
});


/*======== AGE VERIFICATION ==========*/


/*======== SLIDER SECTION ==========*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*======== RESPONSIVE MENU ===========*/
