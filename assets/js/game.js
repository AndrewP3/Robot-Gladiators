var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName);
console.log(enemyName.length);
console.log(enemyName[0]);
console.log(enemyName[3]);

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
    while(enemyHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    // if player choses to "skip" confrim and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSKIP = window.confirm("Are you sure you'd like to quit?");
    
        // if yes (true), leave fight
        if (confirmSKIP) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked" + enemyName + ". " + enemyName + " now has" + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

// award player money for winning
playerMoney = playerMoney + 20;

// leave while() loop since enemy is dead
  break;
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.")
}

// remove players's health by subtracting the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

 // check player's health
 if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    // leave while() loop if player is dead
    break;
    } else {
    window.alert(enemyName + " still has" + enemyHealth + " health left.");
   }
  }
};

// function to start a new game
var startGame = function() {
    for (var i = 0; i < enemyName.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyName = enemyName[i];

            enemyHealth = 50;

            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
}

 //after the loop ends, player is either out of health or enemies to fight, so run the endGame function
 endGame();

  // start the game when the page laods
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    fight(pickedEnemyName);

    // if player is still alive and we're not at the last enemy in the array
    if (playerhealth > 0 && i < enemyName.length - 1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        // if yes, take them to the store() function
        if (storeConfirm) {
            shop();
        }
    }
    // other logic remains the same...
};

// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of" + playerMoney + ".");
    }
    else {
        window.alert("The game has now ended. Let's see how you did!");
    }
}

var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', OR 'LEAVE' TO MAKE A CHOICE."
    );
};

// use switch to carry out action
switch (shopOptionPrompt) {
    case "REFILL": // new case
    case "refill":
        if (playerMoney >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");

        // increase health and decrease money
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
    }
    else {
        window.alert("You don't have enough money!")
    }

        break;
        case "UPGRADE": // new case
        case "upgrade":
        if (playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
        }
            
        // increase attack and decrease money
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
    }
    else {
        window.alert("You don't have enough money!")
    }

    break; 
        case "LEAVE": // new case
        case "leave":
            window.alert("Leaving the store. ");

        // do nothing, so function will end
        break;
        default:
            window.alert("You did not pick a valid option. Try again. ");

        // call shop() again to force player to pick a valid option
        shop()
        break;
}

// ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
    // restart the game
    startGame();
}
else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}