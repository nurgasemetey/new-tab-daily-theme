import React, { Component } from "react";
import { Modal, Button } from 'react-rainbow-components';
import { Input } from 'react-rainbow-components';

export default class FocusEditModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newFocusText: ''
        }
        this.handleSaveButton = this.handleSaveButton.bind(this);
    }

    handleSaveButton() {
        var newFocusText = this.state.newFocusText;
        if (newFocusText != '') {
            this.props.updateFocusText(newFocusText);
        }
    }

    render() {
        const { isModalOpen, focustText, closeModal } = this.props;
        return (
            <Modal
                isOpen={isModalOpen}
                title="Enter your focus item"
                onRequestClose={() => closeModal()}
                footer={
                    <div className="rainbow-flex rainbow-justify_center">
                        <Button label="Save"
                            variant="brand"
                            onClick={this.handleSaveButton}
                        />
                    </div>
                }
            >

                <Input
                    onChange={event => this.setState({ newFocusText: event.target.value })}
                    placeholder={focustText}
                    type="text"
                />
            </Modal>
        );
    }
}

