console.log("Script loaded");

// Back to Top button logic
window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Dark Mode toggle logic
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
