Ext.define('App.view.main.Main', {
    extend: 'Ext.tab.Panel',
         layout: 'center',

    
    /* Marks these are required classes to be to loaded before loading this view */ 
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'App.view.main.MainController',
        'App.view.main.MainModel'
    ],
    renderTo: Ext.getBody(),
    closable: false,
    authoShow: true,
    ui: 'navigation',

        
    xtype: 'app-main',
    controller: 'main',
    plugins: 'viewport',

    
      /* View model of the view */ 
    
    viewModel: {
        type: 'main'
    },  
    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list',
        items: [{
            xtype: 'button',
            text: 'Logout',
            margin: '10 0',
            handler: 'onClickButton'
        }]
    },


    items: [
        {
            html: '<h1> You are logged</h1>',
            height: '90%',
        },
    ]
});