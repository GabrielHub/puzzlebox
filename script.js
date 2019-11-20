let lengthOfArray = [4, 6, 8, 10];
let numbers = []; //array of the entire number list
let numLength = 0; //keeps track of how many choosable numbers are left

//track total scores
let playerValue = 0;
let aiValue = 0;

//init buttons
$("#test").click(function() {
	SetNumbers();
});

$('#resetButton').click(function() {
	playerValue = 0;
	aiValue = 0;
	$('#ai_badge').text(aiValue.toString());
	$('#pl_badge').text(playerValue.toString());
	SetNumbers();
});

$('#resetButton2').click(function() {
	playerValue = 0;
	aiValue = 0;
	$('#ai_badge').text(aiValue.toString());
	$('#pl_badge').text(playerValue.toString());
	SetNumbers();
});


function SetNumbers() {
	//get a random even size of the array
	let size = lengthOfArray[Math.floor(Math.random() * lengthOfArray.length)];

	//max and min values for random numbers
	let max = 10;
	let min = 1;

	//clear the previous numbers
	$("#numbers").empty();
	numbers = [];

	//get the random number, and also add buttons to the div
	for (let i = 0; i < size; i++) {
		let r_num = Math.floor(Math.random() * (max - min) + min); //random value
		let $input = $("<button class='btn mx-1 p-2' id='r_num'></button").text(r_num); //create button
		numbers.push(r_num); //add to array
		$input.appendTo($("#numbers")); //attach
	}

	numLength = numbers.length;

	//make sure to remove and then reapply anytime a number is actually chosen
	$('#numbers button').first().click(PlayerChooses);
	$('#numbers button').last().click(PlayerChooses);
}

function PlayerChooses() {
	//add border to show who chose
	$(this).addClass('border-bottom  border-primary');

	//display total value
	playerValue += parseInt($(this).text());
	$('#pl_badge').text(playerValue.toString());

	//remove click event, change id, lower size
	$(this).unbind();
	$(this).attr("id", "usedButton");
	numLength--;

	//remove functions, then reapply to new first and last elements
	$('#numbers #r_num').first().unbind();
	$('#numbers #r_num').last().unbind();

	$('#numbers #r_num').first().click(PlayerChooses);
	$('#numbers #r_num').last().click(PlayerChooses);

	//AI logic
	if (parseInt($('#numbers #r_num').first().text()) >= parseInt($('#numbers #r_num').last().text())) {
		AIChooses($('#numbers #r_num').first());
	}
	else {
		AIChooses($('#numbers #r_num').last());
	}
}

function AIChooses(n) {
	//passed in the larger number, always select that one 

	//add border to show who chose
	n.addClass('border-bottom  border-success');

	//display total value
	aiValue += parseInt(n.text());
	$('#ai_badge').text(aiValue.toString());

	//remove click event, change id, lower size
	n.unbind();
	n.attr("id", "usedButton");
	numLength--;

	//remove functions, then reapply to new first and last elements
	$('#numbers #r_num').first().unbind();
	$('#numbers #r_num').last().unbind();

	$('#numbers #r_num').first().click(PlayerChooses);
	$('#numbers #r_num').last().click(PlayerChooses);

	if (numLength == 0) {
		let winStatement = "";

		//win / lose state
		if (aiValue >= playerValue) {
			winStatement = "AI wins, try again!";
		}
		else {
			winStatement = "You've won! But can you win everytime?";
		}

		//Activate modal
		$('#winContent').text(winStatement);
		$('#exampleModal').modal();
	}
}