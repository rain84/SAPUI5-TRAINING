sap.ui.define([
    'sap/ui/base/Object'
  ],

  (UI5Object) =>
    UI5Object.extend('app.controller.HelloDialog', {
      constructor: function (view) {
        this._view = view;
      },

      open () {
        let dialog = this._view.byId('HelloDialog');

        if (!dialog) {
          const fragmentController = {
            onCloseDialog() {
              dialog.close();
            }
          };

          dialog = sap.ui.xmlfragment(this._view.getId(), 'app.view.HelloDialog', fragmentController);
          this._view.addDependent(dialog);
        }

        dialog.open();
      }
    })
);
