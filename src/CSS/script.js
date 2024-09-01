document.addEventListener("DOMContentLoaded", function () {
    // Show the timings popup when the page loads
    document.getElementById("timingsPopup").style.display = "block";

    // Close the popup when the close button is clicked
    document.getElementById("closePopup").addEventListener("click", function () {
        document.getElementById("timingsPopup").style.display = "none";
    });
});

document.getElementById("jaiSreeRamText").innerText="जय सियाराम जय जय सियाराम | जय सियाराम जय जय सियाराम || जय सियाराम जय जय सियाराम | जय सियाराम जय जय सियाराम ||"
