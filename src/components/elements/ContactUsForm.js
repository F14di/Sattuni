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
    const [loaderVisible, setLoaderVisible] = useState(false);
    const [form, setForm] = useState({
      name:'',
      email:'',
      textArea:'',
      errors:{}
    });

    const handleInputChange = e =>{
      const newFormValue ={...form, [e.target.name]:e.target.value};
      setForm(newFormValue);
    }

    const validateForm = () => {
      const errors = {};
      if (!form.name) {
        errors.name = 'fill in your name';
        setForm({...form,errors})
        return false;
      }
      if (!form.textArea) {
        errors.textArea = 'fill in your response';
        setForm({...form,errors})
        return false;
      }
      setForm({...form,errors})
      return true;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!validateForm()){
        return;
      }
      const data = {Name:form.name, Email:form.email, message:form.textArea};
      setLoaderVisible(true);
      fetch(CONTACT_US_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.status !== 200) {
            throw new Error(response.statusText);
          }
          setLoaderVisible(false);
          return response.json();
        })
        .then(() => setStatus("We'll be in touch soon."))
        .catch((err) => {
          setStatus(err.toString())
          setLoaderVisible(false);
        });
    };

    if(loaderVisible){
      return (
        <h4 style={{color:'white'}}>Loading</h4>
      );
    }
    if (status) {
      return (
        <>
          <div className="text-2xl">Thank you!</div>
          <div className="text-md">{status}</div>
        </>
      );
    }
    
  return (
    <form
      action={CONTACT_US_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank" >
        <FormLabel ><h4>Contact Us</h4></FormLabel>
        <div className="contact-us-form-inner-wrapper">
            <div className="contact-us-form-details-section">
            <div className="form-details-field form-details-name-input-wrapper">
                <Input name="name" label="Name" size={'sm'} handleChange={handleInputChange}/>
                {form.errors.name}
            </div>
            <div className="form-details-field form-details-email-input-wrapper">
                <Input name="email" label="Email" hint="*optional" size={'sm'} className={'form-input'} handleChange={handleInputChange}/>
            </div>
            </div>
            <div className="contact-us-text-area-section">
                <Input name="textArea" type="textarea" className={'form-input-textarea'} handleChange={handleInputChange}/>
                {form.errors.textArea}
            </div>
            <div className="contact-us-form-button-section">
            <ButtonGroup>
                <Button color="primary" wideMobile >Submit</Button>
            </ButtonGroup>
            </div>
        </div>
    </form>);
  }


ContactUsForm.propTypes = propTypes;
ContactUsForm.defaultProps = defaultProps;

export default ContactUsForm;