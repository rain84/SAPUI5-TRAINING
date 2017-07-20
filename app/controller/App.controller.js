sap.ui.define([
  'sap/ui/core/mvc/Controller'
  ],

  Controller => Controller.extend('app.controller.App', {
    onOpenDialog(){
      this.getOwnerComponent().openHelloDialog();
    }
  })
);
