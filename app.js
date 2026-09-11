//create random number
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

function checkGuess() {
    let userGuess = document.getElementById("guessInput").value;
    if (userGuess == randomNumber) {
        Swal.fire({
            title: "Congratulations!",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(assets/backgroundimage.jpg)",
            backdrop: `
    rgba(0,0,123,0.4)
    url("assets/win gif.gif")
    left top
    no-repeat
  `
        });
    }
    else {
        Swal.fire({
            title: "Try Again!",
            text: "Your guess is incorrect. Please try again.",
            icon: "error",
            confirmButtonText: "OK"
        });
    }

}