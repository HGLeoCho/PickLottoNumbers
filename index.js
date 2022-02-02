function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function pick_numbers(pick_num, max_num){
	var _array = [];
	var index = 0;
	// var isFirst = true;

	while(index < pick_num){
		inst_value = getRndInteger(1,max_num);
		var duplicate_found = false;
		for (let i = 0; i < _array.length; i++){
			if(inst_value == _array[i]){
				duplicate_found = true;
				break;
			}
		}
		if(duplicate_found == false){
			_array[index] = inst_value
			index += 1;
		}
	}
	return _array;
}

var selection = document.getElementById('selection');

selection.onchange = function(){
	var pick_number = selection.options[selection.selectedIndex].getAttribute('pick_number');
	var max_number = selection.options[selection.selectedIndex].getAttribute('max_number');
	
	text_result = "";
	result_array = [];
	
	if(pick_number > 5){
		// result_array = pick_numbers(pick_number, max_number);
		pick_numbers(pick_number, max_number).forEach(function (item, index) {
			text_result += '<tr><td>' + item + '</td></tr>';
		});
		document.getElementById("numbers").innerHTML = text_result;
		document.getElementById("numbers").style.visibility = "visible";

	} else if(pick_number == 5) {
		result_array = pick_numbers(pick_number, max_number);
		result_array.push("<br>", '<a>'+getRndInteger(1, 7)+'</a>');
		result_array.forEach(function (item, index) {
			text_result += '<tr><td>' + item + '</td></tr>';
		});
		document.getElementById("numbers").innerHTML = text_result;
		document.getElementById("numbers").style.visibility = "visible";

	} else {
		document.getElementById("numbers").innerHTML = text_result;
		document.getElementById("numbers").style.visibility = "hidden";
	}
};

selection.onchange();

//    _array.forEach(function (item, index) {
//        console.log(item, index);
//    });
//    console.log("index is " + index + "\n");
//}
