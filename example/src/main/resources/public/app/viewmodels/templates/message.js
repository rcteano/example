define(['knockout'], function (ko) {
    var Message = function() {
    	this.message = ko.observable();
    	
    	this.onDoSomething = null;
    	this.oneTimeBindMessage = 'one time on message.js';
    };
    
    Message.prototype.activate = function(data) {
    	var self = this;

    	self.message = data.testMessage;
    	self.onDoSomething = data.testFunction;
    };
    
    Message.prototype.changeMessage = function() {
    	var self = this;
    	
    	if(self.onDoSomething) {
    		self.onDoSomething();
    	}
    	//self.message('External Message');
    };
    
    return Message;
});