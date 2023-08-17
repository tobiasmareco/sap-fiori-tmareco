sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "invoices/sapui5/models/Models",
    "sap/ui/model/resource/ResourceModel"
]
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    , function (Controller,
        MessageToast,
        Models,
        ResourceModel) {
        'use strict';
        return Controller.extend("invoices.sapui5.controller.App", {
            onInit: function () {
                // set object data model on the view App.view
                this.getView().setModel(Models.createRecipients());
                // set data model on the App.view
                const i18nModel = new ResourceModel({ bundleName: "invoices.sapui5.i18n.i18n" });
                this.getView().setModel(i18nModel, "i18n")
            },
            onPressSayHello: function (event) {
                const objectBundle = this.getView().getModel('i18n').getResourceBundle();
                const recipientModel = this.getView().getModel().getProperty('/recipient/name');
                const toastMessageText = `${objectBundle.getText("helloMessage", [recipientModel])}`;
                MessageToast.show(toastMessageText)
            }
        })
    }) 