import {
  createClient,
  //   createPortableTextComponent,
  // createPreviewSubscriptionHook,
} from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
// import ReactTooltip from 'react-tooltip'

import config from './config';

if (!config.projectId) {
  throw Error('The Project ID is not set. Check your environment variables.');
}
export const imageBuilder = (source) => imageUrlBuilder(config).image(source);

export const urlForImage = (source) => imageUrlBuilder(config).image(source);

// export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export const client = createClient(config);

// export const previewClient = createClient({
//   ...config,
//   useCdn: false,
// })

// export const getClient = (usePreview) => (usePreview ? previewClient : client)
export default client;
