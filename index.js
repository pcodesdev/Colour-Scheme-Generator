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

