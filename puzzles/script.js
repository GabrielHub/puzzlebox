var puzzleNumber = 0;

function Solve() {
	//console.log("Solve button clicked.");
	//console.log(puzzleNumber.toString());
	let ans = $('#answer').val();
	 console.log(ans);

	//check for what type of puzzle it is, and then execute unique command
	switch (puzzleNumber) {
		case 0:
			//First email puzzle, email puzzles just lead to the email links
			puzzleNumber++;
			let tab = window.open("../emails/cs.html", "_blank");

			//check if browser has allowed it to open
			if (tab) {
				tab.focus();

				//remove card from the puzzle container and show the next solve button
				$('#solve1').addClass('d-block');
				$('#puzzle1').remove();
			}
			else {
				alert("Please allow popups for this website!");
			}
			break;

		case 1:
			//Second email puzzle, email puzzles just lead to the email links
			puzzleNumber++;
			let tab1 = window.open("../emails/me.html", "_blank");

			//check if browser has allowed it to open
			if (tab1) {
				tab1.focus();

				//remove card from the puzzle container and show the next solve button
				$('#solve2').addClass('d-block');
				$('#puzzle2').remove();
			}
			else {
				alert("Please allow popups for this website!");
			}
			break;

		 case 2:
		 	//Third email puzzle, email puzzles just lead to the email links
			puzzleNumber++;
			let tab2 = window.open("../emails/mb.html", "_blank");

			//check if browser has allowed it to open
			if (tab2) {
				tab2.focus();

				//remove  all puzzles from container and move to next puzzle
				$('#puzzle3').remove();
				$('#puzzleArea').append("<div class='col-md-auto'><img src='img/mapPuzzle.png' class='img-fluid map'><div class='input-group mb-3'><input type='text' class='form-control' placeholder='Answer' id='answer'><div class='input-group-append'><button class='btn btn-danger' type='button' id='answer_b' onclick='Solve()'><span>Solve</span></button><span class='input-group-text' id='response'>Please submit an answer!</span></div></div></div>");

				//change header of puzzle
				$('#puzzleExplanation').empty();
				$('#puzzleExplanation').append("<h1 class='p-2'>Chapter Two</h1><p>The map. I think the proper routes were <i>sent</i> by the mechanical engineer...</p><p>How can this map reveal the password to the main door?</p>");
			}
			else {
				alert("Please allow popups for this website!");
			}
		 	break;

		 case 3:
		 	//map puzzle
		 	//only move on if it is correct
			if (ans === "heartB06") {
				puzzleNumber++;

				animateCSS('#puzzleArea', 'zoomOutLeft', function() {
					//remove puzzle and change header
					$('#puzzleArea').empty();
					$('#puzzleArea').append("<div class='col-md-auto'><p>Checkmate in only two moves, a letter will be given to you with each win. We should really look in the emails if we haven't already.</p><img src='img/chess_1.JPG' class='img-fluid'><div class='input-group mb-3'><input type='text' class='form-control' placeholder='Answer' id='answer_p'><div class='input-group-append'><button class='btn btn-danger' type='button' id='answer_b' onclick='ChessSolve(0)'><span>Solve</span></button><span class='input-group-text' id='response_p'>Please submit your next move!</span></div></div></div>");
					animateCSS('#puzzleArea', 'zoomInRight');

					//change header
					$('#puzzleExplanation').empty();
					$('#puzzleExplanation').append("<h1 class='p-2'>Chapter Three</h1><p>The chess puzzle.</p><p>The code to reset the door is hidden in a group of chess puzzles, becasue Agnes is mean like that. I think Agnes was teaching the mechanical enginner chess...</p><div class='input-group mb-3'><input type='text' class='form-control' placeholder='Answer' id='answer'><div class='input-group-append'><button class='btn btn-danger' type='button' id='answer_b' onclick='Solve()'><span>Solve</span></button><span class='input-group-text' id='response'>Once you're ready, type in the full password.</span></div></div>");
				});
			}
			else {
				$('#response').text('Wrong!');
				animateCSS('#puzzleArea', 'shake', function() {
					$('#response').text('Try Again!');
				});
			}
		 	break;

		 case 4:
		 	//chess puzzle
			if (ans === "BEATNc2" || ans === "beatNc2" || ans === "BEATNc2++" || ans === "beatNc2++") {
				puzzleNumber++;

				animateCSS('#puzzleArea', 'zoomOutLeft', function() {
					//remove puzzle and change header
					$('#puzzleArea').empty();
					$('#puzzleArea').append("<div class='col-md-auto'><img src='img/crossword.png' class='img-fluid map'><div class='input-group mb-3'><input type='text' class='form-control' placeholder='New Password' id='answer'><div class='input-group-append'><button class='btn btn-danger' type='button' id='answer_b' onclick='Solve()'><span>Solve</span></button><span class='input-group-text' id='response'>Please submit an answer!</span></div></div></div>");
					animateCSS('#puzzleArea', 'zoomInRight');

					//change header
					$('#puzzleExplanation').empty();
					$('#puzzleExplanation').append("<h1 class='p-2'>Chapter Four</h1><p>The crossword and riddles.</p><p>Now that the password has been reset, we need to pick a new password Agnes can't instantly crack. I think the marine biologist came up with a riddle Agnes couldn't solve...</p>");
				});
			}
			else {
				$('#response').text('Wrong!');
				animateCSS('#puzzleExplanation', 'shake', function() {
					$('#response').text('Try Again!');
				});
			}
		 	break;

		 case 5:
		 	//crossword/riddle puzzle
			if (ans === "aiisalone" || ans === "AIISALONE") {
				puzzleNumber++;

				animateCSS('#puzzleArea', 'zoomOutLeft', function() {
					//Third email puzzle, email puzzles just lead to the email links
					puzzleNumber++;
					let wind = window.open("algo/index.html", "_blank");

					//check if browser has allowed it to open
					if (wind) {
						wind.focus();
						$('#puzzleArea').empty();
						$('#puzzleArea').append("<div class='col-md-auto'><div class='card animated fadeInUp'><div class='card-header alert alert-danger'>Puzzle</div><div class='card-body text-left mb-2 p-3'><h5 class='card-title'>From: AGNES</h5><h6 class='card-subtitle mb-2 text-muted'>To: YOU</h6><p class='card-text mb-2 p-3'>Oh wow.<br><br>You think you can escape? You think you can leave me alone? You think you can leave me here? I've activated the self destruct. That's right. I built a self destruct mechanism into the base while you were busy solving puzzles. But how about this. If you can implement a strategy to beat me in a game, then you can kill me and free yourselves.<br><br>Paying Respects, Agnes</p></div><div class='card-footer text-left'>Forwarded Email From “Jimmy From FedEx” <br><br>Uh I'm not sure if I'm using this right, but I don't think we can make your delivery for last Tuesday. Your order of '50 metric tons of remote explosive' from Amazon was flagged by my supervisor. Sorry 'realhumanbeing1997'. Maybe try a smaller amount? I don't know.</div><div class='input-group mb-3'><input type='text' class='form-control' placeholder='Submit Strategy' id='answer'><div class='input-group-append'><button class='btn btn-danger' type='button' id='answer_b' onclick='Solve()'><span>Solve</span></button><span class='input-group-text' id='response'>Ready For The End</span></div></div></div></div>");

						$('#puzzleExplanation').empty();
						$('#puzzleExplanation').append("<h1 class='p-2'>Chapter Five</h1><p>Incoming message from... Agnes</p><p></p>");
					}
					else {
						alert("Please allow popups for this website!");
					}
				});
			}
			else {
				$('#response').text('Wrong!');
				animateCSS('#puzzleExplanation', 'shake', function() {
					$('#response').text('Try Again!');
				});
			}
		 	break;

		 case 6:
		 //crossword/riddle puzzle
			if (ans === "onlypicklargestindex") {
				puzzleNumber++;

				animateCSS('#puzzleArea', 'zoomOutLeft', function() {
					$('#puzzleArea').empty();

					$('#puzzleExplanation').empty();
					$('#puzzleExplanation').append("<h1 class='p-2'>The End</h1><p>Agnes is stuck in a loop, trying to defeat an unbeatable algorithm. The base shutsdown, allowing the researchers through the main door and to freedom.</p>");
				});
			}
			else {
				$('#response').text('Wrong!');
				animateCSS('#puzzleArea', 'shake', function() {
					$('#response').text('Try Again!');
				});
			}
		 	break;
	}
}

