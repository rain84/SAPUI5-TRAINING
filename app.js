const app = () => {
  sap.ui
    .xmlview({ viewName: 'app.view.App' })
    .placeAt('content')
  ;

  // (new sap.m.Text({ text: 'test! test! test! '})).placeAt('content');
};


sap.ui.getCore().attachInit(app);
console.log('app inited');
