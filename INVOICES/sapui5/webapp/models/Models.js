sap.ui.define([
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
    */
    function (JSONModel) {
        'use strict';
        return {
            createRecipients: function () {
                const objectData = {
                    recipient: {
                        name: "World"
                    }
                }
                const objectModel = new JSONModel(objectData);
                return objectModel
            }
        }
    })