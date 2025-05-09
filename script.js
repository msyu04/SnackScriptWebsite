document.addEventListener("DOMContentLoaded", function() {
    console.log("SnackScript website loaded!");

    const btn = document.getElementById("easterEggBtn");
    const text = document.getElementById("easterEggText");

    // Log the button to ensure it's being selected
    console.log("Button: ", btn);

    btn.addEventListener("click", function() {
        console.log("Button clicked!");  // Log when button is clicked
        text.classList.toggle("hidden");
    });
});
