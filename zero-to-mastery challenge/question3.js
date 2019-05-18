//RGB Regex
const rgb_regex = /rgb\((([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),){2}([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\)$/gmi;

//HEX Regex
const hex_regex= /^#(([a-fA-F0-9]{3})|([a-fA-F0-9]{6}))$/gmi;

const isHex = (input) => {

	hex_regex.lastIndex = 0; 

	if(hex_regex.exec(input) != null){
		return true;
	}	
	return false;
}

const isRGB = (input) => {

	rgb_regex.lastIndex = 0; 	//reset regex

	if(rgb_regex.exec(input) != null){
		return true;
	}
	return false;
}

const toBase10 = (input) => {

	input = input.toUpperCase();
	if(input.length === 2){
		input[1] = input[0];
	}

	let num = 0;

	for(let i = 0 ; i < 2 ; i++){

		if(input.charCodeAt(i) >= 65){
			num += (input.charCodeAt(i)-65+10)*(16**(1-i));
		}
		else {
			num += Number(input[i])*(16**(1-i));
		}
	}

	return num;
}

const toBase16 = (input) => {

	let num = Number(input);
	let str = "";

	while(num != 0){

		let remainder = num % 16;
		num = Math.floor(num/16);

		if(remainder > 9){
			str += String.fromCharCode(65+remainder-10);
		}
		else {
			str += remainder;
		}
	}

	if(str.length === 0){
		return `00`;
	}
	else if(str.length === 1){
		return `0${str}`;
	}

	//reverse the str string
	
	let splitString = str.split("");
	let reverseArray = splitString.reverse();
	let joinArray = reverseArray.join("");

	return joinArray;
}
const convertToHex = (input) => {

	//Check if value is valid (RGB or HEX)

	if(!isRGB(input) && !isHex(input)){
		return `Your input is invalid.\n
				RGB form: rgb(x,y,z)\n
				HEX form: #ffffff`
	}
	else if(isHex(input)){
		return converToRGB(input);
	}
	//reset regex (otherwise will return null)
	rgb_regex.lastIndex = 0; 

	let rgb = rgb_regex.exec(input);

	//get rgb values
	let splitString = rgb[0].split(",");
	let value1 = splitString[0].substr(4);
	let value2 = splitString[1];
	let value3 = splitString[2].substr(0, splitString[2].length-1);

	//convert to hex values
	value1 = toBase16(value1); 
	value2 = toBase16(value2);
	value3 = toBase16(value3);

	return `#${value1}${value2}${value3}`;
}
const converToRGB = (input) => {

	//Check if value is valid (RGB or HEX)

	if(!isRGB(input) && !isHex(input)){
		return `Your input is invalid.\n
				RGB form: rgb(x,y,z)\n
				HEX form: #ffffff`
	}
	else if(isRGB(input)){
		return convertToHex(input);
	}

	//If it is HEX, do the following:

	let value1, value2, value3;

	if(input.length === 4){ //Case I
		
		 value1 = input[1];
		 value2 = input[2];
		 value3 = input[3];
	}
	else { //Case II
	
		 value1 = input[1] + input[2];
		 value2 = input[3] + input[4];
		 value3 = input[5] + input[6]; 
	}

	value1 = toBase10(value1);
	value2 = toBase10(value2);
	value3 = toBase10(value3);

	return `rgb(${value1},${value2},${value3})`;
}

// HEX Values Properties:

// Letters: A,B,C,D,E,F
// Digits: [0-9]
// '#' followed by 3-6 characters (letters/digits)

// RGB Properties:
// rgb(x,y,z) where x,y,z in the rage 0-255

