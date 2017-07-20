sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/m/MessageToast',
  ],

  (Controller, MessageToast) =>
    Controller.extend('app.controller.HelloPanel', {
      onShowHello: function() {
        const bundle = this.getView().getModel("i18n").getResourceBundle();
        const recipient = this.getView().getModel().getProperty("/recipient/name");
        const msg = bundle.getText("helloMsg", [recipient]);

        MessageToast.show(msg);
      },

      onOpenDialog() {
        this.getOwnerComponent().openHelloDialog();
      },

      onCloseDialog() {
        this.getView().byId('HelloDialog').close();
      }
  })
);
