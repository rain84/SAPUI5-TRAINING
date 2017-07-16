sap.ui.getCore().attachInit(() => {
  const container = new sap.ui.core.ComponentContainer({ name: 'app' });
  container.placeAt('content');

  console.log('app inited');
});
