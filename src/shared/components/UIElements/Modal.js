import React from 'react';
import Backdrop from './Backdrop';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons'

import logo from '../../../assets/logo.svg'
import './Modal.css'

const ModalOverlay = props => {
    const content = (
        <div className={`modal ${props.className}`} style={props.style}>
            <div className='modal-close' onClick={props.onCancel}><FontAwesomeIcon icon={faCircleXmark} size="xl" /> </div> 
            <header className={`modal__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
                <img src={logo} alt="" />
            </header>

            <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>

                <div className={`modal__content ${props.contentClass}`}>
                    {props.children}
                </div>
                <footer className={`modal__footer ${props.footerClass}`}>
                    {props.footer}
                </footer>

            </form>
        </div>
    );

    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = props => {
    return (
        <>
            {<Backdrop onClick={props.onCancel} />}
            <ModalOverlay {...props} />
        </>
    )
}

export default Modal
