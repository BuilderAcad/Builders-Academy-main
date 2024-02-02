
function myFunction() {


    var emailAddress = 'karkidivya5@gmail.com';
    var subject = 'Hello from my website';
    var mailtoLink = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject);
    window.location.href = mailtoLink;

}

document.querySelectorAll('.home-parent a').forEach(anchor => {
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
    window.location.href = 'https://discord.gg/SAY5CbVE';
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