import { useState } from "react"
import axios from "axios";
import PropTypes from 'prop-types';




NewMail.propTypes = {
    mail: PropTypes.string.isRequired,
};

function NewMail({ mail }) {



    console.log(mail)
    const [formState, setFormState] = useState({
        to: mail,
        subject: "",
        message: ""

    })

    const [loading, setLoading] = useState(false)
    console.log(mail)

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }


    const submitHandler = async (event) => {
        event.preventDefault();
        setLoading(true)

        let response = await axios.post("https://capstoneproject-crm-backend-2.onrender.com/gmail", formState);

        if (response.status === 200) {
            alert("message sent");
            setFormState({
                to: "",
                subject: "",
                message: ""
            })
            setLoading(false);
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col mt-5' style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >

                        <div className="card" style={{ width: "30rem", backgroundColor: "#9195F6" }}>
                            <div className="card-body">

                                <form onSubmit={submitHandler} >

                                    <div className="row mb-1">
                                        <label className="  mb-2">EMAIL</label>
                                        <input id="name" type="text" required name="to" value={formState.to} style={{ borderRadius: "8px", border: "1px solid grey" }} className="input p-2" placeholder="Enter Your Email" onChange={changeHandler} />
                                    </div>
                                    <div className="row mb-1">
                                        <label className="mb-2">Subject</label>
                                        <input id="email" type="text" name="subject" required value={formState.subject} style={{ borderRadius: "8px", border: "1px solid grey" }} className="input p-2" placeholder="Enter Subject" onChange={changeHandler} />
                                    </div>
                                    <div className="row mb-1">
                                        <label className="mb-2">Message</label>
                                        <textarea id="message" type="text" name="message" required value={formState.message} style={{ borderRadius: "8px", border: "1px solid grey", }} className="input p-2" placeholder="Enter Message" onChange={changeHandler} />

                                    </div>
                                    {!loading && <input type="submit" value="Send Email" className='mailbtn mt-3' style={{ borderRadius: "8px ", padding: "8px 100px", border: "1px solid grey", marginLeft: "0px" }} />}
                                    {loading && <div style={{ margin: "10px 200px" }} className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>}
                                </form>
                            </div>
                        </div>
                    </div>

                </div>



            </div>

        </div>
    )
}

export default NewMail