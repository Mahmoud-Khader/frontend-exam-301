import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export class UpdateFormModal extends Component {
    render() {
        return (
            <div>
                {this.props.showModal &&
                    <Modal show={this.props.showModal} onHide={this.props.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Update Modal</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={this.props.updateData}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Color Name </Form.Label>
                                    <Form.Control type="text" name='title' defaultValue={this.props.colorTitle} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Color Image Url </Form.Label>
                                    <Form.Control type="text" name='imageUrl' defaultValue={this.props.colorImg} />
                                </Form.Group>

                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.props.handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" type='submit'>
                                        Update
                                    </Button>
                                </Modal.Footer>
                            </Form>
                        </Modal.Body>
                    </Modal>
                }
            </div>
        )
    }
}

export default UpdateFormModal
