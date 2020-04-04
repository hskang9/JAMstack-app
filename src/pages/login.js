import { useState, useEffect } from 'react';
import { jsx, Styled } from 'theme-ui';
import { graphql, navigate, PageRenderer, Link } from 'gatsby';

import '../components/layout.css';
import { FaBlackTie } from 'react-icons/fa';
import LoginModal from '../components/login-modal';
import { SocialLogins } from 'gatsby-theme-firebase';
import Modal from 'react-modal';

Modal.setAppElement(`#___gatsby`);

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

const InstaPostTemplate = ({ data }) => {
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
  const modalCloseTimeout = 30000;
  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => navigate(`/`), modalCloseTimeout);
  };
  return (
    <div>
      <PageRenderer key={'/'} location={{ pathname: '/' }} />
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Modal"
        closeTimeoutMS={modalCloseTimeout}
      >
        <SocialLogins />
      </Modal>
    </div>
  );
};

export default InstaPostTemplate;
