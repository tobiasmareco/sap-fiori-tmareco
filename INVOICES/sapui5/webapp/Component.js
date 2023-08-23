sap.ui.define(
    [
        "sap/ui/core/UIComponent",
        "invoices/sapui5/models/Models",
        "sap/ui/model/resource/ResourceModel"
    ],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent 
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (UIComponent, Models, ResourceModel) {
        const sClassName = 'invoices.sapiu5.Component';
        return UIComponent.extend(sClassName, {
            metadata: {
                "rootView": {
                    "viewName":"invoices.sapui5.view.App",
                    "type":"XML",
                    "async":"true",
                    "id":"App"
                }
            },
            init: function () {
                // llamar a la funcion padre.
                UIComponent.prototype.init.apply(this, arguments);
                // set object data model on the view App.view
                this.setModel(Models.createRecipients());
                // set data model on the App.view
                const i18nModel = new ResourceModel({ bundleName: "invoices.sapui5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }
        })
    });