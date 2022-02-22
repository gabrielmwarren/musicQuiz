const spotifyEmbed = document.getElementById("spotify-embed");
const nextBtn = document.getElementById("next");
const homeBtn = document.getElementById("home");
const correctAnswer = document.getElementById("songTitle").innerText;
const choiceBtn = document.getElementById("choiceBtn");
const choiceBtn2 = document.getElementById("choiceBtn2");
const choiceBtn3 = document.getElementById("choiceBtn3");
const choiceBtn4 = document.getElementById("choiceBtn4");

const choiceBtns = [choiceBtn, choiceBtn2, choiceBtn3, choiceBtn4];

const uri = window.location.href.replace("http://localhost:8080/quiz", "");
spotifyEmbed.setAttribute("src", `https://embed.spotify.com/${uri}`);
spotifyEmbed.style.display = "block";

nextBtn.addEventListener("click", () => {
  window.location.href = "http://localhost:8080/next";
});

homeBtn.addEventListener("click", () => {
  window.location.href = "http://localhost:8080";
});

for (let index = 0; index < choiceBtns.length; index++) {
  choiceBtns[index].addEventListener("click", () => {
    const text = choiceBtns[index].innerText;
    if (text === correctAnswer) {
      alert("Correct!");
      window.location.href = "http://localhost:8080/next";
    } else {
      alert("Wrong! It was " + correctAnswer);
      window.location.href = "http://localhost:8080/next";
    }
  });
}
