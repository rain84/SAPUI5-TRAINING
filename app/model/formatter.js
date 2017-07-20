sap.ui.define([], () => ({
  statusText: function (status) {
    const resourceBundle = this.getView().getModel("i18n").getResourceBundle();
    if (~'ABC'.indexOf(status)) return resourceBundle.getText(`invoiceStatus${status}`);
    else return status;
  }
}));


// sap.ui.define([], function () {
//   "use strict";
//   return {
//     statusText: function (sStatus) {
//       var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
//       switch (sStatus) {
//         case "A":
//           return resourceBundle.getText("invoiceStatusA");
//         case "B":
//           return resourceBundle.getText("invoiceStatusB");
//         case "C":
//           return resourceBundle.getText("invoiceStatusC");
//         default:
//           return sStatus;
//       }
//     }
//   };
// })
