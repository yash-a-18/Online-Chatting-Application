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

$(document).ready(function() {
    // console.log("check");
    switchColorTheme();
});

$(window).on('load', function() {
    // console.log("check");
    checkTheme();
})

function clck(item) {
    console.log("object");
    console.log(item.id);
    switchColorTheme(item.id);
}

function checkTheme() {
    const currentThemeColor = localStorage.getItem('theme-color');
    if (currentThemeColor !== null) {
        $('body').addClass(currentThemeColor);
    }
}

function switchColorTheme(theme) {
    console.log("hello");
    $('.form-check input').click(function() {
        console.log(theme);
        $('body').removeClass();
        $('body').addClass(theme);
        localStorage.setItem('theme-color', theme);
    });
}

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
            <a class="dark noline" onclick="homepage()" style="cursor:pointer;">
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
        <img src="../Images/MyProfile.png" class="rounded-circle" alt="..." style="width:150px;height:100%;">
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
            <a class="dark noline" onclick="homepage()" style="cursor:pointer;">
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

<a class="dark noline" onclick="profile()" style="cursor:pointer;">
    <div class="card" style="max-width: 540px;" id="card-hover">
        <div class="row no-gutters">
            <div class="col-md-2 my-2 mx-2">
                <img src="../Images/MyProfile.png" class="card-img rounded-circle" alt="..." style="width:50px;height: auto;">
            </div>
            <div class="col-md-9">
            <div class="card-body">
                <h6 class="card-title">anonymously_yash</h6>
            </div>
            </div>
        </div>
    </div>
</a>
        <div class="friend-list">
            <a class="dark noline" onclick="theme()" style="cursor:pointer;">
                <div class="card search" style="max-width: 540px;" id="card-hover">
                    <div class="row no-gutters">
                        <div class="col-md-2 my-auto mx-auto">
                            <i class="fas fa-adjust fa-lg"></i>
                        </div>
                        <div class="col-md-9">
                            <div class="card-body">
                                <h5 class="card-title my-auto">Theme</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </a>

            <a class="dark noline" onclick="blocked()" style="cursor:pointer;">
                <div class="card search" style="max-width: 540px;" id="card-hover">
                    <div class="row no-gutters">
                        <div class="col-md-2 my-auto mx-auto">
                            <i class="fas fa-ban fa-lg"></i>
                        </div>
                        <div class="col-md-9">
                            <div class="card-body">
                                <h5 class="card-title my-auto">Blocked</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </a>

            <a class="dark noline" onclick="help()" style="cursor:pointer;">
                <div class="card search" style="max-width: 540px;" id="card-hover">
                    <div class="row no-gutters">
                        <div class="col-md-2 my-auto mx-auto">
                            <i class="fas fa-question-circle fa-lg"></i>
                        </div>
                        <div class="col-md-9">
                            <div class="card-body">
                                <h5 class="card-title my-auto">Help</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>`
}

function homepage() {
    //console.log("calll");
    // console.log(document.getElementById("left").style.display="none");
    var e = document.getElementById("left");
    let children = e.children;
    console.log(children);
    for (i = 0; i < children.length; i++) {
        children[i].style.display = "none";
    }
    e.innerHTML =
        `<div class="card" style="max-width: 540px;background-color:rgb(0,0,0,0.4);">
        <div class="row no-gutters">
            <div class="col-md-2 my-2 mx-2">
            <img src="../Images/MyProfile.png" class="card-img rounded-circle" alt="..." style="width:50px;height: auto;cursor:pointer;" onclick="profile()">
            </div>

            <div class="col-md-9 text-right my-4">
                <div class="dropdown">
                    <a  type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-ellipsis-h fa-lg mx-2"></i>
                    </a>
                    <div class="dropdown-menu dropdown-primary">
                        <a class="dropdown-item" href="HomePage.html"><i class="fas fa-home"></i>&nbsp Home</a>
                        <button class="dropdown-item" onclick="profile()"><i class="fas fa-user" id="profile"></i>&nbsp Profile</button>
                        <button class="dropdown-item" onclick="friendrequests()"><i class="fas fa-user-plus"></i>&nbsp Friend requests</button>
                        <button class="dropdown-item" href="#"><i class="fas fa-users"></i>&nbsp Search Friends</button>
                        <button class="dropdown-item" href="#"><i class="fas fa-address-book"></i>&nbsp All Users</button>
                        <button class="dropdown-item" onclick="settings()"><i class="fas fa-user-cog"></i>&nbsp Settings</button>
                        <a class="dropdown-item" href="Logout.html"><i class="fas fa-sign-out-alt"></i>&nbsp Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

