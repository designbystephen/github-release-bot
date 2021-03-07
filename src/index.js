import 'universal-dotenv/register';
import getLatestRelease from './getLatestRelease';
import { store, compare } from './versionCache';
import createEmbedMessage from './createEmbedMessage';
import postToDiscord from './postToDiscord';

const {
  RUN_INTERVAL_MS
} = process.env;

(async () =>  {
  const { version: initialVersion } = await getLatestRelease();

  store(initialVersion);

  setInterval(async () => {
    try {
      const {
        version,
        ...rest
      } = await getLatestRelease();

      const isDiff = !compare(version);

      if (isDiff) {
        store(version);
        postToDiscord(
          createEmbedMessage({ version, ...rest })
        );
      }
    } catch (ex) {
      console.error('Something went wrong', ex);
    }
  }, RUN_INTERVAL_MS);
})();
