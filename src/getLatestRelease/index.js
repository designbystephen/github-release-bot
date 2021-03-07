import fetch from 'isomorphic-fetch';
import parseRelease from '../parseRelease';

const {
  GITHUB_API_BASEURL,
  GITHUB_REPO,
} = process.env;


const GITHUB_RELEASE_URI = `repos/${GITHUB_REPO}/releases`;

/**
 * Fetch latest release
 * @returns {Promise} latest release object from GitHub v3
 */
export default async () => {
  try {
    // parse response and then the resulting json
    const response = await fetch(`${GITHUB_API_BASEURL}/${GITHUB_RELEASE_URI}`);
    const body = await response.json();

    // last release should be first entry in array
    const latestRelease = body[0];

    // require last release
    if (!latestRelease) throw new Error('Unable to parse last release');

    // return last release value
    return parseRelease(latestRelease);
  } catch (ex) {
    // reject this promise
    throw new Error(`Unable to fetch recent releases from GitHub ${ex}`);
  }
};

