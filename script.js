

//================ Task 1 ==============================
        // Create a function (rollDice)
        // Roll Two "dice" one for the player and one for the computer
        // Use one variables for the (player) and one for the (computer)
        // (use a random number from 1-6 to represent a dice)
        // If the player's dice roll is higher than the computer dice roll,
        // console.log("PLAYER WINS")
        // otherwise, log ("COMPUTER WINS")
        // Use a ternary to check for the winner
        // ----- After testing it, remove the console.log()
        // leaving just the string "PLAYER WINS" or "COMPUTER WINS" and save it to a variable (winner)
        // FINALLY: return all three variables using an array
        // return [VALUE1, VALUE2, VALUE3]
        // ============ Task 2 ==============================
       // Let's update our UI (User Interface)
       // Create a function (displayScore)
       // Create a new a div displaying:
       // Computer Score: , Player Score:  & the Winner:
       // so there is a running record of game data.
       // Append the new div to the parent div on the HTML.
        let results;
        
        const rolltheDice = () => {
            let player = Math.ceil(Math.random() * 6)
            let computer = Math.ceil(Math.random() * 6)
            console.log("Player:" , player);
            console.log("Computer:" , computer);
            //console.log(player > computer ? "PLAYER WINS" : "COMPUTER WINS")
            let winner = " ";
            player == computer
            ? /*If tied*/ `It's a tie`
            : player > computer
            ? /*If player wins*/ `Player wins!`
            : /*If computr wins*/ `Computer wins!`;
           results = [player, computer, winner];
           return(results);
        };
        rolltheDice()
        //console.log(results);
        
      const playGameBtn = document.querySelector('#play-game');
      const resetBtn = document.querySelector('#reset');
      //resetBtn.addEventListener('click', () => {
        //console.log("Reset");
        computerScore = 0;
        playerScore = 0;
       
      const displayScore = (results) => {
        //const results = rolltheDice()
        const div = document.createElement('div')
        div.textContent =  
        `Computer Score: ${results[1]},
         Player score: ${results[0]},
         Winner: ${results[2]}`
        const winnerDiv = document.querySelector('#winner')
        winnerDiv.appendChild(div)
        console.log(div);

      };
      //displayScore()
   

      // Create a Reset Function (resetGame)
      // REMOVE the div with the game score, leaving just the parent div
      // creating a clean slate for a new set of games :)

      const resetGame = () => {
        //console.dir(document.querySelector('#winner').firstElementChild)
        document.querySelector('#winner').firstElementChild.remove()
      }

      // ==== Final Step =====================
      // Create a new function (playGame):
      // Call the rollDice and the displayScore function inside this function
      const playGame = () => {
        const results = rolltheDice() // gets the array
        displayScore(results)
      }

      // ========= Don't forget to add your events listeners
      // Attach the (playGame) function to the play game button
      // Attach the (resetGame) function to the reset button

      resetBtn.addEventListener('click', resetGame)
      playGameBtn.addEventListener('click', playGame)

      // ===== Now let's host this game in GITHUB PAGES and style it !!!