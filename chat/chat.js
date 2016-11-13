class Chat {
    constructor(container, classes, options) {
        this.actions = new Actions();
        this.classes = classes != null ? classes : this.defaultClasses();
        this.options = options != null ? options : this.defaultOptions();

        this.container = this.addClasses(container, [this.classes.container]);

        this.setupInput();
        this.setupConversation();
    }

    setupInput() {
        this.input = this.addClasses(document.createElement("input"), [this.classes.input]);
        this.container.appendChild(this.input);
        var that = this;

        document.onkeydown = function(e) {
            that.input.focus(); // for now map everything to input                     
        };

        this.input.addEventListener("keypress", function(e){
            var key = e.which || e.keyCode;
            var value = that.input.value.replace(/^(\s)|(\s+)$/g, ""); // removes whitespace before and after
            if (key === 13 && value != "") { 
                that.addMessage("user", that.input.value);
                that.input.value = "";

            }
        });
        
        setTimeout(function() {
            that.addClasses(that.input, [that.classes.inputDropIn]);  
            that.input.focus();               
        },1);
    }

    setupConversation() {
        this.conversation = this.addClasses(document.createElement("div"), [this.classes.conversation]);
        this.container.appendChild(this.conversation);

        var top = document.createElement("div")
        top.style.height = this.options.conversationTopMargin;
        this.bottom = document.createElement("div")
        this.bottom.style.height = this.options.conversationBottomMargin;
        this.addClasses(this.bottom, ["bottom-last-chat-element"]);

        this.conversation.appendChild(top);
        this.conversation.appendChild(this.bottom);
    }
    
    addMessage(messageType, text) {
        var message = this.addClasses(document.createElement("div"), [this.classes.message, this.classes.messageTypes[messageType]]);
        var clearfix = this.addClasses(document.createElement("div"), [this.classes.clearfix]);

        this.conversation.insertBefore(message, this.bottom);
        this.conversation.insertBefore(clearfix, this.bottom);

        var that = this;
        setTimeout(function() {
            that.addClasses(message, [that.classes.messageShow]);
            message.innerHTML = text;            
            that.conversation.scrollTop = that.conversation.scrollHeight;                 
        },1);
    }

    processMessage(message) {
        if(message[0] === ">") {
            
        }

    }

    addClasses(element, classList) {
        for(var i = 0; i < classList.length; i++) {
            element.classList.add(classList[i]);
        }
        return element;
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

class Actions {
    
}