exports.load = function (app) {
  app.renderer.on('beginRender', (event) => {
    if (event.project.groups) {
      event.project.groups.forEach((group) => {
        if (group.title === 'Modules') {
          group.title = 'Packages';
        }
      });
    }
  });
};
