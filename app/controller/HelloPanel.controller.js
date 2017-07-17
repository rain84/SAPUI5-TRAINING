sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/m/MessageToast',
  ],

  (Controller, MessageToast) =>
    Controller.extend('app.controller.HelloPanel', {
      onShowHello() {
        var bundle = this.getView().getModel("i18n").getResourceBundle();
        var recipient = this.getView().getModel().getProperty("/recipient/name");
        var msg = bundle.getText("helloMsg", [recipient]);

        MessageToast.show(msg);
      }
  })
);
