sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
]
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     */
    , function (Controller,
        MessageToast) {
        'use strict';
        return Controller.extend("invoices.sapui5.controller.App", {
            onInit: function () {

            },
            onButtonPressSayHello: function (event) {
                const objectBundle = this.getView().getModel('i18n').getResourceBundle();
                const recipientModel = this.getView().getModel().getProperty('/recipient/name');
                const toastMessageText = `${objectBundle.getText("helloMessage", [recipientModel])}`;
                MessageToast.show(toastMessageText)
            }
        })
    }) 