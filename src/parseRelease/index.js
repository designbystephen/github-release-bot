/**
 * Parse release object
 * @param {Object} release - release object from GitHub v3
 */
export default (release = {}) => {
  if (!release) throw new Error('Missing release object')

   // parse github v3 release 
  try {
    const {
      name, // release name, like [STABLE] 0.9.4
      tag_name: version, // tag name aka version, like 0.9.4
      html_url: url, // release url,
      published_at: releasedAt, // release timestamp, like 2021-03-06T07:46:15
    } = release;

    if (
      !name
      || !version
      || !url
      || !releasedAt
    ) throw new Error();

    return {
      name,
      version,
      url,
      releasedAt,
    };

  } catch (ex) {
    throw new Error(`Missing expected release properties ${ex}`);
  }
};
