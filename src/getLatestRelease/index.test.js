import expect from 'expect';
import nock from 'nock';
import getLatestRelease from '.';

const {
  GITHUB_API_BASEURL,
  GITHUB_REPO,
} = process.env;

describe('getLatestRelease', () => {
  it('should exist', () => {
    expect(getLatestRelease).toBeDefined();
  });

  it('should fetch the latest release', async () => {
    const mockCall = nock(GITHUB_API_BASEURL)
      .get(`/repos/${GITHUB_REPO}/releases`)
      .reply(200, [{
        name: 'test',
        tag_name: 'test',
        html_url: 'test',
        published_at: 'test'
      }]);

    // TODO: use nock here instead of testing real results...
    const release = await getLatestRelease();

    // did we get a response?
    expect(release).toBeDefined();
    
    // test for props
    expect(release).toHaveProperty('name', 'test');
    expect(release).toHaveProperty('version', 'test');
    expect(release).toHaveProperty('url', 'test');
    expect(release).toHaveProperty('releasedAt', 'test');
  });
})
