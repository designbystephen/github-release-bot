import fetch from 'isomorphic-fetch';

const {
  DISCORD_API_BASEURL,
  DISCORD_WEBHOOK_ID,
  DISCORD_WEBHOOK_TOKEN
} = process.env;

const DISCORD_URI = `webhooks/${DISCORD_WEBHOOK_ID}/${DISCORD_WEBHOOK_TOKEN}`;

/**
 * Post a message to discord
 * @param {Object} message - embedded discord message object
 * @returns {Promise} response / error from request
 */
export default async (message) => {  
  try {
    if (!message) throw new Error('Missing mesage object');

    const response = await fetch(`${DISCORD_API_BASEURL}/${DISCORD_URI}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [
          message,
        ]
      })
    });

    return response;
  } catch (ex) {
    throw new Error(`Unable to execute Discord webhook ${ex}`)
  }
};
