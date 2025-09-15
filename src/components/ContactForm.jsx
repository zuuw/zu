import React from 'react'

function ContactForm() {
  return (
    <div class='contact-container'>
        <form action="" class='contact-left'>
            <div class='contact-left-title'>
                <h2>Get in touch</h2>
                <hr />
            </div>
                    <input type='text' name='name' placeholder='Your name' class='contact-inputs' required></input>
                    <input type='email' name='email' placeholder='Your Email' class='contact-inputs' required></input>
                    <textarea name='message' id='' placeholder='Your Message' class='contact-inputs' required></textarea>
                    <button type='submit'>Submit!<img src='send.png' width={100} height={100}></img></button>
        </form>
        <div class='contact-right'> 
            <img src='form.png'></img>
        </div>
    </div>
  )
}

export default ContactForm