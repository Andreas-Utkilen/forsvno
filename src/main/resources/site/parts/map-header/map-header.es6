const libs = {
  portal: require("/lib/xp/portal"),
  freemarker: require("/site/lib/tineikt/freemarker"),
  utilx: require("/lib/bouvet/util-ex"),
  i18n: require("/lib/xp/i18n")
};

const mapdata = [{
    "country": "Afghanistan",
    "region": "Asia",
    "lat": "33.93911",
    "lng": "67.709953"
  },
  {
    "country": "Albania",
    "region": "Europe",
    "lat": "41.153332",
    "lng": "20.168331"
  },
  {
    "country": "Angola",
    "region": "Africa",
    "lat": "-11.202692",
    "lng": "17.873887"
  },
  {
    "country": "Bosnia-Hercegovina",
    "region": "Europe",
    "lat": "43.915886",
    "lng": "17.679076"
  },
  {
    "country": "Den demokratiske republikken Kongo",
    "region": "Africa",
    "lat": "-0.228021",
    "lng": "15.827659"
  },
  {
    "country": "Den sentralafrikanske republikk",
    "region": "Africa",
    "lat": "6.611111",
    "lng": "20.939444"
  },
  {
    "country": "Egypt",
    "region": "Africa",
    "lat": "26.820553",
    "lng": "30.802498"
  },
  {
    "country": "El Salvador",
    "region": "North-America",
    "lat": "13.794185",
    "lng": "-88.89653"
  },
  {
    "country": "Eritrea",
    "region": "Africa",
    "lat": "15.179384",
    "lng": "39.782334"
  },
  {
    "country": "Estland",
    "region": "Europe",
    "lat": "58.595272",
    "lng": "25.013607"
  },
  {
    "country": "Etiopia",
    "region": "Africa",
    "lat": "9.145",
    "lng": "40.489673"
  },
  {
    "country": "Georgia",
    "lat": "42.315407",
    "lng": "43.356892"
  },
  {
    "country": "Guatemala",
    "region": "North-America",
    "lat": "15.783471",
    "lng": "-90.230759"
  },
  {
    "country": "Hellas",
    "region": "Europe",
    "lat": "39.074208",
    "lng": "21.824312"
  },
  {
    "country": "India",
    "region": "Asia",
    "lat": "20.593684",
    "lng": "78.96288"
  },
  {
    "country": "Indonesia",
    "region": "Asia",
    "lat": "-0.789275",
    "lng": "113.921327"
  },
  {
    "country": "Irak",
    "region": "Middle-East",
    "lat": "33.223191",
    "lng": "43.679291"
  },
  {
    "country": "Iran",
    "region": "Middle-East",
    "lat": "32.427908",
    "lng": "53.688046"
  },
  {
    "country": "Israel",
    "region": "Middle-East",
    "lat": "31.046051",
    "lng": "34.851612"
  },
  {
    "country": "Italia",
    "region": "Europe",
    "lat": "41.87194",
    "lng": "12.56738"
  },
  {
    "country": "Jemen",
    "region": "Middle-East",
    "lat": "15.552727",
    "lng": "48.516388"
  },
  {
    "country": "Jordan",
    "region": "Middle-East",
    "lat": "30.585164",
    "lng": "36.238414"
  },
  {
    "country": "Korea",
    "region": "Asia",
    "lat": "35.907757",
    "lng": "127.766922"
  },
  {
    "country": "Kosovo",
    "region": "Europe",
    "lat": "42.602636",
    "lng": "20.902977"
  },
  {
    "country": "Kroatia",
    "region": "Europe",
    "lat": "45.1",
    "lng": "15.2"
  },
  {
    "country": "Kuwait",
    "region": "Middle-East",
    "lat": "29.31166",
    "lng": "47.481766"
  },
  {
    "country": "Kypros",
    "region": "Europe",
    "lat": "35.126413",
    "lng": "33.429859"
  },
  {
    "country": "Latvia",
    "region": "Europe",
    "lat": "56.879635",
    "lng": "24.603189"
  },
  {
    "country": "Libanon",
    "region": "Middle-East",
    "lat": "33.854721",
    "lng": "35.862285"
  },
  {
    "country": "Libya",
    "region": "Africa",
    "lat": "26.3351",
    "lng": "17.228331"
  },
  {
    "country": "Litauen",
    "region": "Europe",
    "lat": "55.169438",
    "lng": "23.881275"
  },
  {
    "country": "Makedonia",
    "region": "Europe",
    "lat": "41.608635",
    "lng": "21.745275"
  },
  {
    "country": "Mali",
    "region": "Africa",
    "lat": "17.570692",
    "lng": "-3.996166"
  },
  {
    "country": "Middelhavet (Gibraltarstredet)",
    "region": "Europe",
    "lat": "36.137741",
    "lng": "-5.345374"
  },
  {
    "country": "Nepal",
    "region": "Asia",
    "lat": "28.394857",
    "lng": "84.124008"
  },
  {
    "country": "Pakistan",
    "region": "Asia",
    "lat": "30.375321",
    "lng": "69.345116"
  },
  {
    "country": "Saudi-Arabia",
    "region": "Middle-East",
    "lat": "23.885942",
    "lng": "45.079162"
  },
  {
    "country": "Serbia og Montenegro (tidl. Jugoslavia)",
    "region": "Europe",
    "lat": "44.818996724",
    "lng": "20.457331504"
  },
  {
    "country": "Sierra Leone",
    "region": "Africa",
    "lat": "8.460555",
    "lng": "-11.779889"
  },
  {
    "country": "Somalia",
    "region": "Africa",
    "lat": "5.152149",
    "lng": "46.199616"
  },
  {
    "country": "Sudan",
    "region": "Africa",
    "lat": "12.862807",
    "lng": "30.217636"
  },
  {
    "country": "Syria",
    "region": "Middle-East",
    "lat": "34.802075",
    "lng": "38.996815"
  },
  {
    "country": "Sør-Sudan",
    "region": "Africa",
    "lat": "7.8626845",
    "lng": "29.6949232"
  },
  {
    "country": "Tadsjikistan",
    "region": "Asia",
    "lat": "38.8581784",
    "lng": "71.2479841"
  },
  {
    "country": "Tsjad",
    "region": "Africa",
    "lat": "15.454166",
    "lng": "18.732207"
  },
  {
    "country": "Tyrkia",
    "region": "Europe",
    "lat": "38.963745",
    "lng": "35.243322"
  },
  {
    "country": "Tyskland",
    "region": "Europe",
    "lat": "51.165691",
    "lng": "10.451526"
  },
  {
    "country": "USA",
    "region": "North-America",
    "lat": "37.09024",
    "lng": "-95.712891"
  },
  {
    "country": "Øst-Timor",
    "region": "Oceania",
    "lat": "-8.794744",
    "lng": "126.1369154"
  }
]

