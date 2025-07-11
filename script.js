// Show the "Back to Top" button when scrolling down
window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Smooth scroll to top when button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
