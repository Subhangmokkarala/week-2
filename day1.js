document.addEventListener('DOMContentLoaded', function() {
    // Get the necessary elements
    const colorPickerContainer = document.getElementById('colorPickerContainer');
    const selectedColorHexCode = document.getElementById('selectedColorHexCode');
    const colorBox = document.getElementById('colorBox');
    const buttons = document.getElementsByTagName('button');
    let previousColor = '#222222';
  
    // Function to handle button click
    function handleButtonClick(color, hexCode) {
      // Change background color of the page
      document.body.style.backgroundColor = color;
  
      // Change background color of the clicked button
      this.style.backgroundColor = color;
  
      // Update the selected color hex code
      selectedColorHexCode.textContent = hexCode;
  
      // Update the color box with the previous color
      colorBox.style.backgroundColor = previousColor;
  
      // Store the current color as the previous color
      previousColor = color;
    }
  
    // Add click event listeners to the buttons
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      const color = button.textContent;
  
      // Set initial background color for each button
      button.style.backgroundColor = color;
  
      // Get hex code by removing the '#' character
      const hexCode = color.substring(1);
  
      // Add click event listener
      button.addEventListener('click', handleButtonClick.bind(button, color, hexCode));
    }
  });
  