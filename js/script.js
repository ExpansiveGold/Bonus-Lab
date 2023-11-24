const dateNow = new Date();
window.onload = function date() {
    document.getElementById("data").value = dateNow
    console.log(dateNow);
}

const element = document.getElementById("columns");

if (screen.width < 800) {
    setTimeout(() => {
        element.className = "row row-cols-2 mb-3"
    }, 100); 
} 
else if (screen.width > 801) {
    setTimeout(() => {
        element.className = "row row-cols-4 mb-3"
    }, 100); 
}   
