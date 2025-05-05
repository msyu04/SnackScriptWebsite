document.addEventListener("DOMContentLoaded", function() {
    console.log("SnackScript website loaded!");
});

document.getElementById("easterEggBtn").addEventListener("click", function() {
    const text = document.getElementById("easterEggText");
    text.classList.toggle("hidden");
});
