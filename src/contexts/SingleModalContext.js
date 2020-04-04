import React, { useState, useContext } from 'react';

const SingleModalContext = React.createContext();

const useSingleModal = () => {
  const singleModalContext = useContext(SingleModalContext);

  if (!singleModalContext) {
    throw new Error('useSingleModal must be used inside the SingleModalProvider');
  }

  return singleModalContext;
};

const SingleModalProvider = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const setContent = (content) => {
    setModalContent(content());
  };

  const value = {
    show: showModal,
    toggle: toggleModal,
    close: closeModal,
    setContent,
    content: modalContent,
  };

  return <SingleModalContext.Provider value={value} {...props} />;
};

export { useSingleModal, SingleModalProvider };