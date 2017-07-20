sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'app/model/formatter'
  ],

  (Controller, JSONModel, formatter) => {
    console.log('formatter', formatter);

    return Controller.extend('app.controller.InvoiceList', {
      formatter,

      onInit() {
        const model = new JSONModel({
          'currency': 'EUR'
        });
        this.getView().setModel(model, 'view');
      }
    });
  }
);
