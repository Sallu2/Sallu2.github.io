/*   ======================================================================   */
/*   |                                                                    |   */
/*   |                                                                    |   */
/*   |                              DEVELOPER                             |   */
/*   |                            AYESHA ASHFAQ                           |   */
/*   |                                                                    |   */
/*   |                                                                    |   */
/*   ======================================================================   */


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(element => {
  element.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
});


/*   ======================================================================   */
/*                           Galller-Slider                              */
/*   ======================================================================   */

// Manual

// var slideIndex = 1;
// showSlides(slideIndex);
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("slide");
//   if (n > slides.length) { slideIndex = 1 }
//   if (n < 1) { slideIndex = slides.length }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "block";
// }

// Auto-play

// var slideIndex = 0;
// showSlides();
// function showSlides() {
//     var i;
//    var slides = document.getElementsByClassName("slide");
//    for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//    }
//    slideIndex++;
//    if (slideIndex > slides.length) { slideIndex = 1 }
//    slides[slideIndex - 1].style.display = "block";
//    setTimeout(showSlides, 9000); // Change image every 2 seconds
// }


/*   ======================================================================   */
/*                                Pagination                                  */
/*   ======================================================================   */

// // Selecting DOM elements
// const startBtn = document.querySelector("#startBtn"),
//   endBtn = document.querySelector("#endBtn"),
//   prevNext = document.querySelectorAll(".prevNext"),
//   numbers = document.querySelectorAll(".link");

// // Setting an initial step
// let currentStep = 0;

// // Function to update the button states
// const updateBtn = () => {
//   // If we are at the last step
//   if (currentStep === 4) {
//     endBtn.disabled = true;
//     prevNext[1].disabled = true;
//   } else if (currentStep === 0) {
//     // If we are at the first step
//     startBtn.disabled = true;
//     prevNext[0].disabled = true;
//   } else {
//     endBtn.disabled = false;
//     prevNext[1].disabled = false;
//     startBtn.disabled = false;
//     prevNext[0].disabled = false;
//   }
// };

// // Add event listeners to the number links
// numbers.forEach((number, numIndex) => {
//   number.addEventListener("click", (e) => {
//     e.preventDefault();
//     // Set the current step to the clicked number link
//     currentStep = numIndex;
//     // Remove the "active" class from the previously active number link
//     document.querySelector(".active").classList.remove("active");
//     // Add the "active" class to the clicked number link
//     number.classList.add("active");
//     updateBtn(); // Update the button states
//   });
// });

// // Add event listeners to the "Previous" and "Next" buttons
// prevNext.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     // Increment or decrement the current step based on the button clicked
//     currentStep += e.target.id === "next" ? 1 : -1;
//     numbers.forEach((number, numIndex) => {
//       // Toggle the "active" class on the number links based on the current step
//       number.classList.toggle("active", numIndex === currentStep);
//       updateBtn(); // Update the button states
//     });
//   });
// });

// // Add event listener to the "Start" button
// startBtn.addEventListener("click", () => {
//   // Remove the "active" class from the previously active number link
//   document.querySelector(".active").classList.remove("active");
//   // Add the "active" class to the first number link
//   numbers[0].classList.add("active");
//   currentStep = 0;
//   updateBtn(); // Update the button states
//   endBtn.disabled = false;
//   prevNext[1].disabled = false;
// });

// // Add event listener to the "End" button
// endBtn.addEventListener("click", () => {
//   // Remove the "active" class from the previously active number link
//   document.querySelector(".active").classList.remove("active");
//   // Add the "active" class to the last number link
//   numbers[4].classList.add("active");
//   currentStep = 4;
//   updateBtn(); // Update the button states
//   startBtn.disabled = false;
//   prevNext[0].disabled = false;
// });


/*   ======================================================================   */
/*                            Quantity Counter                                */
/*   ======================================================================   */

//        J-Query CODE

// $(document).ready(function () {
//
//   $('.minus').click(function () {
//     var $input = $(this).parent().find('input');
//     var count = parseInt($input.val()) - 1;
//     count = count < 1 ? 1 : count;
//     $input.val(count);
//     $input.change();
//     return false;
//   });
//   $('.plus').click(function () {
//     var $input = $(this).parent().find('input');
//     $input.val(parseInt($input.val()) + 1);
//     $input.change();
//     return false;
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var minusButtons = document.querySelectorAll(".minus");
  var plusButtons = document.querySelectorAll(".plus");

  minusButtons.forEach(function (minusButton) {
    minusButton.addEventListener("click", function () {
      var input = this.parentNode.querySelector("input");
      var count = parseInt(input.value) - 1;
      count = count < 1 ? 1 : count;
      input.value = count;
      input.dispatchEvent(new Event("change"));
      return false;
    });
  });

  plusButtons.forEach(function (plusButton) {
    plusButton.addEventListener("click", function () {
      var input = this.parentNode.querySelector("input");
      input.value = parseInt(input.value) + 1;
      input.dispatchEvent(new Event("change"));
      return false;
    });
  });
});


/*   ======================================================================   */
/*                                Accordion                                   */
/*   ======================================================================   */

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

if (document.getElementsByClassName("accordion")) {

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

}