exports.get = () => {
  const path = libs.portal.getComponent().path;
  const uniqueId = path.split("/").join("-");
  const config = libs.portal.getComponent().config

  const data = {
    header: config.header,
    subheader: config.subheader,
    buttonText: config.buttonText,
    data: mapdata,
    icons: {
      arrowRight: libs.portal.assetUrl({ path: "images/arrow-right-white.svg" }),
      marker: libs.portal.assetUrl({ path: "images/marker.png" }),
      markerRetina: libs.portal.assetUrl({ path: "images/marker.png" }),
      shadow: libs.portal.assetUrl({ path: "images/marker-shadow.png" }),
    },
    localize: libs.i18n.getPhrases([], ["i18n/phrases"])
  }
  const model = {
    uniqueId,
    data: JSON.stringify(data)
  };

  const view = resolve("map-header.ftl");
  const body = libs.freemarker.render(view, model);
  const mapHeaderCss = libs.portal.assetUrl({ path: "css/map-header.css" });
  const mapHeaderCssContribution = `<link rel="preload" href="${mapHeaderCss}" as="style"><link rel="stylesheet" href="${mapHeaderCss}">`;
  const initialDataScript = libs.freemarker.render(resolve("../../template/common/initial-data.ftl"), model);
  const vueScript = `<script src="${libs.portal.assetUrl({ path: "js/mapHeaderVue.js" })}" async></script>`;

  return {
    body: body,
    pageContributions: {
      headEnd: [mapHeaderCssContribution],
      bodyEnd: [initialDataScript, vueScript]
    }
  };
};