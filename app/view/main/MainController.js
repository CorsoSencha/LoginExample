Ext.define('App.view.main.MainController', {

    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    views: ['App.view.main.Main'],
    models: ['Main'],
    onClickButton: function () {
        // Remove the localStorage key/value
        localStorage.removeItem('TutorialLoggedIn');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    }



});