sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/m/MessageToast',
  ],

  (Controller, MessageToast) =>
    Controller.extend('app.controller.HelloPanel', {
      onShowHello() {
        const bundle = this.getView().getModel("i18n").getResourceBundle();
        const recipient = this.getView().getModel().getProperty("/recipient/name");
        const msg = bundle.getText("helloMsg", [recipient]);

        MessageToast.show(msg);
      },

      onOpenDialog() {
        const view = this.getView();
        let dialog = view.byId('HelloDialog');

        console.log('onOpenDialog - 1');
        if (!dialog) {
          console.log('onOpenDialog - 2');

          dialog = sap.ui.xmlfragment(view.getId(), 'app.view.HelloDialog');
          view.addDependent(dialog);
        }

        dialog.open();
      }
  })
);