<div class="card">
<div class="row no-gutters">
  <form class="form-inline my-3 mx-3">
    <input class="form-control mr-sm-2" style="position: relative;width: 100%;" type="search" placeholder="Search" id="searchTxt" aria-label="Search">
  </form>
</div>
</div>

<div class="friend-list">

  <a class="dark noline" onclick="chat()">
      <div class="card search" style="max-width: 540px;" id="card-hover">
          <div class="row no-gutters">
              <div class="col-md-2 my-2 mx-2">
                  <img src="../Images/OtherProfile.png" class="card-img rounded-circle" alt="..." style="width:50px;height: auto;">
              </div>
              <div class="col-md-9">
              <div class="card-body">
                  <h6 class="card-title">Shree</h6>
              </div>
              </div>
          </div>
      </div>
  </a>

  <a class="dark noline" onclick="chat()">
      <div class="card" style="max-width: 540px;" id="card-hover">
      <div class="row no-gutters">
          <div class="col-md-2 my-2 mx-2">
              <img src="../Images/profile_2.png" class="card-img rounded-circle" alt="..." style="width:50px;height: auto;">
          </div>
          <div class="col-md-9">
          <div class="card-body">
              <h6 class="card-title">Shreeman</h6>
          </div>
          </div>
      </div>
      </div>
  </a>

  <div class="card" style="max-width: 540px;" id="card-hover">
    <div class="row no-gutters">
      <div class="col-md-2 my-2 mx-2">
        <img src="../Images/profile_1.png" class="card-img rounded-circle" alt="..." style="width:50px;height: auto;">
      </div>
      <div class="col-md-9">
        <div class="card-body">
          <h6 class="card-title">Shreemati</h6>
        </div>
      </div>
    </div>
  </div>

  <div class="card" style="max-width: 540px;" id="card-hover">
    <div class="row no-gutters">
      <div class="col-md-2 my-2 mx-2">
        <img src="../Images/MyProfile.png" class="card-img rounded-circle" alt="..." style="width:50px;height: auto;">
      </div>
      <div class="col-md-9">
        <div class="card-body">
          <h6 class="card-title">Yash</h6>
        </div>
      </div>
    </div>
  </div>

  <div class="card" style="max-width: 540px;" id="card-hover">
    <div class="row no-gutters">
      <div class="col-md-2 my-2 mx-2">
        <img src="../Images/MyProfile.png" class="card-img rounded-circle" alt="..." style="width:50px;height: auto;">
      </div>
      <div class="col-md-9">
        <div class="card-body">
          <h6 class="card-title">Utsav</h6>
        </div>
      </div>
    </div>
  </div>

  <div class="card" style="max-width: 540px;" id="card-hover">
    <div class="row no-gutters">
      <div class="col-md-2 my-2 mx-2">
        <img src="../Images/MyProfile.png" class="card-img rounded-circle" alt="..." style="width:50px;height: auto;">
      </div>
      <div class="col-md-9">
        <div class="card-body">
          <h6 class="card-title">Devanshi</h6>
        </div>
      </div>
    </div>
  </div>

  <div class="card" style="max-width: 540px;" id="card-hover">
    <div class="row no-gutters">
      <div class="col-md-2 my-2 mx-2">
        <img src="../Images/MyProfile.png" class="card-img rounded-circle" alt="..." style="width:50px;height: auto;">
      </div>
      <div class="col-md-9">
        <div class="card-body">
          <h6 class="card-title">Aastha</h6>
        </div>
      </div>
    </div>
  </div>

  <div class="card" style="max-width: 540px;" id="card-hover">
    <div class="row no-gutters">
      <div class="col-md-2 my-2 mx-2">
        <img src="../Images/MyProfile.png" class="card-img rounded-circle" alt="..." style="width:50px;height: auto;">
      </div>
      <div class="col-md-9">
        <div class="card-body">
          <h6 class="card-title">Shivani</h6>
        </div>
      </div>
    </div>
  </div>

  <div class="card" style="max-width: 540px;" id="card-hover">
    <div class="row no-gutters">
      <div class="col-md-2 my-2 mx-2">
        <img src="../Images/MyProfile.png" class="card-img rounded-circle" alt="..." style="width:50px;height: auto;">
      </div>
      <div class="col-md-9">
        <div class="card-body">
          <h6 class="card-title">Dhruval</h6>
        </div>
      </div>
    </div>
  </div>

  <div class="card" style="max-width: 540px;" id="card-hover">
    <div class="row no-gutters">
      <div class="col-md-2 my-2 mx-2">
        <img src="../Images/MyProfile.png" class="card-img rounded-circle" alt="..." style="width:50px;height: auto;">
      </div>
      <div class="col-md-9">
        <div class="card-body">
          <h6 class="card-title">Deep</h6>
        </div>
      </div>
    </div>
  </div>

  <div class="card" style="max-width: 540px;" id="card-hover">
    <div class="row no-gutters">
      <div class="col-md-2 my-2 mx-2">
        <img src="../Images/MyProfile.png" class="card-img rounded-circle" alt="..." style="width:50px;height: auto;">
      </div>
      <div class="col-md-9">
        <div class="card-body">
          <h6 class="card-title">Sakshi</h6>
        </div>
      </div>
    </div>
  </div>

