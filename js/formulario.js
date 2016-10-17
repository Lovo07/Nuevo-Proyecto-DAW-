
$(document).ready(function () {
function init() {
if (localStorage["nombre"]) {
$('#nnombre').val(localStorage["nombre"]);
}
if (localStorage["email"]) {
$('#email').val(localStorage["email"]);
}
if (localStorage["mensaje"]) {
$('#mensaje').val(localStorage["mensaje"]);
}
if (localStorage["pais"]{
$('#pais').val(localStorage["pais"]);
}

}

init();
});
$('.stored').keyup(function () {
localStorage[$(this).attr('nombre')] = $(this).val();
});
$('#localStorageTest').submit(function() {
localStorage.clear();
});
