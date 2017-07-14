sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/m/MessageToast'
  ],

  (Controller, MessageToast) => Controller.extend('app.controller.App', {
    onShowHello() {
      MessageToast.show('Hello world!');
    }
  })
);
