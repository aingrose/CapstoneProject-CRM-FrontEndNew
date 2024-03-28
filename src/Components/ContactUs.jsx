import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();





        emailjs
            .sendForm('service_0lg604h', 'template_51zrnxj', form.current, {
                publicKey: 'kHncmKc9SkeY1T1IV',
            })
            .then(
                () => {
                    alert("SUCCESS!")
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }

    return (
        <>


            <>
                <h1 className='mt-5' style={{ textAlign: "center" }}>Contact Us</h1>

                <div className='container'>
                    <div className='row'>
                        <div className='col mt-5' style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >

                            <div className="card" style={{ width: "30rem", backgroundColor: "#4478c0" }}>
                                <div className="card-body">

                                    <form ref={form} onSubmit={sendEmail} >

                                        <div className="row mb-1">
                                            <label className="mb-2">NAME</label>
                                            <input id="email" type="text" name="user_name" style={{ borderRadius: "8px", border: "1px solid grey" }} className="input p-2" placeholder="someone@example.com" />
                                        </div>
                                        <div className="row mb-1">
                                            <label className="mb-2">EMAIL</label>
                                            <input id="email" type="text" name="user_email" style={{ borderRadius: "8px", border: "1px solid grey" }} className="input p-2" placeholder="someone@example.com" />
                                        </div>
                                        <div className="row mb-1">
                                            <label className="mb-2">Message</label>
                                            <textarea id="email" type="text" name="email" style={{ borderRadius: "8px", border: "1px solid grey" }} className="input p-2" placeholder="someone@example.com" />

                                        </div>
                                        <input type="submit" value="Send" className=' mt-3' style={{ padding: "10px 50px", borderRadius: "8px", border: "1px solid grey", marginLeft: "-10px" }} />
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>

            </>

        </>
    );
};