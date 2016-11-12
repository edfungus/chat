class Chat {
    constructor(container, classes, options) {
        this.classes = classes != null ? classes : this.defaultClasses();
        this.options = options != null ? options : this.defaultOptions();

        this.container = container;
        this.container.classList.add(this.classes.container);            

        this.setupInput();
        this.setupConversation();
    }

    setupInput() {
        this.input = document.createElement("input");
        this.input.classList.add(this.classes.input);
        this.container.appendChild(this.input);
        var that = this;
        this.input.addEventListener("keypress", function(e){
            var key = e.which || e.keyCode;
            var value = that.input.value.replace(/^(\s)|(\s+)$/g, ""); // removes whitespace before and after
            if (key === 13 && value != "") { 
                that.addMessage("user", that.input.value);
                 that.input.value = "";
            }
        });
        this.input.classList.add(this.classes.inputDropIn);  
        this.input.focus();
    }

    setupConversation() {
        this.conversation = document.createElement("div");
        this.conversation.classList.add(this.classes.conversation);
        this.container.appendChild(this.conversation);

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
        message.classList.add(this.classes.message, this.classes.messageTypes[messageType]);
        var clearfix = document.createElement("div");
        clearfix.classList.add(this.classes.clearfix);

        this.conversation.insertBefore(message, this.bottom);
        this.conversation.insertBefore(clearfix, this.bottom);

        var that = this;
        setTimeout(function() {
            message.classList.add(that.classes.messageShow);
            message.innerHTML = text;            
            that.conversation.scrollTop = that.conversation.scrollHeight;                 
        },10);
    }

    defaultClasses() {
        return {
            container: "conversation-container",
            conversation: "conversation",
            input: "input",
            inputDropIn: "dropIn",
            clearfix: "clearfix",
            message: "msg",
            messageShow: "show",
            messageTypes: {
                user: "user",
                computer: "computer",
                general: "general"
            }
        };
    } 
    defaultOptions() {
        return {
            conversationTopMargin: "10px",
            conversationBottomMargin: "85px",
            defaultMessageType: "user"
        };
    } 
}
