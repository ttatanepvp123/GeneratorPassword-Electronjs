function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generate(){
    var ABCDE = document.getElementById("ABCDE");
    var abcde = document.getElementById("abcde");
    var specialCharacter = document.getElementById("special-character");
    var numberSize = document.getElementById("number");
    var numberSize = document.getElementById("number-size");
    var output = document.getElementById("output");
    output.value = "";
    if(ABCDE.checked == true
    || abcde.checked == true
    || specialCharacter.checked == true
    || number.checked == true) {
        var CharacterPossible = ":";
        if (ABCDE.checked == true) {
            CharacterPossible += "A:B:C:D:E:F:G:H:I:J:K:L:M:N:O:P:Q:R:S:T:U:V:W:X:Y:Z:";
        }

        if (abcde.checked == true) {
            CharacterPossible += "a:b:c:d:e:f:g:h:i:j:k:l:m:n:o:p:q:r:s:t:u:v:w:x:y:z:";
        }

        if (specialCharacter.checked == true) {
            CharacterPossible += "%:/:':(:-:^:~:#:{:<:[:|:`:\\:ç:@:}:]:;:,:?:.:/:";
        }

        if (number.checked == true) {
            CharacterPossible += "0:1:2:3:4:5:6:7:8:9:";
        }
        
        /* Brainfuck Generator O_O */
        /* 
        if (specialCharacter.checked == true) {
            CharacterPossible += ">:<​:+:-:.:,";
        }*/

        for (let index = 0; index < parseInt(numberSize.value); index++) {
            output.value += CharacterPossible.split(':')[getRandomInt(CharacterPossible.split(':').length)];
        }

    }


    return 0;
}