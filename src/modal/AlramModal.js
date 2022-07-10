import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AlramModal({value}) {

    const [show, setShow] = useState(value);
    const [reviewData,setReviewData] = useState('');

    const handleClose = () => setShow(false);

    const onChangeReview = (e)=>{
        e.preventDefault();
        setReviewData(e.target.value);
    }

    const handleSubmit = ()=>{
        handleClose();
        console.log(reviewData);
    }
    
    return (
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>지난 거래 어떠셨나요?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>후기를 작성해주세요</Form.Label>
                                <Form.Control as="textarea" value={reviewData} onChange={onChangeReview} rows={3} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
    

export default AlramModal;
