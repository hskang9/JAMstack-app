/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// gatsby-node.js

const algoliasearch = require('algoliasearch/lite');
const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_ADMIN_KEY,
);

const index = searchClient.initIndex('product');

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  let hits = [];
  await index.browseObjects({
    query: '', // Empty query will match all records
    filters: '',
    batch: (batch) => {
      hits = hits.concat(batch);
    },
  });

  const raffleTemplate = require.resolve('./src/templates/raffles-page.js');
  const releaseTemplate = require.resolve('./src/templates/releases-page.js');
  hits.forEach((hit) => {
    createPage({
      path: `raffles/${hit.objectID}`,
      component: raffleTemplate,
      context: {
        name: hit.name,
        decription: hit.description,
        brand: hit.brand,
        price: hit.price,
        release_date: hit.release_date,
        raffles: hit.raffles,
        pid: hit.pid,
        image: hit.image,
        id: hit.objectID,
      },
    });
    createPage({
      path: `releases/${hit.objectID}`,
      component: releaseTemplate,
      context: {
        name: hit.name,
        decription: hit.description,
        brand: hit.brand,
        price: hit.price,
        release_date: hit.release_date,
        raffles: hit.raffles,
        pid: hit.pid,
        image: hit.image,
        id: hit.objectID,
      },
    });
  });
};
