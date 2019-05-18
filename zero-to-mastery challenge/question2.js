const answer = (arr, num) => {

	for(let i = 0 ; i < arr.length - 1 ; i++){
		for(let j = i + 1; j < arr.length ; j++){
			if(arr[i] + arr[j] === num){
				return [arr[i], arr[j]];
			}
		}
	}

	return "No match. Try a different number";
}

answer([1,2,3], 4);

