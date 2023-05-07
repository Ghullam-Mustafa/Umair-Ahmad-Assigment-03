document.getElementById('simple-alert').onclick = function () {
   alert("I am a Alert");
}

document.getElementById('print-name').onclick = function () {
    let inputdata = document.getElementById('data').value;
    if (inputdata === "") {
        alert("Enter your name in dialog box");
        return;
    }
    document.getElementById('output').innerHTML = inputdata;
}



















// clear input field
document.getElementById('erase').onclick = function () {
    document.getElementById('data').value = ''
}
// output clear
document.getElementById('Clean').onclick = function () {
    document.getElementById('output').innerHTML = ''
}