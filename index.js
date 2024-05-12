
function myFunction() {


    var emailAddress = 'contact@buildersacademy.ai';
    var subject = 'Hello from my website';
    var mailtoLink = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject);
    window.location.href = mailtoLink;

}

document.querySelectorAll('.transitions a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            scrollToTarget(targetElement);
        }
    });
});

function scrollToTarget(targetElement) {
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();
    const duration = 1000; // Adjust the duration as needed (in milliseconds)

    function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easing = easeInOutQuad(progress);
        window.scrollTo(0, startPosition + distance * easing);

        if (elapsedTime < duration) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(scrollAnimation);
}


// Function to handle button click and redirect to the link
function goToLink() {
    // Replace 'https://example.com' with your desired link
    window.location.href = 'https://discord.com/invite/uSgdwmJ8JG';
  }
  
  // Wait for the DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Get the first element with the class 'myButton'
    var myButton = document.querySelector('.button');
  
    // Attach the function to the button click event
    if (myButton) {
      myButton.addEventListener('click', goToLink);
    }
  });

//   blog
document.getElementById("blog1").addEventListener("click", function() {
    window.open("Blogs/blog1.html", "_blank"); // Replace "https://www.example.com" with the URL of the page you want to open
  });
  


//   carousel section
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2500); // Change image every 2 seconds
}