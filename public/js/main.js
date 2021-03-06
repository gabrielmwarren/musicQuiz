const playBtn = document.getElementById("play-btn");
const settingsOpen = document.getElementById("settingsBtn");
const settingsClose = document.getElementById("closeBtn");
const settings = document.getElementById("settings");
const playlistSelect = document.getElementById("playlistSelect");
const playlistInput = document.getElementById("playlistInput");

settingsOpen.addEventListener("click", () => {
  settings.style.display = "block";
});

settingsClose.addEventListener("click", () => {
  settings.style.display = "none";
});

function getPlaylistID() {
  if (playlistSelect.value === "Top 50 Global") {
    return "3JoHkM90TXzfIS1RMN0Cgd";
  } else if (playlistSelect.value === "Rap/Hip-Hop 2022") {
    return "3w8uoe0f8xPPw7p774kQtX";
  } else if (playlistSelect.value === "Classic Rock") {
    return "7nKdJLVjj5fzWw2u3xlbVm";
  } else if (playlistSelect.value === "Billboard Hot 100") {
    return "6fwWuOKdmhpVfKAmHIwoe0";
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
