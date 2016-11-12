var chatInstance;

window.onload = function(){
    intro();
    setTimeout(function() {
        initChat();
    }, 1500);
}

var intro = function(){
    var backdrop = document.getElementById("backdrop");
    var html = document.getElementsByTagName("html");
    setTimeout(function() {
        backdrop.classList.add("dropIn");
        setTimeout(function() {
            html[0].classList.add("fill");
        }, 1500);
    }, 500);
}

var initChat = function(){
    var conversation = document.getElementById("conversation");
    var input = document.getElementById("input");

    chatInstance = new Chat(conversation, input, classes, options);

    // Some fun things for now
    setTimeout(function() {
        chatInstance.addMessage("general","Entering a world of journey and explorations ...");
        setTimeout(function() {
            chatInstance.addMessage("computer","Hi, have I seen you before?");                    
        } ,1000);
    } ,500);
}
