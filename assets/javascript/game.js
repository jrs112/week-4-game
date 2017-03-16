
    var yourScore = 0;
	var gameScore = 0;
	var wins = 0;
	var losses = 0;
	var imgRed = 0;
	var imgBlue = 0;
	var imgYellow = 0;
	var imgGreen = 0;

	function startGame() {
		yourScore = 0;
		imgRed = Math.floor((Math.random() * 12) + 1);
		imgBlue = Math.floor((Math.random() * 12) + 1);
		imgYellow = Math.floor((Math.random() * 12) + 1);
		imgGreen = Math.floor((Math.random() * 12) + 1);
		gameScore = Math.floor((Math.random() * 102) + 19);
		var scoreHtml = "<h3>" + yourScore + "</h3>";
		document.querySelector("#totalScore").innerHTML = scoreHtml;
		var gameScoreHtml = "<h3> Random Number: " + gameScore + "</h3>";
		document.querySelector("#compScore").innerHTML = gameScoreHtml;
		var scoreBoardHtml = "<h4>Wins: " + wins + "</h4>" +
		"<h4>Losses: " + losses + "</h4>";
		document.querySelector("#winsAndLosses").innerHTML = scoreBoardHtml;
		console.log("Red: " + imgRed);
		console.log("Blue: " + imgBlue);
		console.log("Yellow: " + imgYellow);
		console.log("Green: " + imgGreen);
		console.log("Game Score: " + gameScore);
		console.log("Your Score: " + yourScore);
		console.log("-----------");

	}

	function check() {
		if (yourScore === gameScore) {
			alert("You Win!");
			wins++;
			startGame();
		}
		if(yourScore > gameScore) {
			alert("You Lose!");
			losses++;
			startGame();
		}
	}

	$( ".red" ).click(function() {
		yourScore = yourScore + imgRed;
		var scoreHtml = "<h3>" + yourScore + "</h3>";
		document.querySelector("#totalScore").innerHTML = scoreHtml;
		check();
		console.log("wins: " + wins);
		console.log("losses: " + losses);
		console.log("Red: " + imgRed);
		console.log("Blue: " + imgBlue);
		console.log("Yellow: " + imgYellow);
		console.log("Green: " + imgGreen);
		console.log("Game Score: " + gameScore);
		console.log("Your Score: " + yourScore);
		console.log("-----------");

});

	$( ".blue" ).click(function() {
		yourScore = yourScore + imgBlue;
		var scoreHtml = "<h3>" + yourScore + "</h3>";
		document.querySelector("#totalScore").innerHTML = scoreHtml;
		check();
		console.log("wins: " + wins);
		console.log("losses: " + losses);
		console.log("Red: " + imgRed);
		console.log("Blue: " + imgBlue);
		console.log("Yellow: " + imgYellow);
		console.log("Green: " + imgGreen);
		console.log("Game Score: " + gameScore);
		console.log("Your Score: " + yourScore);
		console.log("-----------");

});

	$( ".yellow" ).click(function() {
		yourScore = yourScore + imgYellow;
		var scoreHtml = "<h3>" + yourScore + "</h3>";
		document.querySelector("#totalScore").innerHTML = scoreHtml;
		check();
		console.log("wins: " + wins);
		console.log("losses: " + losses);
		console.log("Red: " + imgRed);
		console.log("Blue: " + imgBlue);
		console.log("Yellow: " + imgYellow);
		console.log("Green: " + imgGreen);
		console.log("Game Score: " + gameScore);
		console.log("Your Score: " + yourScore);
		console.log("-----------");

});

	$( ".green" ).click(function() {
		yourScore = yourScore + imgGreen;
		var scoreHtml = "<h3>" + yourScore + "</h3>";
		document.querySelector("#totalScore").innerHTML = scoreHtml;
		check();
		console.log("wins: " + wins);
		console.log("losses: " + losses);
		console.log("Red: " + imgRed);
		console.log("Blue: " + imgBlue);
		console.log("Yellow: " + imgYellow);
		console.log("Green: " + imgGreen);
		console.log("Game Score: " + gameScore);
		console.log("Your Score: " + yourScore);
		console.log("-----------");

});


startGame();

