const libs = {
  portal: require("/lib/xp/portal"),
  freemarker: require("/site/lib/tineikt/freemarker"),
  utilx: require("/lib/bouvet/util-ex")
};

exports.get = () => {
  const path = libs.portal.getComponent().path;;

  const config = libs.portal.getComponent().config
  const data = {
    search: config.search || "",
    backgroundColor: config.color || "white",
    cols: config.cols || 2,
    rows: config.rows || 2,
  }
  const view = resolve("iframe.ftl");
  const body = libs.freemarker.render(view, data);

  const iframeCss = libs.portal.assetUrl({ path: "css/iframecss" });
  const iframeCssContribution = `<link rel="preload" href="${iframeCss}" as="style"><link rel="stylesheet" href="${iframeCss}">`;

  return {
    body: body,
    pageContributions: {
      headEnd: [iframeCssContribution]
    }
  };
};
