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

// const n1 = document.getElementById('n1');
// const n2 = document.getElementById('n2');
// const n3 = document.getElementById('n3');
// const n4 = document.getElementById('n4');
// const N1 = str(n1 + n2 + n3 + n4)
// const m1 = document.getElementById('m1');
// const m2 = document.getElementById('m2');
// const m3 = document.getElementById('m3');
// const m4 = document.getElementById('m4');

// const N = document.getElementById('valn')
// N.textContent = N1 ;
const fields = ['x1', 'x2', 'y', 'z', 'p', 'nq','nqq','nqqq','nqqqq','mq','mqq','mqqq','mqqqq', 't' ,'k','l','s'];

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

// Get all input boxes that need auto-shifting
const inputBoxes = document.querySelectorAll('.input-box');
const inputBoxes1 = document.querySelectorAll('.input-box1'); // For the marks input

// Combine all relevant input boxes into a single array
const allInputBoxes = [...inputBoxes, ...inputBoxes1];

// Function to handle input and shift focus
function handleInputShift(event) {
    const currentInput = event.target;
    // Check if the input box has a maxlength of 1 (for single character inputs)
    // or if it's the specific 'mark' input which has a maxlength of 3 but we still want to shift
    const isSingleCharInput = currentInput.maxLength === 1;
    const isMarkInput = currentInput.id === 'mark';

    // Only shift focus if a character has been entered and it's a single character input,
    // or if it's the 'mark' input and it's not full yet
    if ((isSingleCharInput && currentInput.value.length === 1) || (isMarkInput && currentInput.value.length > 0 && currentInput.value.length < currentInput.maxLength)) {
        // Find the index of the current input box in the combined array
        const currentIndex = allInputBoxes.indexOf(currentInput);

        // If there's a next input box, focus on it
        if (currentIndex < allInputBoxes.length - 1) {
            allInputBoxes[currentIndex + 1].focus();
        }
    }
}

// Attach the event listener to each relevant input box
allInputBoxes.forEach(input => {
    input.addEventListener('input', handleInputShift);
});

// Optional: Add a feature to allow backspace to go to the previous input box
function handleKeydownShift(event) {
    const currentInput = event.target;
    if (event.key === 'Backspace' && currentInput.value.length === 0) {
        const currentIndex = allInputBoxes.indexOf(currentInput);
        if (currentIndex > 0) {
            allInputBoxes[currentIndex - 1].focus();
        }
    }
}

// Attach the keydown event listener for backspace functionality
allInputBoxes.forEach(input => {
    input.addEventListener('keydown', handleKeydownShift);
});

class Calculator {
            constructor() {
                this.display = document.getElementById('calculatorDisplay');
                this.modal = document.getElementById('calculatorModal');
                this.icon = document.getElementById('calculatorIcon');
                
                this.currentInput = '0';
                this.previousInput = '';
                this.operator = '';
                this.waitingForOperand = false;
                
                this.init();
            }
            
            init() {
                // Event listeners
                this.icon.addEventListener('click', () => this.openCalculator());
                this.modal.addEventListener('click', (e) => {
                    if (e.target === this.modal) this.closeCalculator();
                });
                
                // Button event listeners
                document.querySelectorAll('.calc-button').forEach(button => {
                    button.addEventListener('click', (e) => this.handleButtonClick(e));
                });
                
                // Keyboard support
                document.addEventListener('keydown', (e) => this.handleKeydown(e));
                
                this.updateDisplay();
            }
            
            openCalculator() {
                this.modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
            
            closeCalculator() {
                this.modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
            
            handleButtonClick(e) {
                const button = e.target;
                const action = button.dataset.action;
                const value = button.dataset.value;
                
                if (action) {
                    this.handleAction(action);
                } else if (value !== undefined) {
                    this.inputValue(value);
                }
            }
            
            handleKeydown(e) {
                if (!this.modal.classList.contains('active')) return;
                
                e.preventDefault();
                
                if (e.key >= '0' && e.key <= '9') {
                    this.inputValue(e.key);
                } else if (e.key === '.') {
                    this.inputValue('.');
                } else if (e.key === '+') {
                    this.handleAction('add');
                } else if (e.key === '-') {
                    this.handleAction('subtract');
                } else if (e.key === '*') {
                    this.handleAction('multiply');
                } else if (e.key === '/') {
                    this.handleAction('divide');
                } else if (e.key === 'Enter' || e.key === '=') {
                    this.handleAction('calculate');
                } else if (e.key === 'Escape') {
                    this.closeCalculator();
                } else if (e.key === 'Backspace') {
                    this.handleAction('clear');
                }
            }
            
            inputValue(value) {
                if (value === '.' && this.currentInput.includes('.')) {
                    return;
                }
                
                if (this.waitingForOperand) {
                    this.currentInput = value === '.' ? '0.' : value;
                    this.waitingForOperand = false;
                } else {
                    this.currentInput = this.currentInput === '0' ? (value === '.' ? '0.' : value) : this.currentInput + value;
                }
                
                this.updateDisplay();
            }
            
            handleAction(action) {
                switch (action) {
                    case 'clear':
                        this.clear();
                        break;
                    case 'calculate':
                        this.calculate();
                        break;
                    case 'add':
                    case 'subtract':
                    case 'multiply':
                    case 'divide':
                        this.setOperator(action);
                        break;
                    case 'save':
                        this.saveResult();
                        break;
                    case 'close':
                        this.closeCalculator();
                        break;
                }
            }
            
            clear() {
                this.currentInput = '0';
                this.previousInput = '';
                this.operator = '';
                this.waitingForOperand = false;
                this.updateDisplay();
            }
            
            setOperator(nextOperator) {
                if (this.previousInput === '') {
                    this.previousInput = this.currentInput;
                } else if (this.operator) {
                    const result = this.performCalculation();
                    this.currentInput = String(result);
                    this.previousInput = this.currentInput;
                }
                
                this.waitingForOperand = true;
                this.operator = nextOperator;
                this.updateDisplay();
            }
            
            calculate() {
                if (this.previousInput !== '' && this.operator && !this.waitingForOperand) {
                    const result = this.performCalculation();
                    this.currentInput = String(result);
                    this.previousInput = '';
                    this.operator = '';
                    this.waitingForOperand = true;
                    this.updateDisplay();
                }
            }
            
            performCalculation() {
                const prev = parseFloat(this.previousInput);
                const current = parseFloat(this.currentInput);
                
                if (isNaN(prev) || isNaN(current)) return current;
                
                switch (this.operator) {
                    case 'add':
                        return prev + current;
                    case 'subtract':
                        return prev - current;
                    case 'multiply':
                        return prev * current;
                    case 'divide':
                        return current !== 0 ? prev / current : 0;
                    default:
                        return current;
                }
            }
            
            saveResult() {
                // You can implement save functionality here
                // For now, we'll just copy to clipboard
                navigator.clipboard.writeText(this.currentInput).then(() => {
                    // Visual feedback
                    const saveButton = document.querySelector('[data-action="save"]');
                    const originalText = saveButton.textContent;
                    saveButton.textContent = 'Saved!';
                    saveButton.style.background = 'linear-gradient(145deg, #20c997, #17a085)';
                    
                    setTimeout(() => {
                        saveButton.textContent = originalText;
                        saveButton.style.background = '';
                    }, 1000);
                }).catch(() => {
                    console.log('Could not save to clipboard');
                });
            }
            
            updateDisplay() {
                this.display.value = this.currentInput;
            }
        }
        
        // Initialize calculator when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            new Calculator();
        });