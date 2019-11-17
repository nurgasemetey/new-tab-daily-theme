import React, { Component } from "react";
import { VisualPicker, VisualPickerOption } from 'react-rainbow-components';



const titleStyles = {
  fontSize: 40,
  color: '#061c3f',
  fontWeight: 300,
};

const textStyles = {
  fontSize: 30,
  fontWeight: 300,
};

const daytTextStyles = {
  color: '#FF0000',
  "font-weight": "bold"
};

export default class FocusContent extends Component {


  render() {
    const { selected_day } = this.props;
    return (
      <div className="rainbow-align-content_center rainbow-m-around_xx-large rainbow-flex_column">
          <h1 style={titleStyles} >
            Your focus for <span style={daytTextStyles}>{selected_day}</span>
          </h1>
          <VisualPicker
            value="option-1"
          >
            <VisualPickerOption name="option-1">
              <h2 style={textStyles}>Design</h2>
            </VisualPickerOption>
          </VisualPicker>
      </div>
    );
  }
}
