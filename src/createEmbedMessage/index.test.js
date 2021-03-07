import expect from 'expect';
import createEmbedMessage from '.';

describe('createEmbedMessage', () => {
  it('should exist', () => {
    expect(createEmbedMessage).toBeDefined();
  });

  it('should create a message formated object', () => {
    // we don't care about the content at this point
    const message = createEmbedMessage({});

    expect(message).toBeDefined();
    expect(message).toHaveProperty('title');
    expect(message).toHaveProperty('description');
    expect(message).toHaveProperty('url');
  })
});
