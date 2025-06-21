function printnumb(num){
document.getElementsByClassName("display")[0].value +=num;
}
function printsym(num1){
    if(num1==1)
        document.getElementsByClassName("display")[0].value +='+';
    else if(num1==2)
        document.getElementsByClassName("display")[0].value +='-';
    else if(num1==3)
        document.getElementsByClassName("display")[0].value +='/';
}
function clearr() {
    document.getElementsByClassName("display")[0].value = "";
}
function calculatee() {
    var input = document.getElementsByClassName("display")[0].value;
    try {
        var result = eval(input); // Evaluate the string expression
        document.getElementsByClassName("display")[0].value = result;
    } catch (error) {
        document.getElementsByClassName("display")[0].value = "Error";
    }
}


