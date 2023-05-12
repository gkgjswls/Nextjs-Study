import classes from './newsletter-registration.module.css';
import { useRef } from 'react';
function NewsletterRegistration() {
  const emailRef = useRef()
  function registrationHandler(event) {
    event.preventDefault();

    const email = emailRef.current.value
    const reqBody = {email}
    fetch('./api/newsletter',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody)
    })
    .then(console.log)
    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
