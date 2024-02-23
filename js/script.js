// Define function for the "Work" button
function work() {
    // Simulate a day of work
    // Roll for money earned (for example, between $50 and $100)
    var moneyEarned = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    
    // Roll for health lost (for example, between 10 and 20)
    var healthLost = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    
    // Update day count, money, and health status on the status bar
    updateStatusBar(moneyEarned, -healthLost);
    
    // Optionally, display a message in the game log
    addToGameLog("You worked hard and earned $" + moneyEarned + ". Your health decreased by " + healthLost + ".");
}

// Define function for the "Rest" button
function rest() {
    // Simulate a day of rest
    // Roll for health regained (for example, between 10 and 20)
    var healthRegained = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    
    // Update day count and health status on the status bar
    updateStatusBar(0, healthRegained);
    
    // Optionally, display a message in the game log
    addToGameLog("You took a rest and regained " + healthRegained + " health points.");
}

// Define function for the "New Game" button
function newGame() {
    // Reset day count, money, and health status on the status bar
    updateStatusBar(0, 100, true);
    
    // Optionally, clear the game log screen
    clearGameLog();
}

// Function to update the status bar
function updateStatusBar(moneyChange, healthChange, reset = false) {
    // Get current day, money, and health values
    var dayCount = parseInt(document.getElementById('dayCount').textContent.split(':')[1].trim());
    var money = parseInt(document.getElementById('money').textContent.split('$')[1].trim());
    var health = parseInt(document.getElementById('health').textContent.split(':')[1].trim());
    
    // Update day count
    if (reset) {
        dayCount = 1;
    } else {
        dayCount++;
    }
    
    // Update money and health
    money += moneyChange;
    health = Math.min(100, Math.max(0, health + healthChange)); // Ensure health stays within 0-100 range
    
    // Update status bar with new values
    document.getElementById('dayCount').textContent = "Day: " + dayCount;
    document.getElementById('money').textContent = "Money: $" + money;
    document.getElementById('health').textContent = "Health: " + health;
}

// Function to add a message to the game log
function addToGameLog(message) {
    var gameLogList = document.getElementById('gameLogList');
    var newListItem = document.createElement('li');
    newListItem.textContent = message;
    gameLogList.appendChild(newListItem);
}

// Function to clear the game log screen
function clearGameLog() {
    var gameLogList = document.getElementById('gameLogList');
    gameLogList.innerHTML = ''; // Remove all child elements
}

// Add event listeners to buttons
document.getElementById('workButton').addEventListener('click', work);
document.getElementById('restButton').addEventListener('click', rest);
document.getElementById('newGameButton').addEventListener('click', newGame);

// Optionally, set initial content for the status bar
window.onload = function() {
    // Set initial values for day count, money, and health
    document.getElementById('dayCount').textContent = "Day: 1";
    document.getElementById('money').textContent = "Money: $0";
    document.getElementById('health').textContent = "Health: 100";
};
