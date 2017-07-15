sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/m/MessageToast',
  'sap/ui/model/json/JSONModel',
  "sap/ui/model/resource/ResourceModel"
  ],

  (Controller, MessageToast, JSONModel, ResourceModel) =>
    Controller.extend('app.controller.App', {
      onInit() {
        const data = {recipient: {name: 'World'}};
        const model = new JSONModel(data);
        const i18nModel = new ResourceModel({
          bundleName: "app.i18n.i18n"
        });

        this.getView().setModel(i18nModel, "i18n");
        this.getView().setModel(model);
      },

      onShowHello() {
        var recipient = this
          .getView()
          .getModel()
          .getProperty("/recipient/name")
          ;

        var bundle = this
          .getView()
          .getModel("i18n")
          .getResourceBundle()
          ;

        var msg = bundle.getText("helloMsg", [recipient]);

        MessageToast.show(msg);
      }
  })
);
