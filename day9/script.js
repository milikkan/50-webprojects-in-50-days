const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    sounds.forEach((playingSound) => {
      const audio = document.getElementById(playingSound);
      audio.pause();
      audio.setCurrentTime = 0;
    });

    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});
