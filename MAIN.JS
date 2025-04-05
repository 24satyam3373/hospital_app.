let lastScrollTop = 0;
const header = document.querySelector("header");
const form = document.getElementById("appointmentForm");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down - Hide form, show header
        form.style.opacity = "0";
        form.style.transform = "translateY(-20px)";
        header.style.top = "0"; // Show header
    } else {
        // Scrolling up - Hide header, show form
        header.style.top = "-100px"; // Hide header
        form.style.opacity = "1";
        form.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
});

// Enable smooth scrolling
document.documentElement.style.scrollBehavior = "smooth";
