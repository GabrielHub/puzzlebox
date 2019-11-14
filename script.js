let lengthOfArray = [6, 8, 10, 12];
let numbers = [];

let playerValue = 0;
let aiValue = 0;

//add the inital numbers

$("#test").click(function() {
	SetNumbers();
});

function SetNumbers() {
	//get a random even size of the array
	let size = lengthOfArray[Math.floor(Math.random() * lengthOfArray.length)];

	//max and min values for random numbers
	let max = 98;
	let min = 1;

	//clear the previous numbers
	$("#numbers").empty();
	numbers = [];

	//get the random number, and also add buttons to the div
	for (let i = 0; i < size; i++) {
		let r_num = Math.floor(Math.random() * (max - min) + min); //random value
		let $input = $("<button class='btn mx-1 p-2' id='r_num_" + i + "'></button").text(r_num); //create button
		numbers.push(r_num); //add to array
		$input.appendTo($("#numbers")); //attach
	}

	//make sure to remove and then reapply anytime a number is actually chosen
	$('#numbers button').first().click(PlayerChooses);
	$('#numbers button').last().click(PlayerChooses);
}

function PlayerChooses() {
	console.log($(this).text());

	//add border to show how chose
	$(this).addClass('border-bottom  border-primary');

	//display total value
	playerValue += parseInt($(this).text());
	$('#pl_badge').text(playerValue.toString());

	//remove the click event
	$(this).unbind();
}

function AIChooses() {

}