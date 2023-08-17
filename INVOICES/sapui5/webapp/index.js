sap.ui.define([
"sap/ui/core/mvc/XMLView"
]
    /**
     * @param {typeof sap.ui.core.mvc.XMLView} XMLView
     */
    , function (XMLView) {
        'use strict';
        XMLView.create({
            viewName:"invoices.sapui5.view.App"
        }).then(function(objectView){
            objectView.placeAt("content");
        })
    });