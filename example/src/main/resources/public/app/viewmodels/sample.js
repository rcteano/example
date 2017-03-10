define(['knockout'], function (ko) {
    var Sample = function() {
    	this.message = ko.observable();
    	this.htmlMessage = ko.observable();
    	this.newMessage = ko.observable('Default new message');
    	
    	this.testData = {
			message: ko.observable('Hi rica!')
    	};
    };
    
    Sample.prototype.activate = function() {
    	var self = this;
    	
    	self.testData.message.subscribe(function(newMessage) {
    		self.htmlMessage(newMessage);
    	});
    	
    	self.message('Rica is too cute!');
    	self.htmlMessage('<strong>This is an html binding..</strong>');
    };
    
    Sample.prototype.changeMessage = function() {
    	var self = this;
    	
    	self.message(self.newMessage());
    };
    
    return Sample;
});