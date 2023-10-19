function start() {
    //connect to the db
}
window.onload = start();

function add() {
    //get info from fields
    var name = document.getElementById('Product').value;
    var desc = document.getElementById('Description').value;
    var img = document.getElementById('ImgLink').value;
    
    //generate unique prodId and add with name, desc, img to db


    //reset fields
    document.getElementById('Product').value = '';
    document.getElementById('Description').value = '';
    document.getElementById('ImgLink').value = '';

}
function back() {
    window.location.href = "search.html";
}