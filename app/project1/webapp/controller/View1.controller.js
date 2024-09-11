sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v4/ODataModel" // Make sure to include ODataModel if using OData V4
],
function (Controller, ODataModel) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
       onInit: function() {
            // Define the path for the function call with the parameter
            var sPath = "/customAction(param='Hello%20World')";
        
            // Bind the context to call the function and execute it
            this.getOwnerComponent().getModel().bindContext(sPath).requestObject().then(function(oData) {
                // Handle the success, response is in oData
                console.log("Response from CAP Service:", oData.value[0].message);
                sap.m.MessageToast.show("Response: " + oData.value[0].message);
            }).catch(function(oError) {
                // Handle the error
                console.error("Error calling CAP service", oError);
                sap.m.MessageToast.show("Error: " + oError.message);
            });
        }
        
    });
});
