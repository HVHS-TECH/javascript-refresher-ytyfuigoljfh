

document.getElementById("welcomeMessage").innerText = "Welcome to the JavaScript Refresher page!";

function buttonThing(){
    alert("Congratulation!\nYou pressed the button...");
};

function getFormInput() {
    if (document.getElementById('fUserText').checkValidity()) {

    var usertext = document.getElementById("text").value;

    document.getElementById("welcomeMessage").innerText = usertext;
    }
}
