'use client';
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/output.css";

function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const templetParamaters = {
    from_name: firstName.concat(" ", lastName),
    email: email,
    address: city.concat(", ", zip, ", ", state),
    message: message
  }

  const handleSubmit = () => { 
    emailjs.send('service_45fvhqr', 'template_0wa8q8k', templetParamaters, 'TdHhUAEeEJxEhBmbE')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

    setSubmitted(true);
  }

  return(
    <>
        {
          submitted ?
          <div className="text-background home-section">
            Thanks for your interest! <br/> We will reach out soon!
          </div>
          :
          <form className="needs-validation contact-form home-section">
            <div className="row no-gutter">
              <div className="col contact-text-input">
                <input type="text" onChange={(e) => {setFirstName(e.target.value)}} className="form-control" id="first-name" placeholder='First Name' required/>
                <small></small>
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div className="col contact-text-input">
                <input type="text" onChange={(e) => {setLastName(e.target.value)}} className="form-control" id="last-name" placeholder='Last Name' required/>
                <small></small>
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>
            </div>
            <div className='row no-gutter'>
              <div className="col contact-text-input">
                <input type="text" onChange={(e) => {setEmail(e.target.value)}} className="form-control" id="email" placeholder='Email' required/>
                <small></small>
                <div className="invalid-feedback">
                  Please enter an Email.
                </div>
              </div>
              <div className="col contact-text-input">
                <input type="text" onChange={(e) => {setCity(e.target.value)}} className="form-control" placeholder='City' id="city" required/>
                <small></small>
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
            </div>
            <div className='row no-gutter'>
              <div className="col contact-text-input">
                <select onChange={(e) => {setState(e.target.value)}} className="form-select form-control" id="state" required>
                  <option value="" selected>Select a State</option>
                  <option value="AZ">Arizona</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="NV">Nevada</option>
                  <option value="NM">New Mexico</option>
                  <option value="OR">Oregon</option>
                  <option value="UT">Utah</option>
                  <option value="WA">Washington</option>
                </select>
                <small></small>
                <div className="invalid-feedback">
                  Please select a valid state.
                </div>
              </div>
              <div className="col contact-text-input">
                <input type="text" onChange={(e) => {setZip(e.target.value)}} className="form-control" placeholder='Zip' id="zip" required/>
                <small></small>
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
              </div>
            </div>
            <div className="col contact-text-input">
              <textarea onChange={(e) => {setMessage(e.target.value)}} className="form-control" placeholder='Type away...'/>
            </div>
            <div className=" row no-gutter justify-content-center button-wrapper">
              <button onClick={e => {e.preventDefault(); handleSubmit()}} className="btn btn-primary submit-form" type="submit">
                Submit
              </button>
              <small></small>
            </div>   
        </form>
        }
    </>
  )
}

export default ContactForm;