/* let currentPlayer = 1; 
let scores = [0,0];

document.getElementById("roll button").addEventListener("click", function() {
    


    const dice = document.getElementById(`dice${currentPlayer}`);
    const score = document.getElementById(`score${currentPlayer}`);
    const result = document.getElementById("result");

    //add rolling animation 

    dice.classList.add('roll-animation');

    setTimeout(() => {

        const randomNumber = Math.floor(Math.random() * 6) + 1;
        dice.src = `dice${randomNumber}.png`
        scores[currentPlayer - 1] += randomNumber;
        score.textContent = `score: $(scores[currentPlayer - 1])`;

        result.textContent = `Player ${currentPlayer} rolled a ${randomNumber}!`;

        //remove the rolling animation class

        dice.classList.remove('roll-animation');

        //switch to the other player

        currentPlayer = currentPlayer === 1 ? 2:1 ;
    }, 1000); 
    
} );

 */
/* 
let currentPlayer = 1;
let scores = [0, 0];

document.getElementById("rollButton").addEventListener("click", function() {
    const dice = document.getElementById(`dice0${currentPlayer}`);
    const score = document.getElementById(`score0${currentPlayer}`);
    const result = document.getElementById("result");
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const diceImages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
    
    
    dice.src = diceImages[randomNumber - 1];
    scores[currentPlayer - 1] += randomNumber;
    score.textContent = `Score: ${scores[currentPlayer - 1]}`;
    
    result.textContent = `Player 0${currentPlayer} rolled a ${randomNumber}!`;

    // Switch to the other player
    currentPlayer = currentPlayer === 1 ? 2 : 1;
}); */


let currentPlayer = 1;
let scores = [0, 0];

document.getElementById("rollButton").addEventListener("click", function() {
    const dice = document.getElementById(`dice0${currentPlayer}`);
    const score = document.getElementById(`score0${currentPlayer}`);
    const result = document.getElementById("result");
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const diceImages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
    
    // Remove the roll class to reset the animation
    dice.classList.remove("roll");

    // Timeout to delay adding the roll class to trigger animation
    setTimeout(() => {
        dice.src = diceImages[randomNumber - 1];
        scores[currentPlayer - 1] += randomNumber;
        score.textContent = `Score: ${scores[currentPlayer - 1]}`;

        result.textContent = `Player 0${currentPlayer} rolled a ${randomNumber}!`;

        // Switch to the other player
        currentPlayer = currentPlayer === 1 ? 2 : 1;

        // Add the roll class to trigger animation
        dice.classList.add("roll");
    }, 100); // Delay to allow for reset of animation
});
