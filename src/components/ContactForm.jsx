import React from 'react'

function ContactForm() {
  return (
    <div className='contact-container'>
        <form action="" className='contact-left'>
            <div className='contact-left-title'>
                <h2>Get in touch</h2>
                <hr />
            </div>
                    <input type='text' name='name' placeholder='Your name' className='contact-inputs' required></input>
                    <input type='email' name='email' placeholder='Your Email' className='contact-inputs' required></input>
                    <textarea name='message' id='' placeholder='Your Message' className='contact-inputs' required></textarea>
                    <button type='submit'>Submit!<img src='send.png' width={100} height={100}></img></button>
        </form>
        <div className='md:hidden'> 
            <img src='form.png'></img>
        </div>
    </div>
  )
}

export default ContactForm