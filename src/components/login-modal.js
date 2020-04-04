import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { Form, FormState } from 'gatsby-theme-firebase';

const LoginModal = ({ setToggleLogin }) => (
  <Modal>
    <div
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: 'rgba(0,0,0,0.5)',
      }}
      onClick={() => {
        setToggleLogin(false);
      }}
    />
    <div
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '28rem',
        width: '100%',
        maxHeight: '100vh',
        overflow: 'auto',
      }}
    >
      <FormState.Provider>
        <Form
          onSignUpSuccess={(user) => {
            console.log('LoginModal user: ', user);
            setToggleLogin(false);
          }}
          onLoginSuccess={(user) => {
            console.log('LoginModal user: ', user);
            setToggleLogin(false);
          }}
          onResetSuccess={() => {
            setToggleLogin(false);
          }}
        />
      </FormState.Provider>
    </div>
  </Modal>
);

export default LoginModal;

const Modal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
`;
