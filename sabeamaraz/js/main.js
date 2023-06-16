$(document).ready(function () {
  // Listen for the 'keydown' event to detect the Enter key press
  barcodeInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const value = event.target.value;

      // Perform your desired action here
      sendScannedValueToAPI(value);
      barcodeInput.value = "";
      showRazaMsg();
    }
  });
  // Function to send the scanned value to the Google Apps Script API
  function sendScannedValueToAPI(value) {
    const url = `https://script.google.com/macros/s/AKfycbyfTqbjFndXu9O76by-YVxF-cRrYLHCeIgIK8-xCFxJqHQ2EuXt9TkMOBiHezbFHwG-/exec?its=${value}`;
    //   Make the AJAX request
    $.get(url, function (data, status) {});
  }
  function showRazaMsg() {
    // Change the value
    let razaMsg = document.getElementById("razaMsg");
    // Revert the value after 3 seconds
    setTimeout(function () {
      razaMsg.innerHTML = "Mubarak! You have been granted raza!";
    }, 3000);
  }
});
