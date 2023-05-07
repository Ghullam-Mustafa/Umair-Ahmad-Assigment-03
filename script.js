// input value 
 let input = document.getElementById('data').value
// array
let cities = ["Faisalabad","Lahore","Karachi","Multan"]
// alert function
document.getElementById('simple-alert').onclick = function () {
   alert("I am a Alert");
}
// print name function
document.getElementById('print-name').onclick = function () {
    let inputdata = document.getElementById('data').value;
    if (inputdata === "") {
        alert("Enter your name in dialog box");
        return;
    }
    document.getElementById('output').innerHTML = inputdata;
}

// print cities name

document.getElementById('print-cities').onclick = function () {
    document.getElementById('output').innerHTML = ""
    for (let index = 0; index < cities.length; index++) {
        let num = index + 1 
        document.getElementById('output').innerHTML += num + ')' + cities[index] + '<br>'
        
    }
}


// add cities in list
document.getElementById('add-cities').onclick = function () {
    let city = document.getElementById('data').value;
    if (!city) {
        alert("enter your name");
        return;
    }
    cities.push(city);
    document.getElementById('output').innerHTML = cities
}


















// clear input field
document.getElementById('erase').onclick = function () {
    document.getElementById('data').value = ''
}
// output clear
document.getElementById('Clean').onclick = function () {
    document.getElementById('output').innerHTML = ''
}