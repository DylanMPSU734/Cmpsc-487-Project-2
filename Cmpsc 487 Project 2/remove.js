function start() {
    //connect to the db
}
window.onload = start();

function remove() {
    var id = document.getElementById('ProdID').value;
    
    //delete row matching id from db

    document.getElementById("ProdID").value = '';
}

function back() {
    window.location.href = "search.html";
}