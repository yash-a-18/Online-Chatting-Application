var i;
let search = document.getElementById('searchTxt');
search.addEventListener("input", function() {

    let inputVal = search.value.toUpperCase();
    let names = document.getElementsByTagName("h6");
    for (i = 0; i < names.length; i++) {
        var txtValue = names[i].innerText;
        var parent = names[i].parentNode.parentNode.parentNode.parentNode;
        if (txtValue.toUpperCase().indexOf(inputVal) > -1) {
            parent.style.display = "";
        } else {
            parent.style.display = "none";
        }
    }
});

let profile = document.getElementById("profile");
profile.addEventListener("click", function(e) {
    let left_box = document.getElementsByClassName("left-box");
    left_box.innerText = "";
});