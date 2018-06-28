import humps from 'humps';

export default ({ camelizeKeys = true } = {}) => fetchObject =>
  Promise.resolve(fetchObject)
    .then(async r => ({
      ok: r.ok,
      status: r.status,
      statusText: r.statusText,
      jsonBody: await r.json().catch(_ => null),
    }))
    .then(camelizeKeys ? humps.camelizeKeys : _ => _)
    .catch(error => {
      console.error('fetchObject', fetchObject);
      console.error(error);
      return { ok: false, exception: error && error.message };
    });
