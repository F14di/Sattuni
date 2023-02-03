import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ContactUsForm from '../elements/ContactUsForm';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}



const FeaturesContactUs = ({
    className,
    bottomOuterDivider,
    ...props
  }) => {

    const outerClasses = classNames(
        'features-contact-us section',
        className
      );
    
      const innerClasses = classNames(
        'features-contact-us-inner section-inner',
      );
    

      return (
        <section
          {...props}
          className={outerClasses}
          id="features-contact-us" >
            <div className="section-inner-wrapper container" >
                <div className={innerClasses} >
                  <div className="contact-us-form-outer-wrapper">
                      <ContactUsForm />
                  </div>
                  <div className="contact-us-sections-separator"></div>
                  <div className="opening-hours-section">
                    <div>
                      <div className="opening-hours-header">
                        <h4>Öffnungszeiten</h4>
                      </div>
                      <div className="opening-hours-section-table">
                        <div className="day-wrapper"><span className="day">Montag - Freitag</span> <span>17:00 - 23:00</span></div>
                        <div className="day-wrapper"><span className="day">Samstag - Sonntag</span> <span>17:00 - 23:00</span></div>
                      </div>
                    </div>

                    <div>
                      <div className="opening-hours-header">
                        <h6>Abholservice</h6>
                      </div>
                      <div className="opening-hours-section-table">
                        <div className="day-wrapper"><span className="day">Montag - Freitag</span> <span>17:00 - 23:00</span></div>
                        <div className="day-wrapper"><span className="day">Samstag - Sonntag</span> <span>14:00 - 22:00</span></div>
                      </div>
                    </div>
                    <div>
                      <div className="opening-hours-header">
                        <h6>Lieferservice</h6>
                      </div>
                      <div className="opening-hours-section-table">
                        <div className="day-wrapper"><span className="day">Montag - Freitag</span> <span>18:00 - 22:30</span></div>
                        <div className="day-wrapper"><span className="day">Samstag - Sonntag</span> <span>14:00 - 22:00</span></div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </section>);
  }


FeaturesContactUs.propTypes = propTypes;
FeaturesContactUs.defaultProps = defaultProps;

export default FeaturesContactUs;