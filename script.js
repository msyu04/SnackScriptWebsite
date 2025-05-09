document.addEventListener("DOMContentLoaded", function () {
    console.log("SnackScript website loaded!");

    const button = document.getElementById("easterEggBtn");
    const text = document.getElementById("easterEggText");

    if (button && text) {
        button.addEventListener("click", function () {
            text.classList.toggle("hidden");
        });
    }
});
