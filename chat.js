var classes = {
    inputDropIn: "dropIn",
    clearfix: "clearfix",
    message: "msg",
    messageShow: "show",
    messageTypes: {
        user: "msg-user",
        computer: "msg-computer"
    }
}
var options = {
    conversationTopMargin: "10px",
    conversationBottomMargin: "85px",
    defaultMessageType: "user"
}

class Chat {
    constructor(conversation, input, classes, options) {
        this.conversation = conversation;
        this.input = input;
        this.classes = classes;
        this.options = options;

        this.setupInput();
        this.setupConversation();
    }

    setupInput() {
        var that = this;
        this.input.addEventListener("keypress", function(e){
            var key = e.which || e.keyCode;
            if (key === 13 && that.input.value != "") { 
                that.addMessage("user", that.input.value);
                 that.input.value = "";
            }
        });
        this.input.classList.add(this.classes.inputDropIn);  
        this.input.focus();
    }

    setupConversation() {
        var top = document.createElement("div")
        top.style.height = this.options.conversationTopMargin;
        this.bottom = document.createElement("div")
        this.bottom.style.height = this.options.conversationBottomMargin;
        this.bottom.classList.add("bottom-last-chat-element");
        this.conversation.appendChild(top);
        this.conversation.appendChild(this.bottom);
    }
    
    addMessage(messageType, text) {
        var message = document.createElement("div");
        message.classList.add(classes.message, this.classes.messageTypes[messageType]);
        var clearfix = document.createElement("div");
        clearfix.classList.add(classes.clearfix);

        this.conversation.insertBefore(message, this.bottom);
        this.conversation.insertBefore(clearfix, this.bottom);
        setTimeout(function() {
            message.classList.add(this.classes.messageShow);
            message.innerHTML = text;            
            this.conversation.scrollTop = this.conversation.scrollHeight;                 
        },10);
    }
}
