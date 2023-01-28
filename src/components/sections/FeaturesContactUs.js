import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup';
import Input from '../elements/Input';
import FormLabel from '../elements/FormLabel';

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
                    <FormLabel ><h4>Contact Us</h4></FormLabel>
                      <div className="contact-us-form-inner-wrapper">
                        <div className="contact-us-form-details-section">
                          <div className="form-details-field form-details-name-input-wrapper">
                            <Input label="Name" size={'sm'}/>
                          </div>
                          <div className="form-details-field form-details-email-input-wrapper">
                            <Input label="Email" hint="*optional" size={'sm'} className={'form-input'}/>
                          </div>
                        </div>
                        <div className="contact-us-text-area-section">
                          <Input type="textarea" className={'form-input-textarea'}/>
                        </div>
                        <div className="contact-us-form-button-section">
                        <ButtonGroup>
                          <Button color="primary" wideMobile >Submit</Button>
                        </ButtonGroup>
                        </div>
                      </div>
                  </div>
                  <div className="contact-us-sections-separator"></div>
                  <div className="opening-hours-section">
                      <div className="opening-hours-header">
                        <h6>Hours</h6>
                      </div>
                      <div className="opening-hours-section-table">
                        <div className="day-wrapper"><span className="day">Sun</span> <span>07:00 - 12:00</span></div>
                        <div className="day-wrapper"><span className="day">Mon</span> <span>13:00 - 22:00</span></div>
                        <div className="day-wrapper"><span className="day">Tue</span> <span>13:00 - 22:00</span></div>
                        <div className="day-wrapper"><span className="day">Wed</span> <span>13:00 - 22:00</span></div>
                        <div className="day-wrapper"><span className="day">Thu</span> <span>17:00 - 00:00</span></div>
                        <div className="day-wrapper"><span className="day">Fri</span> <span>13:00 - 22:00</span></div>
                        <div className="day-wrapper"><span className="day">Sat</span> <span>13:00 - 22:00</span></div>
                      </div>
                  </div>
                    {/* <form action="https://public.herotofu.com/v1/df5174e0-9eff-11ed-82c7-3d7607318e65" method="post">
                    <div>
                        <label for="name">Your Name</label>
                        <input name="Name" id="name" type="text" required />
                    </div>
                    <div>
                        <label for="email">Your Email</label>
                        <input name="Email" id="email" type="email" required  />
                    </div>
                    <div>
                        <input type="submit" value="Download CTA"/>
                    </div>
                    </form> */}

                </div>
            </div>
        </section>);
  }


FeaturesContactUs.propTypes = propTypes;
FeaturesContactUs.defaultProps = defaultProps;

export default FeaturesContactUs;