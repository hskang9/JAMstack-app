const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <div id="commento"></div>,
    // <script src="https://cdn.commento.io/js/commento.js"></script>,
  ]);
};

export { onRenderBody };

export { default as wrapRootElement } from './src/state/redux-wrapper';
