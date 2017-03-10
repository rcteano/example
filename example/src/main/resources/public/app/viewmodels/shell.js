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
		
    	$.each(self.routes, function(index, route) {
            if (route.childRoutes === undefined)
                return
            $.each(route.childRoutes, function(index, childRoute) {
                childRoute.route = route.route + '/' + childRoute.route;
                childRoute.moduleId = route.moduleRootId + '/' + childRoute.moduleId;
                childRoute.title = childRoute.title;
                childRoute.hash = route.hash + '/' + childRoute.hash;
                childRoute.parent = route.moduleRootId;
            });
            self.routes = self.routes.concat(route.childRoutes);
        });
    	
        self.router.map(self.routes)
        	.buildNavigationModel()
        	.mapUnknownRoutes('viewmodels/error');
        
        return router.activate();
	};

	return Shell;
});