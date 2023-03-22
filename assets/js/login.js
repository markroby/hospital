function validate() {

    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    if (username == "mark" && password == "1234") {
        alert("Welcome Back Mark ;) 👨🏻‍⚕️");
        window.location.assign("roshata.html");

    }
    else if (username == "marcelino" && password == "1234") {
        alert("Welcome Back Marceline ;) 👨🏻‍⚕️ ");
        window.location.assign("roshata.html");
        return false;


    } else if (username == "martina" && password == "1234") {
        alert("Welcome Back Martina ;)  👩🏻‍⚕️  ");
        window.location.assign("roshata.html");
        return false;


    } else if (username == "martin" && password == "1234") {
        alert("Welcome Back Martin :) 👨🏻‍⚕️");
        window.location.assign("roshata.html");
        return false;


    } else if (username == "mina" && password == "1234") {
        window.location.assign("roshata.html");
        alert("Welcome Back Mina :) 👨🏻‍⚕️");
        return false;


    } else {
        alert("login notsuccesfully 😔");
        return false;


    }
}
/*
function passvalues() {
    var firstname = document.getElementById("username").value;
    localStorage.setItem("textvalue", firstname);
    return false;
}
document.getElementById("samename").innerHTML = localStorage.getitem("textvalue");*/




function ca() {
    alert("Connact To The Internet");
}