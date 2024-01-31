
function myFunction() {


    var emailAddress = 'karkidivya5@gmail.com';
    var subject = 'Hello from my website';
    var mailtoLink = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject);
    window.location.href = mailtoLink;

}

document.querySelectorAll('home-parent a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(hi)
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});