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