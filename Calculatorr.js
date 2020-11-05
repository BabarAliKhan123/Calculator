

function GetNumberonTextbox(num) {
    var result = document.getElementById("Text1")
    result.value += num
}


function cleartextbox(){
    var clear = document.getElementById("Text1")
    clear.value = ""
}

function getresult(){
    var answer = document.getElementById("Text1")
    answer.value = eval(answer.value)
}

function removelast() {
    Text1.value = Text1.value.substring(0, Text1.value.length - 1);
}