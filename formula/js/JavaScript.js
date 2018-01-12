var height;
var diameter;
var pi = "3.1415";
var width;

var formula;
var result;



while( true ){
    
formula = prompt('cylinder volume and area of the rectangle?');



if (formula == 'cylinder'){
	height = +prompt("Enter your height");
		if(height <= '0' || height == ""){
			alert("The number is negative or you missed the input. Start over again.")
			continue;
		}

	diameter = +prompt("Enter your diameter"); 
			if(diameter <= '0' || height == ""){
			alert("The number is negative or you missed the input. Start over again.")
			continue;
		}
    result = height * diameter * diameter / 4 * pi;
    alert(result);
    answer = confirm('Continue?')
    if(answer == false){
        continue;
    }
}



if(formula == 'rectangle'){
	height = +prompt ("Enter height rectangle?");
				if(height <= '0' || height == ""){
			alert("The number is negative or you missed the input. Start over again.")
			continue;
		}

	width = +prompt ("Enter width rectangle");
				if(width <= '0' || height == ""){
			alert("The number is negative or you missed the input. Start over again.")
			continue;
		}

    result = height * width;
    alert(result);
   answer = confirm ('Do you wont continue?')
    if(answer == false){
        break;
    }
}

else{
	alert("Not correct input! You must enter a cylinder or a rectangle! Start over again.")
	continue;
}
}

