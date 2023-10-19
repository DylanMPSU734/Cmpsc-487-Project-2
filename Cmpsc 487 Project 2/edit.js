function start() {
    //connect to the db

    document.getElementById('Product').disabled = true;
    document.getElementById('Description').disabled = true;
    document.getElementById('ImgLink').disabled = true;
}
window.onload = start();

function getId() {
    var id = document.getElementById('ProdID').value;

    document.getElementById('Product').disabled = false;
    document.getElementById('Description').disabled = false;
    document.getElementById('ImgLink').disabled = false;

    //search db for specific id and 
    //document.getElementById('Product').value = db.productName;
    //document.getElementById('Description').value = db.desc;
    //document.getElementById('ImgLink').value = imgLink;

    document.getElementById('ProdID').disabled = true;
}

function edit() {
    //get data from fields
    var id = document.getElementById('ProdID').value;
    var name = document.getElementById('Product').value;
    var desc = document.getElementById('Description').value;
    var img = document.getElementById('ImgLink').value;

    //reset fields
    document.getElementById('ProdID').value = '';
    document.getElementById('Product').value = '';
    document.getElementById('Description').value = '';
    document.getElementById('ImgLink').value = '';

    document.getElementById('ProdID').disabled = false;
    document.getElementById('Product').disabled = true;
    document.getElementById('Description').disabled = true;
    document.getElementById('ImgLink').disabled = true;
}

function back() {
    window.location.href = "search.html";
}