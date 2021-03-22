// add eventListener to the linkedIn and gitHub icons
document.querySelector("#linkedin-icon").addEventListener("click", iconClicked);
document.querySelector("#github-icon").addEventListener("click", iconClicked);

const linkedInProfileURL = "https://www.linkedin.com/in/brianoliverii/";
const gitHubProfileURL = "https://github.com/oliv2915";

// handles click events on the linkedIn and gitHub icons
function iconClicked(event) {
    switch (event.target.id) {
        case "linkedin-icon":
            window.open(linkedInProfileURL, "_blank");
            break;
        case "github-icon":
            window.open(gitHubProfileURL, "_blank");
        default:
            break;
    }
}

