function start() {
    var prodId;
    var prodName;
    var desc;
    var imgURL;

    //connect to the db

    //for each product in db {

        //prodId = getProdIdFromDB
        //prodName = getProdNameFromDB
        //desc = getDescFromDB
        //imgURL = getImgURLFromDB        

        addRow(prodID, prodName, desc, imgURL);
    //} end loop
   
}
window.onload = start(); 


function add() {
    window.location.href = "add.html";    
}

function edit() {
    window.location.href = "edit.html";
}

function remove() {
    window.location.href = "remove.html";
}

function search() {
    var table = document.getElementById('products');
    for (var i = 0; i < table.rows.length() ; i++) {
        table.deleteRows(i);
    }

    var prodId;
    var prodName;
    var desc;
    var imgURL;

    //search db for either prodId or productName, return results

    //for each product in results {

        //prodId = getProdIdFromDB
        //prodName = getProdNameFromDB
        //desc = getDescFromDB
        //imgURL = getImgURLFromDB        
    addRow(prodID, prodName, desc, imgURL);
    //} end loop
}

function sort() {
    //sort based on id or name
}

function addRow(prodId, prodName, desc, imgURL) {
    var table = document.getElementById('products');
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = prodId;
    cell2.innerHTML = prodName;
    cell3.innerHTML = desc;

    var img = "<img src='";
    img += imgURL;
    img += "' height = '100' width='100'/>";
    cell4.innerHTML = img;
}