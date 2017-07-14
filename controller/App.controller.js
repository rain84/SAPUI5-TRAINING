sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/m/MessageToast',
  'sap/ui/model/json/JSONModel',
  ],

  (Controller, MessageToast, JSONModel) => Controller.extend('app.controller.App', {
    onInit() {
      const oData = {recipient: {name: 'World'}};
      const oModel = new JSONModel(oData);

      this.getView().setModel(oModel);
    },

    onShowHello() {
      MessageToast.show('Hello world!');
    }
  })
);
