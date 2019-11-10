import React from 'react';
import { Card, ButtonIcon, Button, Accordion, AccordionSection } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faShareAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faUser, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';

const iconContainerStyles = {
    width: '2.5rem',
    height: '2.5rem',
};


export default class FocustContent extends React.Component {

    render() {

        return (
            <div className="rainbow-flex rainbow-flex_row rainbow-justify_space-around">
                <div className="rainbow-m-around_xx-large">
                    <Card
                        icon={
                            <span
                                className="rainbow-background-color_success rainbow-border-radius_circle rainbow-align-content_center"
                                style={iconContainerStyles}
                            >
                                <FontAwesomeIcon icon={faTasks} size="lg" className="rainbow-color_white" />
                            </span>
                        }
                        title={`Your focus for ${this.props.selected_day}`}
                        footer={
                            <div className="rainbow-align-content_space-between">
                                <div className="rainbow-flex">
                                    <ButtonIcon
                                        icon={<FontAwesomeIcon icon={faHeart} />}
                                        className="rainbow-m-right_xx-small"
                                    />
                                    <ButtonIcon icon={<FontAwesomeIcon icon={faShareAlt} />} />
                                </div>
                            </div>
                        }

                    >
                    <div className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
                        <Accordion className="accordion">
                            <AccordionSection
                                icon={<FontAwesomeIcon icon={faCog} className="rainbow-color_brand" />}
                                label="General Settings"
                            >
                                A rainbow is a meteorological phenomenon that is caused by reflection, refraction
                                and dispersion of light in water droplets resulting in a spectrum of light appearing
                                in the sky.
            </AccordionSection>
                            <AccordionSection
                                icon={<FontAwesomeIcon icon={faUsers} className="rainbow-color_brand" />}
                                label="Users"
                            >
                                A rainbow is a meteorological phenomenon that is caused by reflection, refraction
                                and dispersion of light in water droplets resulting in a spectrum of light appearing
                                in the sky.
            </AccordionSection>
                            <AccordionSection
                                icon={<FontAwesomeIcon icon={faUser} className="rainbow-color_brand" />}
                                label="Personal data"
                            >
                                A rainbow is a meteorological phenomenon that is caused by reflection, refraction
                                and dispersion of light in water droplets resulting in a spectrum of light appearing
                                in the sky.
            </AccordionSection>
                        </Accordion>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}