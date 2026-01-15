function goToScreen(num) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById("screen" + num).classList.add("active");

  if (num === 3) {
    document.getElementById("song").play();
  }
}

function wrong() {
  alert("Abee EWWdiot");
}

function runAway(btn) {
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "%";
  btn.style.top = Math.random() * 80 + "%";
}

