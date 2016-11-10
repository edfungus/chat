window.onload = function(){
    init();
}

var init = function(){
    var backdrop = document.getElementById("backdrop");
    var input = document.getElementById("input");
    var html = document.getElementsByTagName("html");
    var conversation = document.getElementById("conversation");

    input.addEventListener("keypress", function(e){
        var key = e.which || e.keyCode;
        if (key === 13 && input.value != "") { 
            addMessage("user", input.value);
            input.value = "";
        }
    });

    var addMessage = function(type, text) {
        var clearfix = document.createElement("div");
        clearfix.classList.add("clearfix");
        var userMsg = document.createElement("div");
        userMsg.classList.add("msg","msg-user","hidden");
        var userComputer = document.createElement("div");
        userComputer.classList.add("msg","msg-computer","hidden");
            
        var newDiv;
        if(type == "user"){
            newDiv = userMsg
        }
        if(type == "computer"){
            newDiv = userComputer
        }
        conversation.insertBefore(newDiv, document.getElementById("conversation-bottom"));
        conversation.insertBefore(clearfix, document.getElementById("conversation-bottom"));
        // conversation.appendChild(newDiv);
        // conversation.appendChild(clearfix);
        setTimeout(function() {
            newDiv.classList.add("show");
            newDiv.innerHTML = text;            
            conversation.scrollTop = conversation.scrollHeight;                 
        },10);
    }
    

    setTimeout(function() {
        backdrop.classList.add("dropIn");
        input.classList.add("dropIn");  
        input.focus();
        setTimeout(function() {
            html[0].classList.add("fill");
            setTimeout(function() {
                addMessage("computer","Hi!");
                setTimeout(function() {
                    addMessage("computer","What is your name?");                    
                    setTimeout(function() {
                        addMessage("computer","AHHHHH!");
                    } ,5000);
                } ,500);
            } ,500);
        }, 1500);
    }, 500);

    
}