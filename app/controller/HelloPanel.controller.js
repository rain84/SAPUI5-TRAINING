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

        if (!dialog) {
          dialog = sap.ui.xmlfragment(view.getId(), 'app.view.HelloDialog', this);
          view.addDependent(dialog);
        }

        dialog.open();
      },

      onCloseDialog() {
        this.getView().byId('HelloDialog').close();
      }
  })
);
