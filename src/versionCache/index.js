import NodeCache from 'node-cache';

const {
  GITHUB_REPO
} = process.env;

const cache = new NodeCache();

/**
 * Compare version with version in cache
 * @param {String} version - version string to check
 * @returns {Boolean} are versions equal
 */
export const compare = (version) => {
  if (!version) throw new Error('Missing required version number to cache');

  const cachedVersion = cache.get(GITHUB_REPO);
  return version === cachedVersion;
};

/**
 * Store version string
 * @param {String} version - version string used to cache 
 * @returns node cache object
 */
export const store = (version) => {
  if (!version) throw new Error('Missing required version number to cache');

  // use repo string {author}/{repo} for storage id
  cache.set(GITHUB_REPO, version);

  return cache;
};

/**
 * Read cached version
 * @returns cached version
 */
export const read = () => cache.get(GITHUB_REPO);
