// prefetch modal page on index page load
export const onPrefetchPathname = ({ loadPage }) => {
  if (window.indexPageData === undefined) {
    loadPage('/').then((result) => {
      window.indexPageData = result;
      // If we load the modal page directly we need to
      // re-render by changing the state. Otherwise
      // the initial result is null for some reason.
      if (window.setIndexPageData) window.setIndexPageData();
    });
  }
};

// get scroll position after closing modals
export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  return getSavedScrollPosition(location);
};

export { default as wrapRootElement } from './src/state/redux-wrapper';
export const registerServiceWorker = () => true;
