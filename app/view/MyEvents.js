Ext.define('ring.view.MyEvents',{
	extend:'Ext.form.Panel',
	xtype:'RingMyEvents',
	
	requires: [
        'ring.model.EventsModel'
    ],
	config:{
		id:'myEventsList',
		scrollable:'vertical',
		autoDestroy: false,
		layout:'fit',
		title:'我的'
	}
});