</div>`
}

function chat() {
    //console.log("calll");
    // console.log(document.getElementById("left").style.display="none");
    var e = document.getElementById("right");
    let children = e.children;
    console.log(children);
    for (i = 0; i < children.length; i++) {
        children[i].style.display = "none";
    }
    e.innerHTML = `<div class="card" style="max-width: auto;background-color:rgb(0,0,0,0.4);">
    <div class="row no-gutters">
      <div class="col-md-1 my-1 mx-1">
        <img src="../Images/OtherProfile.png" class="card-img rounded-circle" alt="..." style="width:60px;height: auto;">
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h4 class="card-title">Shree</h4>
        </div>
      </div>
      <div class="col-md-4 my-4 mx-2 text-right">
          <i class="fas fa-search fa-lg"></i>
      <!--/div>
      <div class="col-md my-4 text-right"-->
          <i class="fas fa-paperclip fa-lg mx-4"></i>
      </div>
      <div class="col-md my-4">
          <div class="dropdown dropleft">
              <a  type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-ellipsis-h fa-lg"></i>
              </a>
              <div class="dropdown-menu dropdown-primary">
                  <a class="dropdown-item" href="HomePage.html"><i class="far fa-id-card"></i>&nbsp Contact info</a>
                  <a class="dropdown-item" href="#"><i class="fas fa-comment-slash"></i>&nbsp Clear messages</a>
                  <a class="dropdown-item" href="#"><i class="fas fa-user-minus"></i>&nbsp Unfriend</a>
                  <a class="dropdown-item" href="#"><i class="fas fa-user-edit"></i>&nbsp Report</a>
                  <a class="dropdown-item" href="#"><i class="fas fa-user-lock"></i>&nbsp Block</a>
              </div>
          </div>
          
      </div>
    </div>
  </div>

  <div class="container-fluid chat-list">
      <div class="container chat-left my-3">
          Hello!!
          <span class="time-right">1:00</span>
      </div>

      <div class="container chat-right my-3">
          Hiiii
          <span class="time-left">1:00</span>
      </div>
  </div>

  <div class="card align-text-bottom" style="max-width: auto;background-color:rgb(0,0,0,0.4);">
    <div class="row no-gutters">
      <div class="col-md-1 my-3 mx-1 text-center">
        <i class="far fa-laugh fa-2x"></i>
      </div>
      <div class="col-md-7 text-center">
        <div class="form-group my-3" style="width:750px;">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
        </div>
      </div>
      <div class="col-md-3 my-4 mx-4 text-right">
          <i class="far fa-paper-plane fa-lg"></i>
      </div>
    </div>
  </div>`
}

function theme() {
    var e = document.getElementById("left");
    let children = e.children;
    console.log(children);
    for (i = 0; i < children.length; i++) {
        children[i].style.display = "none";
    }
    e.innerHTML =
        `<div class="card" style="max-width: 540px;background-color:rgb(0,0,0,0.4);">
        <div class="row no-gutters">
            <div class="col-md-2 my-4 mx-3">
                <a class="dark noline" onclick="settings()" style="cursor:pointer;">
                    <!--i class="fas fa-chevron-left fa-2x"></i-->
                    <i class="fas fa-arrow-left fa-lg"></i>
                    <!--i class="fas fa-arrow-circle-left fa-2x"></i-->
                    <!--i class="fas fa-angle-double-left fa-2x"></i-->
                    <!--i class="fas fa-chevron-circle-left fa-2x"></i-->
                </a>
            </div>
            <div class="col-md-8 my-4 mr-2">
                <h5 style="cursor:pointer;" onclick="theme()">Change Theme</h5>
            </div>
        </div>
    </div>

    <div class="container" style="margin-top: 100px;font-weight:bold;">
        <div class="alert alert-dark alert-dismissible fade show" role="alert" style="background-color: rgb(0, 0, 0, 0.2);">
            <div class="theme-options">
                <div class="form-check">
                    <input class="form-check-input" type="radio" id="default-mode" name="theme" value="Default" onclick="clck(this)">
                    <label class="form-check-label">
                        Default
                    </label><br>
                    <input class="form-check-input" type="radio" id="light-mode" name="theme" value="Light" onclick="clck(this)">
                    <label class="form-check-label">
                        Light
                    </label><br>
                    <input class="form-check-input" type="radio" id="dark-mode" name="theme" value="Dark" onclick="clck(this)">
                    <label class="form-check-label">
                        Dark
                    </label><br>
                    <input class="form-check-input" type="radio" id="sunlight-mode" name="theme" value="Sunlight" onclick="clck(this)">
                    <label class="form-check-label">
                        Sunlight
                    </label>
                </div>
            </div>
            <!--button type="button" class="btn btn-success my-2" onclick="change_theme()">Change Theme</button-->
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>`
}

function friendrequests() {
    //console.log("calll");
    // console.log(document.getElementById("left").style.display="none");
    var e = document.getElementById("left");
    let children = e.children;
    console.log(children);
    for (i = 0; i < children.length; i++) {
        children[i].style.display = "none";
    }
    e.innerHTML =
        `<div class="card" style="max-width: 540px;background-color:rgb(0,0,0,0.4);">
        <div class="row no-gutters">
            <div class="col-md-2 my-4 mx-2">
                <a class="dark noline" onclick="homepage()" style="cursor:pointer;">
                    <i class="fas fa-angle-double-left fa-lg"></i>
                </a>
            </div>

            <div class="col-md my-4">
                <h5>Friend Requests</h5>
            </div>
        </div>
    </div>
    <div class="card">
		<div class="row no-gutters">
		    <form class="form-inline my-3 mx-3">
		        <input class="form-control mr-sm-2" style="position: relative;width: 100%;" type="search" placeholder="Search" id="searchTxt" aria-label="Search">
		    </form>
		</div>
    </div>
    
    <div class="friend-list">

        <div class="card search" style="max-width: 540px;">
            <div class="row no-gutters">
                <div class="col-md-2 my-2 mx-2">
                    <img src="../Images/OtherProfile.png" class="card-img rounded-circle" alt="..." style="width:50px;height: auto;">
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <h6 class="card-title d-inline">Rahul</h6>
                        <p class="card-text d-inline mx-4"><a class="noline" style="color:violet;cursor:pointer" onMouseOut="this.style.color='violet'" onMouseOver="this.style.color='red'">View</a></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card search" style="max-width: 540px;">
            <div class="row no-gutters">
                <div class="col-md-2 my-2 mx-2">
                    <img src="../Images/OtherProfile.png" class="card-img rounded-circle" alt="..." style="width:50px;height: auto;">
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <h6 class="card-title d-inline">Rahul</h6>
                        <p class="card-text d-inline mx-4"><a class="noline" style="color:violet;cursor:pointer" onMouseOut="this.style.color='violet'" onMouseOver="this.style.color='red'">View</a></p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    `
}