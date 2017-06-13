sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController"
], function (BaseController) {
	"use strict";
	return BaseController.extend("sap.ui.demo.nav.controller.SPK.SPKList", {
		onListItemPressed : function(oEvent){
			var oItem, oCtx;
			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext();
			this.getRouter().navTo("spk",{
				spkId : oCtx.getProperty("Spkid"),
				bukrs : oCtx.getProperty("Bukrs")
			});
		}
	});
});