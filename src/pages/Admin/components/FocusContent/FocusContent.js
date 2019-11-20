import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import FocusEditModal from "../FocusEditModal/FocusEditModal";
import { VisualPicker, VisualPickerOption, Button } from "react-rainbow-components";

const titleStyles = {
  fontSize: 40,
  color: "#061c3f",
  fontWeight: 300
};

const textStyles = {
  fontSize: 30,
  fontWeight: 300
};

const daytTextStyles = {
  color: "#FF0000",
  "font-weight": "bold"
};

export default class FocusContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
  }
  closeModal = () => {
    this.setState({ isModalOpen: false })
  }

  updateFocusText = (newFocusText) => {
    this.props.updateFocusText(newFocusText);
    this.setState({ isModalOpen: false });
  }
  render() {
    const { selectedDay, dayMap } = this.props;
    return (
      <div className="rainbow-align-content_center rainbow-m-around_small rainbow-flex_column">
        <div className="rainbow-align-content_center rainbow-flex_row">
          <h1 style={titleStyles}>
            Your focus for <span style={daytTextStyles}>{selectedDay}</span>
          </h1>
          <Button variant="brand"
            className="rainbow-m-around_medium"
            onClick={() => {
              this.setState({isModalOpen:true});
            }}
          >
            <FontAwesomeIcon icon={faPen} className="rainbow-m-left_small" />
          </Button>
        </div>

        <VisualPicker value="option-1">
          <VisualPickerOption name="option-1">
            <h2 style={textStyles}>{dayMap[selectedDay].focusText}</h2>
          </VisualPickerOption>
        </VisualPicker>
        <FocusEditModal closeModal={this.closeModal} 
          focustText= {dayMap[selectedDay].focusText} 
          updateFocusText={this.updateFocusText} 
          isModalOpen={this.state.isModalOpen} />
      </div>
    );
  }
}
