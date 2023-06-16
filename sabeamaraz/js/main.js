$(document).ready(function () {
  // Listen for the 'keydown' event to detect the Enter key press
  barcodeInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const value = event.target.value;
      // Perform your desired action here
      sendScannedValueToAPI(value);
    }
  });
  // Function to send the scanned value to the Google Apps Script API
  function sendScannedValueToAPI(value) {
    console.log(value);
    const url = `https://script.google.com/macros/s/AKfycbyfTqbjFndXu9O76by-YVxF-cRrYLHCeIgIK8-xCFxJqHQ2EuXt9TkMOBiHezbFHwG-/exec?its=${value}`;

    //   Make the AJAX request
    $.get(url, function (data, status) {
         barcodeInput.value = "";
    });
  }
});
