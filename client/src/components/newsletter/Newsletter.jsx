
/*import React from 'react'
import classes from './newsletter.module.css'
import {AiOutlineSend} from 'react-icons/ai'
import newsletterIllustration from '../../assets/get-newsletter-updates.svg'
import Button from 'react-bootstrap/Button';

const Newsletter = () => {
  return (
    <section id='contacts' className={classes.container}>
      <div className={classes.wrapper}>
        <h4 className={classes.subtitle}>Get our latest offers</h4>
        <h2 className={classes.title}>Newsletter</h2>
        <div className={classes.inputContainer}>
          <input type="text" placeholder='Enter email...'/>
          <Button variant="light">
            <AiOutlineSend className={classes.sendIcon}/>
          </Button>
          
        </div>
        <img src={newsletterIllustration} className={classes.illustration} alt=""/>
      </div>
    </section>
  )
}

export default Newsletter*/
import classes from './newsletter.module.css'
import {AiOutlineSend} from 'react-icons/ai'
import newsletterIllustration from '../../assets/get-newsletter-updates.svg'
import Button from 'react-bootstrap/Button'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Newsletter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cvwa5ow', 'template_p0mrfvr', form.current, 'E8gC_GcBBbjjTcWTk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
<>
    
    <section id='contacts' className={classes.container}>
    <div className={classes.wrapper}>
        <h4 className={classes.subtitle}>Get our latest offers</h4>
        <h2 className={classes.title}>Newsletter</h2>

    
      <form ref={form} onSubmit={sendEmail} className={classes.inputContainer}>
           
          <input placeholder='Enter email...' type="email" name="user_email" />
          <Button variant="light" type="submit" onClick={sendEmail}  >
            <AiOutlineSend className={classes.sendIcon}/>
          </Button>

      </form> 
      
        <img src={newsletterIllustration} className={classes.illustration} alt=""/>
      </div>
    
    
    
    
    </section>
  </>);
};

export default Newsletter