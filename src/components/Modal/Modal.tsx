import React, { useState, useEffect, useRef, useCallback } from 'react'
import Portal, { createContainer } from './Portal.tsx'
import type { MouseEventHandler } from 'react'
import { IoMdClose } from "react-icons/io";
import './Modal.css';
import {db} from '../firebaseAuth/setup.jsx'
import {collection, addDoc} from 'firebase/firestore';
import 'jose'
import { signInWithCredential, signInWithPopup, signInWithRedirect } from 'firebase/auth';

import { auth, provider, GoogleAuthProvider } from '../firebaseAuth/setup';

const MODAL_CONTAINER_ID = 'modal_container_id';

const jose = require('jose');

declare global {
  interface Window {
    google: any;
  }
}

type Props = { onClose?: () => void };

const Modal = (props: Props) => {
  const [userInfo, setUserInfo] = useState({});
  const [comment, setComment] = useState('');
  const {onClose} = props;
  const [isMounted, setIsMounted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    createContainer({id: MODAL_CONTAINER_ID});
    setIsMounted(true);
    window.onload = function() {
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
        use_fedcm_for_prompt: true
      });
    }
    // setUserInfo(handleSignIn());
  }, []);

  const handleCredentialResponse = (response) => {
    // const claims = jose.decodeJwt(response.credential);
    // console.log(claims)
    console.log(response.credential);
    const idToken = response.credential;
    // const credential = GoogleAuthProvider.credential(idToken);

    // // Sign in with credential from the Google user.
    // signInWithCredential(auth, credential).catch((error) => {
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   // const email = error.email;
    //   // // The credential that was used.
    //   // const credential = GoogleAuthProvider.credentialFromError(error);
    //   console.log(errorCode + errorMessage)
    //   // ...
    // });
  };

  const handleClose: MouseEventHandler<HTMLButtonElement> =
  useCallback(() => {
    onClose?.();
  }, [onClose]);

  async function onCreateCard() {
    // const docRef = await addDoc(collection(db, 'testimonials'), {

    // })

  }


  return (
    isMounted ?
    (<Portal id={MODAL_CONTAINER_ID}>
      <div className='wrap' ref={rootRef}>
        <div className='content'>
          <button
            type='button'
            className='closeButton'
            onClick={handleClose}>
              <IoMdClose />
          </button>
          <h2>Отзыв</h2>
          <div className='user-info'>
            <div className='user-img'></div>
            <div className='username'></div>
          </div>
          <label>Текст:</label>
          <textarea className="comment" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
          <button className='btn publish' onClick={handleCredentialResponse}>Опубликовать</button>
        </div>
      </div>
    </Portal>) :
    null
  )
}

export default Modal;
