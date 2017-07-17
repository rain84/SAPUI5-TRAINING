sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel"
],

  (UIComponent, JSONModel) =>
    UIComponent.extend("app.Component", {
      metadata: {manifest: 'json'},

      init() {
        UIComponent.prototype.init.apply(this, arguments);

        const data = { recipient: { name: 'World' } };
        const model = new JSONModel(data);
        this.setModel(model);
      }
    })
);
