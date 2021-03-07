const {
  GITHUB_REPO
} = process.env;
/**
 * Create a discord message of embed type
 * @param {Object} params - mesage params
 * @param {String} [params.version=''] - release version
 * @param {String} [params.name=''] - release name
 * @param {String} [params.releasedAt=''] - timestamp of release
 * @param {String} [params.content=''] - additional content 
 * @param {String} [params.url=''] - additional content 
 * @returns {Object} discord embedded message type 
 */
export default ({
  version = '', 
  name = '', 
  releasedAt = '', 
  content = '',
  url = '',
}) => ({
 title: `New Version Released! ${version}`,
 description: `${GITHUB_REPO} \r\n ${name} \r\n ${releasedAt} \r\n ${content}`,
 url,
});
