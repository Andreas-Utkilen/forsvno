const libs = {
  portal: require("/lib/xp/portal"),
  freemarker: require("/site/lib/tineikt/freemarker"),
  utilx: require("/lib/bouvet/util-ex")
};

exports.get = () => {
  const path = libs.portal.getComponent().path;
  const uniqueId = path.split("/").join("-");
  const config = libs.portal.getComponent().config;

  const data = {
    url: config.url,
    cover: libs.portal.imageUrl({
      id: config.cover,
      scale: "max(1200)"
    }),
    icons: {
      close: libs.portal.assetUrl({ path: "images/close-white.svg" })
    }
  }
  const model = {
    uniqueId,
    data: JSON.stringify(data)
  };
  const view = resolve("spinview.ftl");
  const body = libs.freemarker.render(view, model);

  const spinviewCss = libs.portal.assetUrl({ path: "css/spinview.css" });
  const spinviewCssContribution = `<link rel="preload" href="${spinviewCss}" as="style"><link rel="stylesheet" href="${spinviewCss}">`;

  const initialDataScript = libs.freemarker.render(resolve("../../template/common/initial-data.ftl"), model);
  const vueScript = `<script src="${libs.portal.assetUrl({ path: "js/spinviewVue.js" })}" async></script>`;

  return {
    body: body,
    pageContributions: {
      headEnd: [spinviewCssContribution],
      bodyEnd: [initialDataScript, vueScript]
    }
  };
};
