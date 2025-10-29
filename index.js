let homeScoreEl = document.querySelector("#home .score");
let guestScoreEl = document.querySelector("#guest .score");


function add(teamEl, points) {
	let currPoints = parseInt(teamEl.textContent);
	teamEl.textContent = currPoints + points;
}

