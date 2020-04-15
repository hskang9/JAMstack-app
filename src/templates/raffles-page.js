import { useState, useEffect } from 'react';
import { jsx, Styled } from 'theme-ui';
import { graphql, navigate, PageRenderer, Link } from 'gatsby';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import { Raffles } from '../components/raffle';
import { FaTimesCircle } from 'react-icons/fa';
import algoliasearch from 'algoliasearch/lite';
import {
  connectRefinementList,
  connectStateResults,
} from 'react-instantsearch/connectors';
import { InstantSearch, RefinementList } from 'react-instantsearch-dom';
import '../components/layout.css';
import Loader from '../components/loader';
import SEO from '../components/seo';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const FilterByIds = connectRefinementList(() => null);

Modal.setAppElement(`#___gatsby`);

const Loading = connectStateResults(({ searching, children }) => (
  <div>
    <div style={{ display: searching ? 'block' : 'none' }}>
      <Loader
        style={{
          width: '300px',
          height: '300px',
          position: 'absolute',
          top: '50%',
        }}
      />
    </div>

    <div style={{ display: searching ? 'none' : 'block' }}>{children}</div>
  </div>
));

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.58)',
  },
  content: {
    position: 'relative',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    maxWidth: '960px',
    margin: '32px auto',
    padding: 0,
    border: 0,
  },
};

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY,
);

const PostTemplate = ({ pageContext }) => {
  // PageRenderer stuff
  const building = typeof window === 'undefined';
  const [indexPageData, setIndexPageData] = useState(
    !building && window.indexPageData,
  );
  useEffect(() => {
    window.setIndexPageData = () => {
      setIndexPageData(window.indexPageData);
    };
  }, []);
  // Modal stuff.
  const [modalOpen, setModalOpen] = useState(true);
  const modalCloseTimeout = 3000;
  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => navigate(`/`), 0);
  };
  return (
    <div>
      <SEO image={pageContext.image} pathname={`${pageContext.name} 래플`} />
      <PageRenderer
        key={'/'}
        location={{ pathname: '/' }}
        pageResources={indexPageData}
        path="/"
      />
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Modal"
        closeTimeoutMS={modalCloseTimeout}
      >
        <Styled.root>
          <div
            style={{
              bg: 'background',
              background: '#f0f0f3',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              height: '800px',
              overflowY: 'scroll',
              padding: '50px 50px',
            }}
            className="neumorphism-white"
          >
            <h1 style={{ marginBottom: '30px' }}>래플</h1>
            <InstantSearch indexName="raffle" searchClient={searchClient}>
              <Loading>
                <FilterByIds
                  attribute="objectID"
                  defaultRefinement={pageContext.raffles}
                />
                {pageContext.raffles != undefined &&
                  pageContext.raffles.length != 0 && <Raffles />}
              </Loading>
            </InstantSearch>
            <OutboundLink
              href="https://forms.gle/joVMLoxeCNQidaVw6"
              style={{ color: 'black' }}
            >
              <h3 style={{ textAlign: 'center' }}>
                래플 이벤트를 진행하는 스토어들을 기다리고 있습니다.
              </h3>
            </OutboundLink>
          </div>
          <Link to="/">
            <Close />
          </Link>
        </Styled.root>
      </Modal>
    </div>
  );
};

export default PostTemplate;

const Close = styled(FaTimesCircle)`
  position: absolute;
  right: 15px;
  top: 15px;
  color: black;
  width: 20px;
  height: 20px;
`;
