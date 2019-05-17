const sortByType = (arr) => {
	return arr.sort((a,b) => {
		if(typeof a === typeof b){
			return a-b;
		}
		if(typeof a < typeof b){
			return -1;
		}
		return 1;
	})
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

const divideByType = (arr) => {

	let intArray = arr.filter(item => {
		return typeof item === "number";
	});

	let stringArray = arr.filter(item => {
		return typeof item === "string";
	});

	let newArray = [];
	newArray.push(intArray, stringArray);

	return newArray;
}

const answer = (arr) => {

sortByType(arr);
arr = divideByType(arr);

for(let i = 0 ; i < arr.length ; i++){
	arr[i] = cleanArray(arr[i]);
	// debugger;
}

return arr;

}
const myArray = [1,2,4,591,392,"391",2,5,"10","2","1","1",1,20,20];

answer(myArray);
