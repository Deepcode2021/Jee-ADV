// popup 

document.addEventListener('DOMContentLoaded', () => {
            const achievementPopup = document.getElementById('achievementPopup');

            let timeoutId = null; // To store the timeout for hiding

            /**
             * Displays an achievement pop-up using a single image.
             * The pop-up will automatically hide after a set duration.
             * @param {string} imageUrl - The URL for the complete achievement image (including text).
             * @param {number} durationMs - How long the achievement should be visible in milliseconds.
             */
            function showAchievement(imageUrl, durationMs = 3000) {
                // Clear any existing hide timeout to prevent conflicts
                if (timeoutId) {
                    clearTimeout(timeoutId);
                    // Force immediate hide if another popup is about to show
                    achievementPopup.classList.remove('is-visible');
                    // Small delay is sometimes needed to ensure the element fully resets before showing again.
                    // This prevents visual glitches if called rapidly.
                    setTimeout(() => {
                        updateAndShow();
                    }, 50); 
                } else {
                    updateAndShow();
                }

                function updateAndShow() {
                    // Update the image source
                    achievementPopup.src = imageUrl;
                    achievementPopup.onerror = function() {
                        // Fallback image if the provided URL fails
                        this.src = "https://placehold.co/256x64/FF0000/FFF?text=Image+Error";
                    };

                    // Show and animate the pop-up
                    achievementPopup.classList.add('is-visible');

                    // Set timeout to hide the pop-up after the specified duration
                    timeoutId = setTimeout(() => {
                        achievementPopup.classList.remove('is-visible');
                        // Clear the timeoutId after the animation finishes.
                        // The CSS transition for 'opacity' and 'transform' is 0.6s, so add a buffer.
                        setTimeout(() => {
                            timeoutId = null; 
                            achievementPopup.src = ""; // Clear src after hiding to prevent old image flashing.
                        }, 700); 
                    }, durationMs);
                }
            }

            // Automatically show the achievement pop-up after 5 seconds (5000 milliseconds)
            setTimeout(() => {
                showAchievement(
                    "./img/minepop.png", // Example image URL
                    6000 // Show for 4 seconds
                );
            }, 5000); // 5000 milliseconds = 5 seconds
        });

// pop up end 

// popup 2

document.addEventListener('DOMContentLoaded', () => {
            const achievementPopup = document.getElementById('achievementPopup2');

            let timeoutId = null; // To store the timeout for hiding

            /**
             * Displays an achievement pop-up using a single image.
             * The pop-up will automatically hide after a set duration.
             * @param {string} imageUrl - The URL for the complete achievement image (including text).
             * @param {number} durationMs - How long the achievement should be visible in milliseconds.
             */
            function showAchievement(imageUrl, durationMs = 3000) {
                // Clear any existing hide timeout to prevent conflicts
                if (timeoutId) {
                    clearTimeout(timeoutId);
                    // Force immediate hide if another popup is about to show
                    achievementPopup.classList.remove('is-visible');
                    // Small delay is sometimes needed to ensure the element fully resets before showing again.
                    // This prevents visual glitches if called rapidly.
                    setTimeout(() => {
                        updateAndShow();
                    }, 50); 
                } else {
                    updateAndShow();
                }

                function updateAndShow() {
                    // Update the image source
                    achievementPopup.src = imageUrl;
                    achievementPopup.onerror = function() {
                        // Fallback image if the provided URL fails
                        this.src = "https://placehold.co/256x64/FF0000/FFF?text=Image+Error";
                    };

                    // Show and animate the pop-up
                    achievementPopup.classList.add('is-visible');

                    // Set timeout to hide the pop-up after the specified duration
                    timeoutId = setTimeout(() => {
                        achievementPopup.classList.remove('is-visible');
                        // Clear the timeoutId after the animation finishes.
                        // The CSS transition for 'opacity' and 'transform' is 0.6s, so add a buffer.
                        setTimeout(() => {
                            timeoutId = null; 
                            achievementPopup.src = ""; // Clear src after hiding to prevent old image flashing.
                        }, 700); 
                    }, durationMs);
                }
            }

            // Automatically show the achievement pop-up after 5 seconds (5000 milliseconds)
            setTimeout(() => {
                showAchievement(
                    "./img/info.png", // Example image URL
                    6000 // Show for 4 seconds
                );
            }, 12000); // 5000 milliseconds = 5 seconds
        });

// pop2 up end 

// input 

// var 

// const xinput = document.getElementById('xinput');
// const yinput = document.getElementById('yinput');

// // var end

//     // 1. Load value from localStorage on page load
//     window.onload = () => {
//       const x = localStorage.getItem('myxInput');
//       const y = localStorage.getItem('myyInput');
//       if (x) {
//         xinput.value = x;

//       }
//       if (y) {
//         yinput.value = y;
        
//       }
//     };

//     // 2. Save automatically as user types
//     xinput.addEventListener('xinput', () => {localStorage.setItem('myxInput', xinput.value);})

//     yinput.addEventListener('yinput', () => {localStorage.setItem('myyInput', yinput.value);})


 // Array of input field IDs
  // IDs of input fields to watch
const fields = ['x1', 'x2', 'y', 'z', 'p', 'e'];

// Load saved values into inputs and value bar
window.onload = () => {
  fields.forEach(id => {
    const input = document.getElementById(id);
    const saved = localStorage.getItem(id);
    if (saved && input) {
      input.value = saved;
    }
    updateValueBar(id, saved);
  });
};

// Auto-save and update bar on input
fields.forEach(id => {
  const input = document.getElementById(id);
  if (input) {
    input.addEventListener('input', () => {
      localStorage.setItem(id, input.value);
      updateValueBar(id, input.value);
    });
  }
});

// Update the floating value bar
function updateValueBar(id, value) {
  const display = document.getElementById('val' + id.toUpperCase());
  if (display) {
    display.textContent = value || '';
  }
}
