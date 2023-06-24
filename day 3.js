document.addEventListener('DOMContentLoaded', function() {
    const stopButton = document.getElementById('stopButton');
    const readyButton = document.getElementById('readyButton');
    const goButton = document.getElementById('goButton');
    const automaticButton = document.getElementById('automaticButton');
  
    const stopLight = document.getElementById('stopLight');
    const readyLight = document.getElementById('readyLight');
    const goLight = document.getElementById('goLight');
  
    const stopDuration = 15000; // 1 minute in milliseconds
    const readyDuration = 15000; // 20 seconds in milliseconds
    const goDuration = 15000; // 1 minute in milliseconds
  
    let intervalId = null;
    let currentState = 'stop';
  
    function resetLights() {
      stopLight.style.backgroundColor = 'gray';
      readyLight.style.backgroundColor = 'gray';
      goLight.style.backgroundColor = 'gray';
      stopButton.style.backgroundColor = '#ff5555';
      readyButton.style.backgroundColor = '#ffff55';
      goButton.style.backgroundColor = '#55ff55';
    }
  
    function handleStopButtonClick() {
      resetLights();
      stopLight.style.backgroundColor = 'red';
      stopButton.style.backgroundColor = 'red';
      clearInterval(intervalId);
      currentState = 'stop';
    }
  
    function handleReadyButtonClick() {
      resetLights();
      readyLight.style.backgroundColor = 'yellow';
      readyButton.style.backgroundColor = 'yellow';
      clearInterval(intervalId);
      currentState = 'ready';
    }
  
    function handleGoButtonClick() {
      resetLights();
      goLight.style.backgroundColor = 'green';
      goButton.style.backgroundColor = 'green';
      clearInterval(intervalId);
      currentState = 'go';
    }
  
    function handleAutomaticButtonClick() {
      resetLights();
      switch (currentState) {
        case 'stop':
          handleStopButtonClick();
          setTimeout(() => {
            handleReadyButtonClick();
            intervalId = setInterval(handleReadyButtonClick, readyDuration);
          }, stopDuration);
          break;
        case 'ready':
          handleReadyButtonClick();
          setTimeout(() => {
            handleGoButtonClick();
            intervalId = setInterval(handleGoButtonClick, goDuration);
          }, readyDuration);
          break;
        case 'go':
          handleGoButtonClick();
          setTimeout(() => {
            handleStopButtonClick();
            intervalId = setInterval(handleStopButtonClick, stopDuration);
          }, goDuration);
          break;
      }
    }
  
    stopButton.addEventListener('click', handleStopButtonClick);
    readyButton.addEventListener('click', handleReadyButtonClick);
    goButton.addEventListener('click', handleGoButtonClick);
    automaticButton.addEventListener('click', handleAutomaticButtonClick);
  });
  