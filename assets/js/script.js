
function changeColor(){
    var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

    var hexacode = '';

    for(var i = 0; i < 6; i++){
        var random_index = Math.floor(Math.random() * hex_numbers.length);
        
        hexacode += hex_numbers[random_index];
    }

   document.getElementById("hex-code").innerHTML = hexacode;
   document.getElementsByTagName("body")[0].style.background = "#" + hexacode;
}