class Sound {
  constructor(src, vol) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.volume = vol;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
  }

  play() {
    this.sound.play();
  }
  stop() {
    this.sound.pause();
  }
}

export default Sound;
