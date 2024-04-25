function popup(){
    alert("sent successfully");
}


// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("Jimage");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }
// let currentIndex = 0;
// const slides = document.querySelectorAll('.slide');
// const prevButton = document.querySelector('.prev-btn');
// const nextButton = document.querySelector('.next-btn');

// function showSlide(index) {
//     // Hide all slides
//     slides.forEach(slide => {
//         slide.classList.remove('active');
//     });
//     // Show the slide at the given index
//     slides[index].classList.add('active');
// }

// function nextSlide() {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
// }

// function prevSlide() {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
// }

// // Show the first slide initially
// showSlide(currentIndex);

// // Auto advance the slides every 3 seconds
// const autoSlideInterval = setInterval(nextSlide, 1500);

// // Add event listeners to buttons
// nextButton.addEventListener('click', () => {
//     clearInterval(autoSlideInterval);
//     nextSlide();
// });

// prevButton.addEventListener('click', () => {
//     clearInterval(autoSlideInterval);
//     prevSlide();
// });
// body {
//     margin: 0;
//     padding: 0;
//   }
  
//   .slider {
//     position: relative;
//     width: 80%; /* Adjusted width */
//     margin: 0 auto; /* Centering the slider */
//     overflow: hidden;
//     display: flex;
//     justify-content: center; /* Horizontally center the items */
//     align-items: center; /* Vertically center the items */
//   }
  
//   .slide {
//     display: none;
//     width: 80%;
//     height: 400px;
//   }
  
//   .slide.active {
//     display: block;
//   }
  
//   .prev-btn,
//   .next-btn {
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     padding: 10px 20px;
//     background-color: rgba(0, 0, 0, 0.5);
//     color: white;
//     border: none;
//     cursor: pointer;
//     transition: background-color 0.3s ease;
//   }
  
//   .prev-btn:hover,
//   .next-btn:hover {
//     background-color: rgba(0, 0, 0, 0.7);
//   }
  
//   .prev-btn {
//     left: 10px;
//   }
  
//   .next-btn {
//     right: 10px;
//   }












