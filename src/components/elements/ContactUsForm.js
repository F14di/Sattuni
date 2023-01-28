import React, { useState } from 'react';
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


const CONTACT_US_ENDPOINT = "https://public.herotofu.com/v1/df5174e0-9eff-11ed-82c7-3d7607318e65";

const ContactUsForm = () => {
    const [status, setStatus] = useState();

    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Anything you need to inject dynamically
        const injectedData = {
          valueX: 123,
        };
        // const inputs = e.target.elements;
        const data = {};
    
        // for (let i = 0; i < inputs.length; i++) {
        //   if (inputs[i].name) {
        //     data[inputs[i].name] = inputs[i].value;
        //   }
        // }
    
        Object.assign(data, injectedData);
    
        fetch(CONTACT_US_ENDPOINT, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            // It's likely a spam/bot request, so bypass it to validate via captcha
            if (response.status === 422) {
              Object.keys(injectedData).forEach((key) => {
                const el = document.createElement("input");
                el.type = "hidden";
                el.name = key;
                el.value = injectedData[key];
    
                e.target.appendChild(el);
              });
    
              e.target.submit();
              throw new Error("Please finish the captcha challenge");
            }
    
            if (response.status !== 200) {
              throw new Error(response.statusText);
            }
    
            return response.json();
          })
          .then(() => setStatus("We'll be in touch soon."))
          .catch((err) => setStatus(err.toString()));
      };

      if (status) {
        return (
          <>
            <div className="text-2xl">Thank you!</div>
            <div className="text-md">{status}</div>
          </>
        );
      }
    
      return (
        <div>
            <form
            action={CONTACT_US_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
            >

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

            </form>
        </div>);
  }


ContactUsForm.propTypes = propTypes;
ContactUsForm.defaultProps = defaultProps;

export default ContactUsForm;