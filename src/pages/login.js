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
    width: '300px',
    margin: '32px auto',
    padding: 0,
    border: 0,
  },
};

const LoginTemplate = ({ data }) => {
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
        <div>
          로그인하여 자기가 원하는 래플을 저장하거나 다른 유저들과 의견을
          나눠보세요.
        </div>
        <SocialLogins />
      </Modal>
    </div>
  );
};

export default LoginTemplate;
