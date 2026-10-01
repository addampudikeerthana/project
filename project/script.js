function signup() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Signup Successful");

    window.location.href = "login.html";
}


function login() {

    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    if (email == "admin@gmail.com" && password == "admin123") {

        window.location.href = "admin.html";

    }

    else if (
        email == localStorage.getItem("email") &&
        password == localStorage.getItem("password")
    ) {

        window.location.href = "user.html";

    }

    else {

        alert("Invalid Email or Password");

    }
}


function saveFitness() {

    var steps = document.getElementById("steps").value;
    var calories = document.getElementById("calories").value;
    var water = document.getElementById("water").value;
    var weight = document.getElementById("weight").value;

    localStorage.setItem("steps", steps);
    localStorage.setItem("calories", calories);
    localStorage.setItem("water", water);
    localStorage.setItem("weight", weight);

    document.getElementById("message").innerHTML =
        "Fitness Data Saved Successfully";

    showUserData();
}


function showUserData() {

    if (document.getElementById("username")) {

        document.getElementById("username").innerHTML =
            localStorage.getItem("name");

        document.getElementById("showSteps").innerHTML =
            localStorage.getItem("steps") || 0;

        document.getElementById("showCalories").innerHTML =
            localStorage.getItem("calories") || 0;

        document.getElementById("showWater").innerHTML =
            localStorage.getItem("water") || 0;

        document.getElementById("showWeight").innerHTML =
            localStorage.getItem("weight") || 0;
    }
}


function showAdminData() {

    document.getElementById("adminName").innerHTML =
        localStorage.getItem("name") || "No User";

    document.getElementById("adminEmail").innerHTML =
        localStorage.getItem("email") || "No User";

    document.getElementById("adminSteps").innerHTML =
        localStorage.getItem("steps") || 0;

    document.getElementById("adminCalories").innerHTML =
        localStorage.getItem("calories") || 0;

    document.getElementById("adminWater").innerHTML =
        localStorage.getItem("water") || 0;

    document.getElementById("adminWeight").innerHTML =
        localStorage.getItem("weight") || 0;
}


function logout() {

    window.location.href = "login.html";

}