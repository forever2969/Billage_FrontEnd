import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import './AddModal.css';

const AddModal = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
    <>
        <img src="plusButton.png" onClick={handleShow} style={{cursor:"pointer" , width:"5%", position:'fixed', top: '83%', left: '85%',transform: 'translate(-50%, -50%)'}}/>
        <Modal className="modal-container" show={show} onHide={handleClose} size="sm">
            <div className="modal-text"><Link to = {`/write`} style={{textDecoration:'none', color:'black'}}>대여</Link></div>
            <div className="modal-text"><Link to = {`/write`} style={{textDecoration:'none', color:'black'}}>판매</Link></div>
            <div className="modal-text"><Link to = {`/write`} style={{textDecoration:'none', color:'black'}}>공동구매</Link></div>
        </Modal>
    </>
    );
}

export default AddModal;