document.addEventListener("DOMContentLoaded", () => {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  function getRandomColor() {
    const hexCharacters = "0123456789ABCDEF";
    let color = "#";

    for (let index = 0; index < 6; index += 1) {
      color += hexCharacters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  changeColorBtn.addEventListener("click", () => {
    colorBox.style.backgroundColor = getRandomColor();
  });
});
