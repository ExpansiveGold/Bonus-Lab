const dateNow = new Date();
window.onload = function date() {
    document.getElementById("data").value = dateNow
    console.log(dateNow);
}

const element = document.getElementById("columns");

function resize() {
    if ($(window).width() < 800) {
        $('#columns').removeClass('row-cols-4')
        $('#columns').addClass('row-cols-2')
    } else {
        $('#columns').removeClass('row-cols-2')
        $('#columns').addClass('row-cols-4')
    }
}

$(document).ready(function() {
    $(window).resize(resize)
    resize()
})
