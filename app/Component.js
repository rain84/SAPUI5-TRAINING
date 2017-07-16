MSApp.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel"
],

  (UIComponent, JSONModel, ResourceModel) =>
    UIComponent.extend("app.Component", {
      metadata: {rootView: 'app.view.App'},

      init() {
        UIComponent.prototype.init.apply(this, arguments);

        const data = { recipient: { name: 'World' } };
        const model = new JSONModel(data);
        this.setModel(model);

        const i18nModel = new ResourceModel({bundleName: "app.i18n.i18n"});
        this.setModel(i18nModel, 'i18n');
      }
    })
);
