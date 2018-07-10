function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generate(){
    var ABCDE = document.getElementById("ABCDE");
    var abcde = document.getElementById("abcde");
    var specialCharacter = document.getElementById("special-character");
    var number = document.getElementById("number");
    var output = document.getElementById("output");
    output.value = "";
    if(ABCDE.checked == true
    || abcde.checked == true
    || specialCharacter.checked == true) {
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
        
        /* Brainfuck Generator O_O */
        /* 
        if (specialCharacter.checked == true) {
            CharacterPossible += ">:<​:+:-:.:,";
        }*/

        for (let index = 0; index < parseInt(number.value); index++) {
            output.value += CharacterPossible.split(':')[getRandomInt(CharacterPossible.split(':').length)];
        }

    }


    return 0;
}