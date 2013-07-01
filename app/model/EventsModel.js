Ext.define('ring.model.EventsModel',{
	extend :'Ext.data.Model',
	xtype : 'RingEventsModel',
	config : {
		fields :['starttime','eventname','eventdescription']
	}
});