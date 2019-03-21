
function calculateHours(timeIn, timeOut){
		// if(isUserLoggedIn(userId)){
			var runningTime = calculateRunningTime(timeIn);
		// }
		// calculate total hours for given time frame
	// timeIn to timeOut + runningTime
	var previousHours = timeOut - timeIn;
	return runningTime + previousHours;
}

function isUserLoggedIn(userId){
	// get isCheckedIn value from Database
}

function calculateRunningTime(timeIn){
	var runningTime = 0;
	var currentTime = 9;
	runningTime =  currentTime - timeIn;
	return runningTime;
}

console.log(calculateHours(0, 8));

