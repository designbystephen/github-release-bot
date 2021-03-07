import expect from 'expect';
import nock from 'nock';
import postToDiscord from '.';

const {
  DISCORD_API_BASEURL,
  DISCORD_WEBHOOK_ID,
  DISCORD_WEBHOOK_TOKEN
} = process.env;

const DISCORD_URI = `webhooks/${DISCORD_WEBHOOK_ID}/${DISCORD_WEBHOOK_TOKEN}`;

describe('postToDiscord', () => {
  it('should exist', () => {
    expect(postToDiscord).toBeDefined();
  });

  it('should post a new message to discord', async () => {
    // mock interceptor
    const mockCall = nock(DISCORD_API_BASEURL)
      .post(`/${DISCORD_URI}`)
      .reply(201);

    // test message
    const message = {
      key: 'test',
    };

    // capture request event
    mockCall.emit('request', (req, interceptor, body) => {
      expect(body).toBeDefined();
      expect(body).toHaveProperty('embeds');
      expect(body.embeds).toHaveLength(1);

      expect(body.embeds[0].message).toMatchObject(message);
    });

    // post a new message
    const response = await postToDiscord({
      message
    });

    // did we get a response?
    expect(response).toBeDefined();
  });
})
