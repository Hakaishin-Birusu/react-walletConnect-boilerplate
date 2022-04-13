import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Error } from '../actions';
import { useSelector } from 'react-redux';



function ErrorModal() {
    const error = useSelector(store => store.error.error);
    // const errorEnable = useSelector(store => store.error.errorEnable);
    // const dispatch = useDispatch();
    return (
        // <Modal
        //     show={errorEnable}
        //     size='lg'
        //     centered aria-labelledby='contained-modal-title-vcenter'
        //     onHide={() => dispatch(Error.closeErr())}
        // >
        //     <Modal.Header closeButton>
        //         <Modal.Title style={{ color: 'crimson' }}>Error Response</Modal.Title>
        //     </Modal.Header>

        //     <Modal.Body>
        //         <p className='errormsg'>{error}</p>
        //     </Modal.Body>


        // </Modal>

        <div>
            <p >{error}</p>
        </div>
    )
}

export default ErrorModal;