import classes from './newsletter-registration.module.css';
import { useRef } from 'react';
import NotificationContext from '../../store/notification-context';
import { useContext } from 'react';

function NewsletterRegistration() {

  const notificationCtx = useContext(NotificationContext)
  const emailRef = useRef()

  function registrationHandler(event) {
    event.preventDefault();

    const email = emailRef.current.value
    const reqBody = {email}
    notificationCtx.showNotification({
      title: 'Signing up...',
      message: 'Registering for newsletter.',
      status: 'pending'
    })
    fetch('./api/newsletter',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody)
    })
    .then(res=> {
      if(res.ok){
        return res.json()
      }
      return res.json.then(data =>{
        throw new Error(data.message)
      })
    })
    .then(data=> 
      notificationCtx.showNotification({
        title: 'Success!',
        message: 'Successfully registered for newletter.',
        status: 'success'
      }))
    .catch(err=> 
      notificationCtx.showNotification({
        title: 'Error!',
        message: err.message || 'Something went wrong',
        status: 'error'
    }))
  }  
    
    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  

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
