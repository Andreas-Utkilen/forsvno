const portal = require('/lib/xp/portal')
const thymeleaf = require('/lib/thymeleaf')

exports.get = (req) => {
  const content = portal.getContent()
  log.info(JSON.stringify(content))
  const view = resolve('press-release.html');
  let imageIds = content.data.body.match(/image:\/\/([0-9a-z\-])+/g);
  for (let index = 0; index < imageIds.length; index++) {
    var url = portal.imageUrl({
      id: imageIds[index].replace("image://", ""),
      scale: 'block(1024,768)',
      type: 'absolute'
    });
    log.info(url);
  }
  return {
    body: thymeleaf.render(view, {
      displayName: content.displayName,
      body: content.data.body,
      region: content.page.regions['main']
    })
  };
};