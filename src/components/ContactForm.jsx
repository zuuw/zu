import React from 'react'

function ContactForm() {
  return (
    <div class='form-container'>

        <form action="" class='contact-left'>
            <div class='contact-left-title'>
                <h2>
                    Get in touch
                </h2>
                <hr></hr>
            </div>
                    <input type='name' name='name' placeholder='Your name' class='contact-inputs' required></input>
                    <input type='email' name='email' placeholder='Your Email' class='contact-inputs' required></input>
                    <textarea name='message' id='' placeholder='Your Message' required></textarea>
                    <button type='submit'>Submit!<img src='send.png' width={100} height={100}></img></button>
        </form>
        <div class='contact-right'> 
            <img src='form.png' width={100} height={100}></img>
        </div>
    </div>
  )
}

export default ContactForm