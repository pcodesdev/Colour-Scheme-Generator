// copying color hexcode to a clipboard on click

document.addEventListener("DOMContentLoaded", () => {
  const copyTextDivs = document.querySelectorAll(".colour-code"); // Note: Changed to plural since it's a NodeList

  copyTextDivs.forEach((div) => {
    // Iterate over each div in the NodeList
    div.addEventListener("click", () => {
      const textToCopy = div.textContent; // Access the textContent of the current div

      // Use the Clipboard API to copy text
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          alert("Colour HexCode copied to clipboard!");
        })
        .catch((err) => {
          console.error("Error copying text: ", err);
        });
    });
  });
});

// color generation code
// document.addEventListener("DOMContentLoaded", () => {
  const colorPicker = document.querySelector('input[type="color"]');
  const schemeModeSelector = document.getElementById("schemeModeSelector");
  const generateBtn = document.querySelector(".btn-gen");
  const colorDivs = document.querySelectorAll(".colour-section div");
  const colorCodes = document.querySelectorAll(
    ".colour-code-section .colour-code"
  );



  generateBtn.addEventListener("click", () => {
    const selectedColor = colorPicker.value.substring(1); // Remove the '#' character
    const selectedScheme = schemeModeSelector.value;
    const apiUrl = `https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedScheme}&count=5`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.colors);
        const colors = data.colors;
        colorDivs.innerHTML = "";
        colorCodes.innerHTML = "";
        colors.forEach((color, index) => {
          const hexValue = color.hex.value;
          if (colorDivs[index]) {
            colorDivs[index].style.backgroundColor = hexValue;
          }
          if (colorCodes[index]) {
            colorCodes[index].textContent = hexValue;
          }
        });
      })
      .catch((error) => console.error("Error fetching color scheme:", error));
  });
// });
