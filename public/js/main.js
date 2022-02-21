const playBtn = document.getElementById("play-btn");
const playlistSelect = document.getElementById("playlistSelect");
const playlistInput = document.getElementById("playlistInput");

function getPlaylistID() {
  if (playlistSelect.value === "Top 40 Global") {
    return "3JoHkM90TXzfIS1RMN0Cgd";
  } else if (playlistSelect.value === "Rap/Hip-Hop 2022") {
    return "3w8uoe0f8xPPw7p774kQtX";
  } else if (playlistSelect.value === "Classic Rock") {
    return "7nKdJLVjj5fzWw2u3xlbVm";
  } else if (playlistSelect.value === "Custom") {
    if (playlistInput.value.includes("https://open.spotify.com/playlist/")) {
      let playlistID = playlistInput.value.replace(
        "https://open.spotify.com/playlist/",
        ""
      );
      return playlistID;
    } else {
      alert("That is not a valid url");
    }
  }
}

playBtn.addEventListener("click", () => {
  window.location.href = `http://localhost:8080/start?playlist=${getPlaylistID()}`;
});
