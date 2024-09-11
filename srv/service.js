const cds = require('@sap/cds');

module.exports = cds.service.impl(async (srv) => {

    // Implement the action customAction
    srv.on('customAction', async (req) => {

        console.log("Dataa requested", req.data);
        let responseMessage = [{
            "message" : "you have done it!!!",
            "success" : 204
        }, {
            "message" : "you have done it!!!",
            "success" : 204
        }]

        // Return the custom response
        return responseMessage;
    });
});
