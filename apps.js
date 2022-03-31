let github = new Github()
let ui = new UI()
// search input
const userInput = document.getElementById("userInput")

// Search input event Listener
userInput.addEventListener("keyup", (e) => {
  // Get Input Text
  const userText = e.target.value

  if (userText !== "") {
    // Make Http Call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show Alert
        ui.showAlert()
      } else {
        // Show Profile
        ui.showProfile(data.profile)
      }
    })
  } else {
    // Clear Profile
    ui.clearProfile()
  }
})
