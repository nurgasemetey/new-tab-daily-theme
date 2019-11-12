import React, { Component } from "react";
import {
  Card,
  ButtonIcon,
  Accordion,
  AccordionSection
} from "react-rainbow-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser, faUsers, faCog } from "@fortawesome/free-solid-svg-icons";

const iconContainerStyles = {
  width: "2.5rem",
  height: "2.5rem"
};

export default class FocusContent extends Component {
  renderCardIcon = () => (
    <span
      style={iconContainerStyles}
      className="rainbow-background-color_success rainbow-border-radius_circle rainbow-align-content_center"
    >
      <FontAwesomeIcon
        size="lg"
        icon={faTasks}
        className="rainbow-color_white"
      />
    </span>
  );

  renderCardFooter = () => (
    <div className="rainbow-align-content_space-between">
      <div className="rainbow-flex">
        <ButtonIcon
          icon={<FontAwesomeIcon icon={faHeart} />}
          className="rainbow-m-right_xx-small"
        />
        <ButtonIcon icon={<FontAwesomeIcon icon={faShareAlt} />} />
      </div>
    </div>
  );

  renderAccordion = () => (
    <Accordion className="accordion">
      <AccordionSection
        icon={<FontAwesomeIcon icon={faCog} className="rainbow-color_brand" />}
        label="General Settings"
      >
        A rainbow is a meteorological phenomenon that is caused by reflection,
        refraction and dispersion of light in water droplets resulting in a
        spectrum of light appearing in the sky.
      </AccordionSection>
      <AccordionSection
        icon={
          <FontAwesomeIcon icon={faUsers} className="rainbow-color_brand" />
        }
        label="Users"
      >
        A rainbow is a meteorological phenomenon that is caused by reflection,
        refraction and dispersion of light in water droplets resulting in a
        spectrum of light appearing in the sky.
      </AccordionSection>
      <AccordionSection
        icon={<FontAwesomeIcon icon={faUser} className="rainbow-color_brand" />}
        label="Personal data"
      >
        A rainbow is a meteorological phenomenon that is caused by reflection,
        refraction and dispersion of light in water droplets resulting in a
        spectrum of light appearing in the sky.
      </AccordionSection>
    </Accordion>
  );

  render() {
    const { selected_day } = this.props;
    return (
      <div className="rainbow-flex rainbow-flex_row rainbow-justify_space-around">
        <div className="rainbow-m-around_xx-large">
          <Card
            icon={this.renderCardIcon()}
            title={`Your focus for ${selected_day}`}
            footer={this.renderCardFooter()}
          >
            <div className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
              {this.renderAccordion()}
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
