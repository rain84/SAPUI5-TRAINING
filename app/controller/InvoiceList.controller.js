sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/ui/model/json/JSONModel'
  ],

  (Controller, JSONModel) => Controller.extend('app.controller.InvoiceList', {
    onInit(){
      const model = new JSONModel({'currency': 'EUR'});
      this.getView().setModel(model, 'view');
    }
  })
);
