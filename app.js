const app = () => {
  sap.ui
    .xmlview({ viewName: 'app.view.App' })
    .placeAt('content')
  ;
};


sap.ui.getCore().attachInit(app);
console.log('app inited');
