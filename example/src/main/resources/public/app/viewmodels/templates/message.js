define(['knockout'], function (ko) {
    var Message = function() {
    	this.message = null;
    };
    
    Message.prototype.activate = function(data) {
    	var self = this;
    	
    	self.message = data.message;
    };
    
    Message.prototype.changeMessage = function() {
    	var self = this;
    	
    	self.message('External Message');
    };
    
    return Message;
});