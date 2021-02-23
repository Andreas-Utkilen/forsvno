const libs = {
  portal: require("/lib/xp/portal"),
  freemarker: require("/site/lib/tineikt/freemarker"),
};

exports.get = () => {
  const path = libs.portal.getComponent().path;;

  const config = libs.portal.getComponent().config
  const data = {
    search: config.search || "",
    backgroundColor: config.color || "white",
    cols: config.cols || 2,
    rows: config.rows || 2,
    owner: config.owner ? config.owner.join(",") : ""
  }
  const view = resolve("digital-museum.ftl");
  const body = libs.freemarker.render(view, data);

  const dmCss = libs.portal.assetUrl({ path: "css/digital-museum.css" });
  const dmCssContribution = `<link rel="preload" href="${dmCss}" as="style"><link rel="stylesheet" href="${dmCss}">`;

  return {
    body: body,
    pageContributions: {
      headEnd: [dmCssContribution]
    }
  };
};