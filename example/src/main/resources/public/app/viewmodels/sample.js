define(['knockout'], function (ko) {
    var Sample = function() {
    	this.message = ko.observable();
    	this.htmlMessage = ko.observable();
    	this.newMessage = ko.observable('Default new message');
    	
		this.testMessage = ko.observable('Hi rica!');
		this.oneTimeBindMessage = 'Hello one time';
    };
    
    Sample.prototype.activate = function() {
    	var self = this;
    	
    	self.testMessage.subscribe(function(newMessage) {
    		self.htmlMessage(newMessage);
    	});
    	
    	self.message('Rica is too cute!');
    	self.htmlMessage('<strong>This is an html binding..</strong>');
    };
    
    Sample.prototype.changeMessage = function() {
    	var self = this;
    	
    	self.message(self.newMessage());
    };
    
    Sample.prototype.doSomething = function() {
    	var self = this;
    	
    	alert('Im at sample.js Find me!!!' + self.oneTimeBindMessage);
    };
    
    return Sample;
});