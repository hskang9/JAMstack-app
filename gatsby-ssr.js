const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <div id="commento"></div>,
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    ></meta>,
    // <script src="https://cdn.commento.io/js/commento.js"></script>,
  ]);
};

export { onRenderBody };

export { default as wrapRootElement } from './src/state/redux-wrapper';
