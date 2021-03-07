import expect from 'expect';
import parseRelease from '.';

describe('parseRelease', () => {
  it('should exist', () => {
    expect(parseRelease).toBeDefined();
  });

  it('should parse a release response', () => {
    const release = parseRelease({
      name: 'test release',
      tag_name: '1.0.0',
      html_url: 'http://designbystephen.com',
      published_at: Date.now(),
    });

    expect(release).toBeDefined();
  });

  it('should fail parse an invalid release response objects', () => {

    expect(() => parseRelease()).toThrow();
    expect(() => parseRelease({})).toThrow();

    expect(() => parseRelease({
      xname: 'test release',
      tag_name: '1.0.0',
      html_url: 'http://designbystephen.com',
      published_at: Date.now(),
    })).toThrow();

    expect(() => parseRelease({
      name: 'test release',
      xtag_name: '1.0.0',
      html_url: 'http://designbystephen.com',
      published_at: Date.now(),
    })).toThrow();

    expect(() => parseRelease({
      name: 'test release',
      tag_name: '1.0.0',
      xhtml_url: 'http://designbystephen.com',
      published_at: Date.now(),
    })).toThrow();
    
    expect(() => parseRelease({
      name: 'test release',
      tag_name: '1.0.0',
      html_url: 'http://designbystephen.com',
      xpublished_at: Date.now(),
    })).toThrow();
  });
});
