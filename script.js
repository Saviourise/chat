var num = 1;
function send() {
    var li = document.querySelector(".chatArea")
    var input = document.querySelector(".input")
    var message = input.value
    //console.log(message)
    if (message != "") {
        li.innerHTML += '<div class="chat-r"><div class="sp-r"></div><div class="mess mess-r"><p class="mess-p">' + message + '</p></div></div>';
        document.querySelector(".input").value = "";
        document.querySelectorAll(".chat-r")[num].scrollIntoView()
        num+=1;
    }
}

document.querySelector(".input").addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        send()
    }
})

function closeScreen() {
    var screen = document.querySelector(".frontScreen")
    screen.style.display = 'none';
}