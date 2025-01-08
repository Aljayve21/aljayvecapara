import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '2leihx6i',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skMWc3Tbjf0PrgVhdE6ITrs3LIL9zy5pDD29w83Dte0mMMxGSIB6wbFtR9cKvCwXkU31JzCuD5GkYeAMwc3juYn26WldbfV2x7Grw1KjEFTz12YlzhJYzPjqa90R5TiHqPTmWbpusPvn6YjYEMCzXGl9qdde3JW1yNxTqVnKnDeKJe1MQvF7',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
