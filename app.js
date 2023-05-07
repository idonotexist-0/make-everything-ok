const btn = document.getElementById("main-btn");
const prompt = document.getElementById("prompt");
const prompt2 = document.getElementById("prompt2");
const okayBtn = document.getElementById("okbtn");
var progressBar = document.getElementById("progress-bar");

btn.addEventListener("click", async function () {
  btn.style.display = "none";
  prompt.style.display = "flex";
  function loop() {
    setTimeout(() => {
      progressBar.value++;
      if (progressBar.value < 100) {
        loop();
      } else if (progressBar.value == 100) {
        prompt.style.display = "none";
        prompt2.style.display = "flex";
      }
    }, 50);
  }
  loop();
});

okayBtn.addEventListener("click", function () {
  progressBar.value = 0;
  prompt2.style.display = "none";
  btn.style.display = "block";
});
