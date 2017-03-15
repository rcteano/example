define(['plugins/router', 'durandal/app', 'knockout'], 
		function (router, app, ko) {
	var homeroute = [
	    { route: ['', 'home'], moduleId: 'viewmodels/home', title: 'Home', nav: false }
	];
	
	var sampleroute = [
	    { route: 'sample', moduleId: 'viewmodels/sample', title: 'Sample', nav: true, hash: '#sample' }                    
	];
	
	var Shell = function() {
		this.router = router;
		
		this.routes = homeroute;
	};
	
	Shell.prototype.activate = function() {
		var self = this;
		
		self.routes = self.routes.concat(sampleroute);
		
        self.router.map(self.routes)
        	.buildNavigationModel()
        	.mapUnknownRoutes('viewmodels/error');
        
        return router.activate();
	};

	return Shell;
});