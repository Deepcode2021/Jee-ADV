 function savenum() {
  // Get the input value
  const numInput = document.getElementById("score").value;

  // Convert it to a number
  const savedNumber = Number(numInput);

  // Display it or use it however you want
//   document.getElementById("op").textContent = "Saved number: " + savedNumber;

  localStorage.setItem("score", savedNumber);
}
 const button = document.getElementById("crawler");

    // Start at top-left
    let x = 0;
    let y = 0;
    let dx = 2;
    let dy = 0;

    function moveButton() {
      const maxX = window.innerWidth - button.offsetWidth;
      const maxY = window.innerHeight - button.offsetHeight;

      // Move the button
      x += dx;
      y += dy;

      // Check for corners and rotate direction (clockwise)
      if (x >= maxX && y === 0) { dx = 0; dy = 2; }          // Top-right → go down
      else if (y >= maxY && x >= maxX) { dx = -2; dy = 0; }  // Bottom-right → go left
      else if (x <= 0 && y >= maxY) { dx = 0; dy = -2; }     // Bottom-left → go up
      else if (y <= 0 && x <= 0) { dx = 2; dy = 0; }         // Top-left → go right

      // Keep within bounds
      x = Math.max(0, Math.min(x, maxX));
      y = Math.max(0, Math.min(y, maxY));

      // Apply new position
      button.style.left = x + "px";
      button.style.top = y + "px";
    }

    // Start animation
    setInterval(moveButton, 50); // Lower value = faster

    function q1(){
      window.location.href = "/q1.html";
    }

