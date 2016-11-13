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
    var chat = document.getElementById("conversation-container");
    chatInstance = new Chat(chat);

    // Some fun things for now
    setTimeout(function() {
        chatInstance.addMessage("general","Entering a world of journeys and explorations ...");
        setTimeout(function() {
            chatInstance.addMessage("computer","Hi, I don't think we have met");          
            setTimeout(function() {
                chatInstance.addMessage("computer","Type \"/hello\" for more information");                    
            } ,1000);                      
        } ,1000);
    } ,500);
}
