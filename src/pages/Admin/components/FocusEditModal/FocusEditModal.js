import React, { Component } from "react";
import { Modal, Button } from 'react-rainbow-components';
import { Input } from 'react-rainbow-components';

export default class FocusEditModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newFocusText: ''
        }
    }


    render() {
        const { isModalOpen, focustText, closeModal, updateFocusText } = this.props;

        return (

            <Modal
                isOpen={isModalOpen}
                title="Enter your focus item"
                onRequestClose={() => {
                    closeModal();
                }}
                footer={
                    <div className="rainbow-flex rainbow-justify_center">
                        <Button label="Save" 
                            variant="brand"
                            onClick={() => {
                                console.log(this, "clicked");
                                var newFocusText = this.state.newFocusText;
                                if (newFocusText != '') {
                                    console.log('Saving', newFocusText)
                                    updateFocusText(newFocusText);
                                }
                              }}
                            />
                    </div>
                }
            >

                <Input
                    onChange = {event => this.setState({newFocusText: event.target.value})}
                    placeholder={focustText}
                    type="text"
                />
            </Modal>
        );
    }
}

