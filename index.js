function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var selection = document.getElementById('selection');

selection.onchange = function(){
	var pick_number = selection.options[selection.selectedIndex].getAttribute('pick_number');
	var max_number = selection.options[selection.selectedIndex].getAttribute('max_number');
	
	var _array = [];
	var index = 0;
	var isFirst = true;
	text_result = "";
	
	if(pick_number > 0){
		// while(index < pick_number){
		// 	inst_value = getRndInteger(1,max_number);
		// 	if(isFirst == true){
		// 		_array[0] = inst_value;
		// 		isFirst = false;
		// 		index += 1;
		// 	}else{
		// 		for (let i = 0; i < _array.length; i++) {
		// 			if(inst_value == _array[i]){
		// 				break;
		// 			}
		// 			if(index == i+1){
		// 				_array[index] = inst_value;
		// 				index += 1;
		// 				break;
		// 			}
		// 		}
		// 	}
		// }
		while(index < pick_number){
			inst_value = getRndInteger(1,max_number);
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
		_array.forEach(function (item, index) {
			text_result += '<tr><td>' + item + '</td></tr>';
		});
		document.getElementById("numbers").innerHTML = text_result;
		document.getElementById("numbers").style.visibility = "visible";
	} else{
		document.getElementById("numbers").innerHTML = text_result;
		document.getElementById("numbers").style.visibility = "hidden";
	};

};

selection.onchange();

//    _array.forEach(function (item, index) {
//        console.log(item, index);
//    });
//    console.log("index is " + index + "\n");
//}
