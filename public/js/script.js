const table1 = document.querySelector('#table1')
const table2 = document.querySelector('#table2')
let baseURL = 'http://localhost:3030';

const saveClick = () => {
    console.log('click me')
    let tableHeader = document.querySelector('#table1')
    let tableData = document.querySelector('#table2')
    let header = parseHeader(tableHeader);
    let persons = parseData(tableData);

    let xhr = new XMLHttpRequest();
    xhr.open('post', 'http://localhost:3030/generate', true);
    xhr.responseType = 'json';
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    let ordre = { header, persons }
    console.log('ordre', ordre)
    xhr.send(JSON.stringify(ordre));
    let a = document.querySelector('#download');
    if (a.style.display == "none") {
        a.style.display = "block";
        console.log("a.style.display block")
    }
 
}






const parseHeader = function (table) {
    let ccp = table.querySelector('#ccpAPC').innerText.trim();
    let totalAmount = table.querySelector('#totalAmount').innerText.trim();
    let date = table.querySelector('#date').innerText.trim();
    let personCount = table.querySelector('#personCount').innerText.trim();
    return { "ccp": ccp, "totalAmount": totalAmount, "date": date, "personCount": personCount }
}


const parseData = function () {
    let pers = [];
    let ccps = document.getElementsByName("ccp");
    let amounts = document.getElementsByName("amount");
    let names = document.getElementsByName("name");
    for (let i = 0; i < ccps.length; i++) {
        pers.push({
            "ccp": ccps[i].innerText,
            "amount": amounts[i].innerText,
            "name": names[i].innerText,
        }
        );
    }
    return pers;
}