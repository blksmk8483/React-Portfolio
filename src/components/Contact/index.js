// import { useRef } from 'react';
// import './index.scss';
// // import emailjs from 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
// import emailjs from 'emailjs-com'


// const Contact = () => {
//     const refForm = useRef()

//     const sendEmail = (e) => {
//         e.preventDefault()

//         // emailjs.sendForm(
//         //     'gmail',
//         //     'template_3mtm18q',
//         //     refForm
//         //     // 'foHmb6uH4bi8cMpkl'
//         // )

//         emailjs.sendForm("service_xn8s13r","template_3mtm18q")
//         .then(
//             () => {
//                 alert('Message successfully sent!')
//                 window.location.reload(false)
//             },
//             () => {
//                 alert('Message failed to send. Please try again.')
//             }
//         )
//     }

//     return (
//         <>
//             <div className='container contact-page'>
//                 <div className='text-zone'>
//                     <h1>
//                         Contact Me:
//                     </h1>
//                     <div className='contact-form'>
//                         <form ref={refForm} onSubmit={sendEmail}>
//                             <ul>
//                                 <li className='half'>
//                                     <input type="text" name="name" placeholder="Name" required />
//                                 </li>
//                                 <li className='half'>
//                                     <input type="email" name="email" placeholder="Email" required />
//                                 </li>
//                                 <li>
//                                     <input placeholder="Subject" type="text" name="subject" required />
//                                 </li>
//                                 <li>
//                                     <textarea placeholder="Message" type="text" name="message" required />
//                                 </li>
//                                 <li>
//                                     <input type="submit" className="flat-button" value="SEND" />
//                                 </li>
//                             </ul>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Contact


import './index.scss';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xn8s13r', 'template_3mtm18q', form.current, 'foHmb6uH4bi8cMpkl')
      .then((result) => {
        alert('Message successfully sent!')
        window.location.reload(false)
      }, (error) => {
        alert('Message failed to send. Please try again.')
      });
  };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    Contact Me:
                </h1>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" type="text" name="message" required />
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </>
)
}


export default Contact