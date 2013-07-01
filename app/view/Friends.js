Ext.create('Ext.data.Store',{
	id:'friendsList',
	model:'ring.model.FriendsModel',
	sorters:'name',
	data:[{name:'冯吕铭',cellphone:'18500195961'},{name:'冯吕铭1',cellphone:'13810610842'}]
});

Ext.define('ring.view.Friends',{
	extend:'Ext.form.Panel',
	xtype:'RingMyFriends',
	
	config:{
		id:'myFriendsList',
		scrollable:'vertical',
		autoDestroy: false,
		layout:'fit',
		title:'联系人',
		items:[{
			xtype:'list',
			store:'friendsList',
			itemTpl:'<div><strong>{name}</strong>-{cellphone}</div>',
			onItemDisclosure:function(record,btn,index){
				if(!this.overlay){
					this.overlay = Ext.Viewport.add({
						xtype:'panel',
						modal:true,
						hideOnMaskTap:true,
						showAnimation:{
							type:'popIn',
							duration:250,
							easing:'ease-out',
						},
						hideAnimation:{
							type:'popOut',
							duration:250,
							easing:'ease-out',
						},
						centered:true,
						scrollable:true,
						width:400,
						height:400,
										items:[{
					xtype:'fieldset',
					title:'事件信息',
					instructions:'请填写事件信息',
					defaults:{labelwidth:'20%'},
					items:[{
					 xtype:'textfield',
					 id:'event_title1',
					 name:'title',
					 label:'名称',
					 placeHolder:'请输入事件名称',
					 required:true,
					 clearIcon:true   
					},{
						xtype:'textfield',
						id:'evnet_description1',
						name:'description',
						label:'详细信息',
						placeHolder:'请输入详细信息',
						clearIcon:true
					},{
						xtype:'selectfield',
						id:'event_type1',
						name:'type',
						label:'事件类型',
						options:[{text:'一次',value:'1'},
								{text:'每天',value:'2'},
								{text:'每周',value:'3'},
								{text:'每月',value:'4'},
								{text:'每年',value:'5'}],
						listeners:{
							change:function(select,newValue,oldValue){
								   switch(newValue.data.value){
									 case '1':
										break;
									 case '2':
										 break;
									 case '3':
										break;
									 case '4':
										break;
									 case '5':
										break;
								   }
							}
						}

					},{
						xtype:'datepickerfield',
						id:'event_startdate1',
						name:'startdate',
						label:'发生日期',
						picker:{
							yearFrom:2012,
							yearTo:2100
						},
						value:new Date(),
						dateFormat:'Y-m-d',
					},{
						xtype:'panel',
						layout:{type:'hbox',pack:'end'},
						defaults:{xtype:'button'},
						items:[{
							xtype:'button',
							ui:'action',
							text:'提交',
							handler:function(){
								
							}
						},{
							xtype:'button',
							ui:'action',
							text:'重置',
							handler:function(){
								
							}
						}]
					}]
				}]
					});
				}
				this.overlay.show();
			}
		}]
	}
});