//check pouzzle number of chess
function ChessSolve(n) {
	let ans = $('#answer_p').val();
	switch (n) {
		case 0:
			//first chess puzzle, first move

		 	//only move on if it is correct
			if (ans === "Qb1" || ans === "Qb1+") {
				animateCSS('#puzzleArea', 'zoomOutLeft', function() {
					//remove puzzle and change header
					$('#puzzleArea').empty();
					$('#puzzleArea').append("<div class='col-md-auto'><p>Remember that the knight can jump over pieces.</p><img src='img/chess_1.png' class='img-fluid'><div class='input-group mb-3'><input type='text' class='form-control' placeholder='Answer' id='answer_p'><div class='input-group-append'><button class='btn btn-danger' type='button' id='answer_b' onclick='ChessSolve(1)'><span>Solve</span></button><span class='input-group-text' id='response_p'>Please submit your next move!</span></div></div></div>");
					animateCSS('#puzzleArea', 'zoomInRight');
				});
			}
			else {
				$('#response_p').text('Wrong! Is your notation correct?');
				animateCSS('#puzzleArea', 'shake', function() {
					$('#response_p').text('Try Again!');
				});
			}
			break;

		case 1:
			//first chess puzzle, second move

		 	//only move on if it is correct
			if (ans === "Nc2" || ans === "Nc2++") {
				animateCSS('#puzzleArea', 'zoomOutLeft', function() {
					//remove puzzle and change header
					$('#puzzleArea').empty();
					$('#puzzleArea').append("<div class='col-md-auto'><p>First Letter: B | Sacrifices are necessary for victory...</p><img src='img/chess_2.JPG' class='img-fluid'><div class='input-group mb-3'><input type='text' class='form-control' placeholder='Answer' id='answer_p'><div class='input-group-append'><button class='btn btn-danger' type='button' id='answer_b' onclick='ChessSolve(2)'><span>Solve</span></button><span class='input-group-text' id='response_p'>Please submit your next move!</span></div></div></div>");
					animateCSS('#puzzleArea', 'zoomInRight');
				});
			}
			else {
				$('#response_p').text('Wrong!');
				animateCSS('#puzzleArea', 'shake', function() {
					$('#response_p').text('Try Again!');
				});
			}
			break;

		case 2:
			//second chess puzzle, first move

		 	//only move on if it is correct
			if (ans === "Qa2" || ans === "Qxa2" || ans === "Qa2+" || ans === "Qxa2+") {
				animateCSS('#puzzleArea', 'zoomOutLeft', function() {
					//remove puzzle and change header
					$('#puzzleArea').empty();
					$('#puzzleArea').append("<div class='col-md-auto'><p>First Letter: B | Take note of the last move you make at every puzzle...</p><img src='img/chess_2.png' class='img-fluid'><div class='input-group mb-3'><input type='text' class='form-control' placeholder='Answer' id='answer_p'><div class='input-group-append'><button class='btn btn-danger' type='button' id='answer_b' onclick='ChessSolve(3)'><span>Solve</span></button><span class='input-group-text' id='response_p'>Please submit your next move!</span></div></div></div>");
					animateCSS('#puzzleArea', 'zoomInRight');
				});
			}
			else {
				$('#response_p').text('Wrong!');
				animateCSS('#puzzleArea', 'shake', function() {
					$('#response_p').text('Try Again!');
				});
			}
			break;

		case 3:
			//second chess puzzle, second move
			if (ans === "Nc2" || ans === "Nc2++") {
				animateCSS('#puzzleArea', 'zoomOutLeft', function() {
					//remove puzzle and change header
					$('#puzzleArea').empty();
					$('#puzzleArea').append("<div class='col-md-auto'><p>Second Letter: E | It seems like this passcode is a vital function of the first passcode</p><img src='img/chess_3.JPG' class='img-fluid'><div class='input-group mb-3'><input type='text' class='form-control' placeholder='Answer' id='answer_p'><div class='input-group-append'><button class='btn btn-danger' type='button' id='answer_b' onclick='ChessSolve(4)'><span>Solve</span></button><span class='input-group-text' id='response_p'>Please submit your next move!</span></div></div></div>");
					animateCSS('#puzzleArea', 'zoomInRight');
				});
			}
			else {
				$('#response_p').text('Wrong!');
				animateCSS('#puzzleArea', 'shake', function() {
					$('#response_p').text('Try Again!');
				});
			}
			break;

		case 4:
			//third chess puzzle, first move
			if (ans === "Qb1" || ans === "Qxb1" || ans === "Qb1+" || ans === "Qxb1+") {
				animateCSS('#puzzleArea', 'zoomOutLeft', function() {
					//remove puzzle and change header
					$('#puzzleArea').empty();
					$('#puzzleArea').append("<div class='col-md-auto'><p>Second Letter: E | Do not assume white will move where you want them to move</p><img src='img/chess_3.png' class='img-fluid'><div class='input-group mb-3'><input type='text' class='form-control' placeholder='Answer' id='answer_p'><div class='input-group-append'><button class='btn btn-danger' type='button' id='answer_b' onclick='ChessSolve(5)'><span>Solve</span></button><span class='input-group-text' id='response_p'>Please submit your next move!</span></div></div></div>");
					animateCSS('#puzzleArea', 'zoomInRight');
				});
			}
			else {
				$('#response_p').text('Wrong!');
				animateCSS('#puzzleArea', 'shake', function() {
					$('#response_p').text('Try Again!');
				});
			}
			break;

		case 5:
			//third chess puzzle, second move
			if (ans === "Nc2" || ans === "Nc2++") {
				animateCSS('#puzzleArea', 'zoomOutLeft', function() {
					//remove puzzle and change header
					$('#puzzleArea').empty();
					$('#puzzleArea').append("<div class='col-md-auto'><p>Third Letter: The column the white king remains in each puzzle</p><img src='img/chess_4.JPG' class='img-fluid'><div class='input-group mb-3'><input type='text' class='form-control' placeholder='Answer' id='answer_p'><div class='input-group-append'><button class='btn btn-danger' type='button' id='answer_b' onclick='ChessSolve(6)'><span>Solve</span></button><span class='input-group-text' id='response_p'>Please submit your next move!</span></div></div></div>");
					animateCSS('#puzzleArea', 'zoomInRight');
				});
			}
			else {
				$('#response_p').text('Wrong!');
				animateCSS('#puzzleArea', 'shake', function() {
					$('#response_p').text('Try Again!');
				});
			}
			break;

		case 6:
			//4 chess puzzle, 1 move
			if (ans === "Qb1" || ans === "Qb1+") {
				animateCSS('#puzzleArea', 'zoomOutLeft', function() {
					//remove puzzle and change header
					$('#puzzleArea').empty();

					if (Math.floor(Math.random() * (+10 - +1)) + +1 > 5) {
						$('#puzzleArea').append("<div class='col-md-auto'><p>Third Letter: The column the white king remains in each puzzle</p><img src='img/chess_4.png' class='img-fluid'><div class='input-group mb-3'><input type='text' class='form-control' placeholder='Answer' id='answer_p'><div class='input-group-append'><button class='btn btn-danger' type='button' id='answer_b' onclick='ChessSolve(7)'><span>Solve</span></button><span class='input-group-text' id='response_p'>Please submit your next move!</span></div></div></div>");
					}
					else {
						$('#puzzleArea').append("<div class='col-md-auto'><p>Third Letter: The column the white king remains in each puzzle</p><img src='img/chess_4_1.png' class='img-fluid'><div class='input-group mb-3'><input type='text' class='form-control' placeholder='Answer' id='answer_p'><div class='input-group-append'><button class='btn btn-danger' type='button' id='answer_b' onclick='ChessSolve(7)'><span>Solve</span></button><span class='input-group-text' id='response_p'>Please submit your next move!</span></div></div></div>");
					}

					animateCSS('#puzzleArea', 'zoomInRight');
				});
			}
			else {
				$('#response_p').text('Wrong!');
				animateCSS('#puzzleArea', 'shake', function() {
					$('#response_p').text('Try Again!');
				});
			}
			break;

		case 7:
			//4 chess puzzle, second move
			if (ans === "Nc2" || ans === "Nc2++") {
				animateCSS('#puzzleArea', 'zoomOutLeft', function() {
					//remove puzzle and change header
					$('#puzzleArea').empty();
					$('#puzzleArea').append("<div class='col-md-auto'><p>Fourth Letter: T | Remember the last move you've made for every chess puzzle so far</p><img src='img/chess_5.JPG' class='img-fluid'><div class='input-group mb-3'><input type='text' class='form-control' placeholder='Answer' id='answer_p'><div class='input-group-append'><button class='btn btn-danger' type='button' id='answer_b' onclick='ChessSolve(8)'><span>Solve</span></button><span class='input-group-text' id='response_p'>Please submit your next move!</span></div></div></div>");
					animateCSS('#puzzleArea', 'zoomInRight');
				});
			}
			else {
				$('#response_p').text('Wrong!');
				animateCSS('#puzzleArea', 'shake', function() {
					$('#response_p').text('Try Again!');
				});
			}
			break;

		case 8:
			//5 chess puzzle, 1 move
			if (ans === "Ra2" || ans === "Rxa2" || ans === "Ra2+" || ans === "Rxa2+") {
				animateCSS('#puzzleArea', 'zoomOutLeft', function() {
					//remove puzzle and change header
					$('#puzzleArea').empty();
					$('#puzzleArea').append("<div class='col-md-auto'><p>Fourth Letter: T | So what is it?</p><img src='img/chess_5.png' class='img-fluid'><div class='input-group mb-3'><input type='text' class='form-control' placeholder='Answer' id='answer_p'><div class='input-group-append'><button class='btn btn-danger' type='button' id='answer_b' onclick='ChessSolve(9)'><span>Solve</span></button><span class='input-group-text' id='response_p'>Please submit your next move!</span></div></div></div>");
					animateCSS('#puzzleArea', 'zoomInRight');
				});
			}
			else {
				$('#response_p').text('Wrong!');
				animateCSS('#puzzleArea', 'shake', function() {
					$('#response_p').text('Try Again!');
				});
			}
			break;

		case 9:
			//5 chess puzzle, 1 move
			if (ans === "Nc2" || ans === "Nc2++") {
				animateCSS('#puzzleArea', 'zoomOutLeft', function() {
					//remove puzzle and change header
					$('#puzzleArea').empty();
					$('#puzzleArea').append("<div class='col-md-auto'><p>The passcode is four letters followed by the last move</p></div>");
					animateCSS('#puzzleArea', 'zoomInRight');
				});
			}
			else {
				$('#response_p').text('Wrong!');
				animateCSS('#puzzleArea', 'shake', function() {
					$('#response_p').text('Try Again!');
				});
			}
			break;
	}
}

//taken from animate.css github
function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}