const spotifyEmbed = document.getElementById("spotify-embed");
const nextBtn = document.getElementById("next");
const correctAnswer = document.getElementById("songTitle").innerText;
const choiceBtn = document.getElementById("choiceBtn");
const choiceBtn2 = document.getElementById("choiceBtn2");
const choiceBtn3 = document.getElementById("choiceBtn3");
const choiceBtn4 = document.getElementById("choiceBtn3");

const uri = window.location.href.replace("http://localhost:8080/quiz", "");
spotifyEmbed.setAttribute("src", `https://embed.spotify.com/${uri}`);
spotifyEmbed.style.display = "block";

nextBtn.addEventListener("click", () => {
  window.location.href = "http://localhost:8080/next";
});

choiceBtn.addEventListener("click", () => {
  const text = choiceBtn.innerText;
  if (text === correctAnswer) {
    alert("Correct!");
    window.location.href = "http://localhost:8080/next";
  } else {
    alert("Wrong! It was ", correctAnswer);
    window.location.href = "http://localhost:8080/next";
  }
});

choiceBtn2.addEventListener("click", () => {
  const text = choiceBtn2.innerText;
  if (text === correctAnswer) {
    alert("Correct!");
    window.location.href = "http://localhost:8080/next";
  } else {
    alert("Wrong! It was ", correctAnswer);
    window.location.href = "http://localhost:8080/next";
  }
});

choiceBtn3.addEventListener("click", () => {
  const text = choiceBtn3.innerText;
  if (text === correctAnswer) {
    alert("Correct!");
    window.location.href = "http://localhost:8080/next";
  } else {
    alert("Wrong! It was ", correctAnswer);
    window.location.href = "http://localhost:8080/next";
  }
});

choiceBtn4.addEventListener("click", () => {
  const text = choiceBtn4.innerText;
  if (text === correctAnswer) {
    alert("Correct!");
    window.location.href = "http://localhost:8080/next";
  } else {
    alert("Wrong! It was ", correctAnswer);
    window.location.href = "http://localhost:8080/next";
  }
});
