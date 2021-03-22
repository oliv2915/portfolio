// enables bootstrap tooltips site wide
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// add eventListener to the linkedIn and gitHub icons in the navbar
document.querySelector("#linkedin-icon").addEventListener("click", iconClicked);
document.querySelector("#github-icon").addEventListener("click", iconClicked);

const linkedInProfileURL = "https://www.linkedin.com/in/brianoliverii/";
const gitHubProfileURL = "https://github.com/oliv2915";

// handles click events on the linkedIn and gitHub icons
function iconClicked(event) {
    switch (event.target.id) {
        case "linkedin-icon":
            window.open(linkedInProfileURL, "_blank"); // open linkedIn webpage in a new browser tab
            break;
        case "github-icon":
            window.open(gitHubProfileURL, "_blank"); // open gitHub webpage in a new browser tab
        default:
            break;
    }
}