sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController"
], function (BaseController) {
	"use strict";
	return BaseController.extend("sap.ui.demo.nav.controller.SPK.SPK", {
		onInit: function () {
			var oRouter = this.getRouter();
			oRouter.getRoute("spk").attachMatched(this._onRouteMatched, this);
			// Hint: we don't want to do it this way
			/*
			oRouter.attachRouteMatched(function (oEvent){
				var sRouteName, oArgs, oView;
				sRouteName = oEvent.getParameter("name");
				if (sRouteName === "employee"){
					this._onRouteMatched(oEvent);
				}
			}, this);
			*/
		},
		_onRouteMatched : function (oEvent) {
			var oArgs, oView, sPath;
			
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();			
			
			oView.bindElement({
				path : "/HeaderSet(Bukrs='"+ oArgs.bukrs +"',Spkid='" + oArgs.spkId + "')",
				events : {
					change: this._onBindingChange.bind(this),
					dataRequested: function (oEvent) {
						
					},
					dataReceived: function (oEvent) {
						
					}
				}
			});
			/*sPath = oEvent.getParameter("arguments").contextPath;
			sPath = sPath + "/HeaderSet(Bukrs='"+ oArgs.bukrs +"',Spkid='" + oArgs.spkId + "')";
			oView.byId("aktTable").bindRows(sPath+'/Aktivitas');*/
		},
		_onBindingChange : function (oEvent) {
			// No data for the binding
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("notFound");
			}
		},
		
		onShowResume: function(oEvent){
			var oCtx = this.getView().getElementBinding().getBoundContext();
			this.getRouter().navTo("employeeResume",{
				employeeId : oCtx.getProperty("EmployeeID")
			});
		},
		
		onItemPressed : function(oEvent){
			var oItem, oCtx, oRouter;
			oItem = oEvent.getParameter("listItem");
			oCtx = oItem.getBindingContext();
			this.getRouter().navTo("spkAkt",{
				bukrs : oCtx.getProperty("Bukrs"),
				spkId : oCtx.getProperty("Spkid"),
				itemno : oCtx.getProperty("Itemno")				
			});
		}
	});
});