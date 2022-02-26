const spotifyEmbed = document.getElementById("spotify-embed");
const correctAlert = document.getElementById("correct");
const wrongAlert = document.getElementById("incorrect");
const incorrectBtnClose = document.getElementById("incorrectBtnClose");
const correctBtnClose = document.getElementById("correctBtnClose");
const correctSongName = document.getElementById("correctSongName");
const incorrectSongName = document.getElementById("incorrectSongName");
const correctArtists = document.getElementById("correctArtists");
const incorrectArtists = document.getElementById("incorrectArtists");
const nextBtn = document.getElementById("next");
const homeBtn = document.getElementById("home");
const choiceBtn = document.getElementById("choiceBtn");
const choiceBtn2 = document.getElementById("choiceBtn2");
const choiceBtn3 = document.getElementById("choiceBtn3");
const choiceBtn4 = document.getElementById("choiceBtn4");

const correctAnswer = document.getElementById("songTitle").innerText;
const correct = document.getElementById("isCorrect").innerText;
const lastAnswer = document.getElementById("last").innerText;
const artists = document.getElementById("artists").innerText;
const lastArtists = document.getElementById("lastArtists").innerText;

const choiceBtns = [choiceBtn, choiceBtn2, choiceBtn3, choiceBtn4];

const uri = window.location.href.replace("http://localhost:8080/quiz", "");
spotifyEmbed.setAttribute("src", `https://embed.spotify.com/${uri}`);
spotifyEmbed.style.display = "block";

if (correct === "true") {
  correctArtists.innerText = lastArtists;
  correctSongName.innerText = lastAnswer;
  correctAlert.style.display = "block";
} else if (correct === "false") {
  incorrectArtists.innerText = lastArtists;
  incorrectSongName.innerText = lastAnswer;
  wrongAlert.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  window.location.href = "http://localhost:8080/next";
});

homeBtn.addEventListener("click", () => {
  window.location.href = "http://localhost:8080";
});

incorrectBtnClose.addEventListener("click", () => {
  wrongAlert.style.display = "none";
});

correctBtnClose.addEventListener("click", () => {
  correctAlert.style.display = "none";
});

for (let index = 0; index < choiceBtns.length; index++) {
  choiceBtns[index].addEventListener("click", () => {
    const text = choiceBtns[index].innerText;
    if (text === correctAnswer) {
      correctArtists.innerText = artists;
      correctSongName.innerText = correctAnswer;
      correctAlert.style.display = "block";
      window.location.href = "http://localhost:8080/next?correct=true";
    } else {
      incorrectArtists.innerText = artists;
      incorrectSongName.innerText = correctAnswer;
      wrongAlert.style.display = "block";
      window.location.href = "http://localhost:8080/next?correct=false";
    }
  });
}
