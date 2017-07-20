sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "app/controller/HelloDialog"
  ],

  (UIComponent, JSONModel, HelloDialog) =>
    UIComponent.extend("app.Component", {
      metadata: { manifest: 'json' },

      init() {
        UIComponent.prototype.init.apply(this, arguments);

        const data = { recipient: { name: 'World' } };
        const model = new JSONModel(data);
        this.setModel(model);

        this._helloDialog = new HelloDialog(this.getRootControl());
      },

      openHelloDialog() {
        this._helloDialog.open();
      }
    })
);

