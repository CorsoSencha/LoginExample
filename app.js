
Ext.require(['App.view.main.Main', 'App.view.login.Login']) 
Ext.application({
    name: 'App',    
    // mainView: 'App.view.main.Main'
    launch: function () {
        //Will create the calculator as a floating, movable window within the browser 
        var loggedIn;
        loggedIn = localStorage.getItem("TutorialLoggedIn");
        var ct = Ext.create({

            xtype: loggedIn ? 'app-main' : 'login'
        });

    }
});
