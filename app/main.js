sap.ui.getCore().attachInit(() => {
  const app = new sap.ui.core.ComponentContainer({ name: 'app', height: '100%' });
  const shell = new sap.m.Shell({ app });

  shell.placeAt('content');
  console.log('app inited');
});
