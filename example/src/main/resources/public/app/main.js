requirejs.config({
    paths: {
        'text': '../lib/require@2.3.3/text',
        'durandal':'../lib/durandal@2.2/js',
        'plugins' : '../lib/durandal@2.2/js/plugins',
        'transitions' : '../lib/durandal@2.2/js/transitions',
        'knockout': '../lib/knockout@3.4.2/knockout',
        'bootstrap': '../lib/bootstrap@3.3.7/js/bootstrap',
        'jquery': '../lib/jquery@3.1.1/jquery-3.1.1',
        'moment': '../lib/moment@2.17.1/moment'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
       }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'bootstrap', 'modules/kocustombindings'],
		function (system, app, viewLocator) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Rica';

    app.configurePlugins({
        router: true,
        dialog: true,
        widget: true
    });

    app.start().then(function() {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();
        
    	app.setRoot('viewmodels/shell');
    });
});