let textArray = [];
let ul = document.createElement('ul');

function arrayToList(mrArray, divPart) {
    ul.innerHTML="";
    document.getElementById(divPart).appendChild(ul);
    for(i = 0; i < mrArray.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = mrArray[i];
    }
}

function collectForm() {
    let name = document.getElementById("custname").value;
    let city = document.getElementById("city").value;
    let payment = document.getElementById("payment").value;

    let info = name + " " + city + " " + payment;
    textArray.push(info);
    arrayToList(textArray, "myCustomers");
}