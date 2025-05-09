document.addEventListener("DOMContentLoaded", function () {
    console.log("SnackScript website loaded!");

    // Step 2: Check if the button exists
    const btn = document.getElementById("easterEggBtn");
    console.log("Button:", btn); // <- This will show in the browser console

    const text = document.getElementById("easterEggText");

    if (btn && text) {
        btn.addEventListener("click", function() {
            text.classList.toggle("hidden");
        });
    } else {
        console.warn("Button or text not found!");
    }
});
