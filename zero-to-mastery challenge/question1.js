const sortArray = (arr) => {
	return arr.sort((a,b) => {return a-b});
}

const cleanArray = (arr) => {
	let newArr = [];
	let finalArr = [];
	newArr.push(arr[0]);
	let i = 1;

	while (i < arr.length){

		if(arr[i] === arr[i-1]){
			// debugger;
			newArr.push(arr[i]);
		}
		else {

			if(newArr.length < 2){
				finalArr.push(newArr[0]);
			}
			else {
				finalArr.push(newArr);
			}
			newArr = [];
			newArr.push(arr[i]);
		}

		i++;
	}

	if(newArr.length < 2){
				finalArr.push(newArr[0]);
			}
			else {
				finalArr.push(newArr);
			}

	return finalArr;
}


const answer = (arr) => {
	sortArray(arr);
	cleanArray(arr);
}

const myArray = [1, "2", "3", 2];

answer(myArray);