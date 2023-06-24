document.addEventListener('DOMContentLoaded', function() {
    // Get the necessary elements
    const billAmountInput = document.getElementById('billAmount');
    const percentageTipInput = document.getElementById('percentageTip');
    const calculateButton = document.getElementById('calculateButton');
    const tipAmountInput = document.getElementById('tipAmount');
    const totalAmountInput = document.getElementById('totalAmount');
    const errorMessage = document.getElementById('errorMessage');
  
    // Function to handle calculate button click
    function handleCalculateButtonClick() {
      const billAmount = parseFloat(billAmountInput.value);
      const percentageTip = parseFloat(percentageTipInput.value);
  
      // Clear previous error message
      errorMessage.textContent = '';
  
      // Validate input
      if (!billAmount && !percentageTip) {
        errorMessage.textContent = 'Please enter bill amount and tip percentage.';
        return;
      }
  
      if (!billAmount) {
        errorMessage.textContent = 'Please enter bill amount.';
        return;
      }
  
      if (!percentageTip) {
        errorMessage.textContent = 'Please enter tip percentage.';
        return;
      }
  
      // Check tip percentage
      if (percentageTip > 100) {
        errorMessage.textContent = 'Warning: High tip percentage!';
      } else {
        errorMessage.textContent = '';
      }
  
      // Calculate tip and total
      const calculatedTip = (percentageTip / 100) * billAmount;
      const totalAmount = billAmount + calculatedTip;
  
      // Display calculated tip and total
      tipAmountInput.value = calculatedTip.toFixed(2);
      totalAmountInput.value = totalAmount.toFixed(2);
  
      // Display the greeting message
      const greetingMessage = document.createElement('p');
      greetingMessage.textContent = 'Bonjour! Have a good day.';
      greetingMessage.style.color = '#49a6e9';
      errorMessage.appendChild(greetingMessage);
    }
  
    // Add click event listener to the calculate button
    calculateButton.addEventListener('click', handleCalculateButtonClick);
  });
  