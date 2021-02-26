const libs = {
  portal: require('/lib/xp/portal'),
  httpClient: require('/lib/http-client'),
  xml2js: require("/site/lib/bouvet/xml2json")
};

const root = 'https://api.dimu.org/api';

exports.get = (req) => {
  return {
    contentType: 'application/json',
    body: getItems(parseparams(req.params))
  }
}

function getItems(params) {
  const query = (params.query || '').trim();
  const config = libs.portal.getSiteConfig();
  const owners = fetch(`/owners?country=no&api.key=${encodeURIComponent(config.digitalMuseumAPI)}`);
  return parseResults(owners, query)
}

function parseResults(xml, query) {
  let data = libs.xml2js.parseString(xml);
  let hits = uniqBy(parseResponse(data, query));
  return {
    hits: hits,
    count: hits.length,
    total: hits.length
  }
}

function parseResponse(data, query) {
  const filtered = (data.owners ? data.owners.owner : []).filter((owner) => owner.name.toLowerCase().indexOf(query.toLowerCase()) != -1 || owner.identifier.toLowerCase().indexOf(query.toLowerCase()) != -1);
  return filtered.map((v) => ({
    id: v.identifier,
    description: v.identifier,
    displayName: v.name
  }))
}

function fetch(url) {
  try {
    const response = libs.httpClient.request({
      url: `${root}${url}`,
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
      contentType: 'application/json',
      connectTimeout: 5000,
      readTimeout: 10000
    });
    if (response.status === 200) {
      return response.body;
    }
    log.info(JSON.stringify(response));
  } catch (e) {
    log.info(e)
  }
  return "";
}

const uniqBy = (arr) => {
  const result = [];
  const map = [];
  arr.forEach((item) => {
    if (map.indexOf(item.id) === -1) {
      map.push(item.id);
      result.push(item);
    }
  });
  return result;
};

function parseparams(params) {

  let query = params['query'],
    start, count;
  try {
    start = Math.max(parseInt(params['start']) || 0, 0);
  } catch (e) {
    start = 0;
  }
  try {
    count = Math.max(parseInt(params['count']) || 15, 0);
  } catch (e) {
    count = 15;
  }

  return {
    query: query,
    start: start,
    end: start + count,
    count: count
  }
}
