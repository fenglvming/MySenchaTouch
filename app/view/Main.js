// Ext.define('ring.view.Main', {
//     extend: 'Ext.navigation.View',
//     xtype: 'mainview',
//     requires: [
//         'ring.view.CreateEvent'
//     ],
//     config: {
//         autoDestroy: false,

//         navigationBar: {
//             ui: 'sencha',
//             items: [
//                 {
//                     xtype: 'button',
//                     id: 'editButton',
//                     text: 'Edit',
//                     align: 'right',
//                     hidden: true,
//                     hideAnimation: Ext.os.is.Android ? false : {
//                         type: 'fadeOut',
//                         duration: 200
//                     },
//                     showAnimation: Ext.os.is.Android ? false : {
//                         type: 'fadeIn',
//                         duration: 200
//                     }
//                 },
//                 {
//                     xtype: 'button',
//                     id: 'saveButton',
//                     text: 'Save',
//                     ui: 'sencha',
//                     align: 'right',
//                     hidden: true,
//                     hideAnimation: Ext.os.is.Android ? false : {
//                         type: 'fadeOut',
//                         duration: 200
//                     },
//                     showAnimation: Ext.os.is.Android ? false : {
//                         type: 'fadeIn',
//                         duration: 200
//                     }
//                 }
//             ]
//         },

//         items: [
//             { xtype: 'RingCreateEvent'}
//         ]
//     }
//  });
Ext.define('ring.view.Main',{
    extend: 'Ext.tab.Panel',
    config:{
        ui:'light',
        tabBar:{
            layout:{
                pack:'center'
            },
            docked:'bottom'
        },
        activeTab:1,
        defaults:{scrollable:true},
        items:[{ xtype: 'RingCreateEvent',iconCls:'add'},{xtype:'RingMyEvents',iconCls:'favorites'},{xtype:'RingMyFriends',iconCls:'team'}]
    }
});