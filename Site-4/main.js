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

function profile() {
    //console.log("calll");
    // console.log(document.getElementById("left").style.display="none");
    var e = document.getElementById("left");
    let children = e.children;
    console.log(children);
    for (i = 0; i < children.length; i++) {
        children[i].style.display = "none";
    }
    e.innerHTML = `<div class="card" style="max-width: 540px;background-color:rgb(0,0,0,0.4);">
    <div class="row no-gutters">
        <div class="col-md-2 my-3 mx-3">
            <a class="dark noline" href="HomePage.html">
                <i class="fas fa-angle-double-left fa-2x"></i>
           </a>
        </div>
        <div class="col-md-5 my-3 mx-2">
            <h3>Profile</h3>
        </div>
    </div>
</div>

<div class="card" style="height:220px">
    <div class="row no-gutters mx-auto my-3">
        <img src="./Images/MyProfile.png" class="rounded-circle" alt="..." style="width:150px;height:100%;">
    </div>
    <a class="noline mx-auto" href="ChangePhoto.html" style="color:violet;" onMouseOut="this.style.color='violet'" onMouseOver="this.style.color='red'">Change Profile Photo</a>
</div>

<div id="card-profile-name" class="card" style="max-width: 540px;">
    <div class="row no-gutters mx-auto">
        <div class="col-md">
            <div class="card-body">
                <h6 class="card-title">Name:</h6>
                <p class="card-text">Yash Amethiya</p>
            </div>
            <hr>
            <div class="card-body">
                <h6 class="card-title">Username:</h6>
                <p class="card-text">anonymously_yash</p>
                <p class="card-text"><a class="noline" href="ChangeUsername.html" style="color:violet;" onMouseOut="this.style.color='violet'" onMouseOver="this.style.color='red'">Edit</a></p>
            </div>
            <hr>
            <div class="card-body">
                <h6 class="card-title">Date of Birth:</h6>
                <p class="card-text">06/06/2001</p>
            </div>
            <hr>
            <div class="card-body">
                <h6 class="card-title">Email address:</h6>
                <p class="card-text">kuchbhi@gmail.com</p>
            </div>
            <hr>
            <div class="card-body">
                <h6 class="card-title">Mobile Number:</h6>
                <p class="card-text">1234567890</p>
            </div>
        </div>
    </div>
</div>`
}

function settings() {
    //console.log("calll");
    // console.log(document.getElementById("left").style.display="none");
    var e = document.getElementById("left");
    let children = e.children;
    console.log(children);
    for (i = 0; i < children.length; i++) {
        children[i].style.display = "none";
    }
    e.innerHTML = `<div class="card" style="max-width: 540px;background-color:rgb(0,0,0,0.4);">
    <div class="row no-gutters">
        <div class="col-md-2 my-3 mx-3">
            <a class="dark noline" href="HomePage.html">
                <!--i class="fas fa-chevron-left fa-2x"></i-->
                <!--i class="fas fa-arrow-left fa-2x"></i-->
                <!--i class="fas fa-arrow-circle-left fa-2x"></i-->
                <i class="fas fa-angle-double-left fa-2x"></i>
                <!--i class="fas fa-chevron-circle-left fa-2x"></i-->
            </a>
        </div>
        <div class="col-md-5 my-3 mx-2">
            <h3>Settings</h3>
        </div>
    </div>
</div>

<div class="card" style="max-width: 540px;background-color:rgb(0,0,0,0.1);">
      <div class="row no-gutters">
        <div class="col-md-2 my-2 mx-2">
            <img src="./Images/MyProfile.png" class="card-img rounded-circle" alt="..." style="width:50px;height: auto;">
        </div>
        <div class="col-md-9">
          <div class="card-body">
            <h6 class="card-title">anonymously_yash</h6>
          </div>
        </div>
    </div>
</div>

<div id="card-profile-name" class="card" style="max-width: 540px;">
    <div class="row no-gutters mx-auto">
        <div class="col-md">
            <div class="card-body">
                <h6 class="card-title">Name:</h6>
                <p class="card-text">Yash Amethiya</p>
            </div>
            <hr>
            <div class="card-body">
                <h6 class="card-title">Username:</h6>
                <p class="card-text">anonymously_yash</p>
                <p class="card-text"><a class="noline" href="ChangeUsername.html" style="color:violet;" onMouseOut="this.style.color='violet'" onMouseOver="this.style.color='red'">Edit</a></p>
            </div>
            <hr>
            <div class="card-body">
                <h6 class="card-title">Date of Birth:</h6>
                <p class="card-text">06/06/2001</p>
            </div>
            <hr>
            <div class="card-body">
                <h6 class="card-title">Email address:</h6>
                <p class="card-text">kuchbhi@gmail.com</p>
            </div>
            <hr>
            <div class="card-body">
                <h6 class="card-title">Mobile Number:</h6>
                <p class="card-text">1234567890</p>
            </div>
        </div>
    </div>
</div>`
}