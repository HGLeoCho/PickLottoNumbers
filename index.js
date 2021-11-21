function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var _array = [];
var keep_looping = 0;
var isFirst = true;

while(keep_looping < 7){
    inst_value = getRndInteger(1,50);
    if(isFirst == true){
        _array[0] = inst_value;
        isFirst = false;
        keep_looping += 1;
    }else{
        for (let i = 0; i < _array.length; i++) {
            if(inst_value == _array[i]){
                break;
            }
            if(keep_looping == i+1){
                _array[keep_looping] = inst_value;
                keep_looping += 1;
                break;
            }
        }
    }
//    _array.forEach(function (item, index) {
//        console.log(item, index);
//    });
//    console.log("keep_looping is " + keep_looping + "\n");
}
text_result = "";
_array.forEach(function (item, index) {
    text_result += '<tr><td>' + item + '</td></tr>';
});
document.getElementById("numbers").innerHTML = text_result;