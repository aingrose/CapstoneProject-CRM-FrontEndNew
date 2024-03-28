
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

  const navingate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      gender: [],
      contact: "",
      state: "",
      city: "",
      address: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Required Name";
      }

      if (!values.email) {
        errors.email = "Required Email";
      }

      if (!values.gender.length) {
        errors.gender = "Required Gender";
      }

      if (!values.contact) {
        errors.contact = "Required Contact";
      }

      if (!values.state) {
        errors.state = "Required State";
      }

      if (!values.city) {
        errors.city = "Required City";
      }

      if (!values.address) {
        errors.address = "Required Address";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post('https://capstoneproject-crm-backend-2.onrender.com/register', values);
        console.log(response);
        if (response.status === 200) {
          alert('Registration successful');
          navingate("/table")
          
        } else {
          alert('Registration failed');
          console.log("Registration failed")
        }
      } catch (error) {
        console.log('Error during registration:', error);
      }
    }
  });

  return (
    <div>
      <div className="container mt-1">
        <div className="img row">
          <div className="img col">
            <img className="imagereg" src="https://media.istockphoto.com/id/1256603011/photo/business-network-concept-customer-support-shaking-hands.jpg?s=170667a&w=0&k=20&c=7vnn3Nz0HVhUm3WPozJKJe5kCcI31-Gr5Znbsu1_MRc=" style={{ height: '700px', width: '500px' }} alt="" />
          </div>
          <div className="col" >
            <div style={{ marginLeft: '-10px' }}>
              <h1>Welcome to CX356</h1>
              <p>Create your account for free now</p>
            </div>

            <form action="" style={{ textAlign: 'start' }} onSubmit={formik.handleSubmit}>
              <div className="row">
                <label className="mb-1" htmlFor="name">NAME</label>
                <div className="col mb-1">
                  <input id="name" style={{ marginLeft: '-10px', borderRadius: "8px", border: "1px solid grey" }} className="input p-2 w-50 " type="text" placeholder="Enter Name" name="name" value={formik.values.name} onChange={formik.handleChange} />
                  {formik.errors.name && <div className="error" style={{color:"red"}}>{formik.errors.name}</div>}
                </div>
              </div>
              <div className="row mb-2">
                <label className="mb-2" htmlFor="email">EMAIL</label>
                <input id="email" type="text" name="email" style={{ borderRadius: "8px", border: "1px solid grey" }} className="input p-2" placeholder="someone@example.com" value={formik.values.email} onChange={formik.handleChange}  />
                {formik.errors.email && <div className="error" style={{color:"red"}}>{formik.errors.email}</div>}
              </div>
              <div className="row mb-1 mt-3 ">
                <label className="mb-2" htmlFor="gender">GENDER</label>
                <div>
                  <input id="male" type="checkbox" name="gender" value="Male" onChange={formik.handleChange} />
                  <label htmlFor="male" style={{marginLeft:"2px"}}>Male</label>
               
                  <input id="female" type="checkbox"  style={{marginLeft:"10px"}} name="gender" value="Female" onChange={formik.handleChange} />
                  <label htmlFor="female">Female</label>
                
                  <input id="other" type="checkbox"  style={{marginLeft:"10px"}} name="gender" value="other" onChange={formik.handleChange}  />
                  <label htmlFor="other">Other</label>
                </div>
                {formik.errors.gender && <div className="error" style={{color:"red"}}>{formik.errors.gender}</div>}
              </div>

              <div className="row mb-2 mt-3">
                <label className="mb-2" htmlFor="contact">CONTACT NUMBER</label>
                <input type="text" className="input p-2" name="contact" style={{ borderRadius: "8px", border: "1px solid grey" }} placeholder="Enter Contact Number" value={formik.values.contact} onChange={formik.handleChange} />
                {formik.errors.contact && <div className="error" style={{color:"red"}}>{formik.errors.contact}</div>}
              
              </div>

              <div className="row mb-1">
                <label className="mb-2" htmlFor="state">STATE</label>
                <input type="text" className="input p-2" name="state" style={{ borderRadius: "8px", border: "1px solid grey" }} placeholder="Enter State" value={formik.values.state} onChange={formik.handleChange} />
                {formik.errors.state && <div className="error" style={{color:"red"}}>{formik.errors.state}</div>}
              
              </div>
              <div className="row mb-1">
                <label className="mb-2" htmlFor="city">CITY</label>
                <input type="text" className="input p-2" name="city" style={{ borderRadius: "8px", border: "1px solid grey" }} placeholder="Enter City" value={formik.values.city} onChange={formik.handleChange}  />
                {formik.errors.city && <div className="error" style={{color:"red"}}>{formik.errors.city}</div>}
              </div>
              <div className="row mb-2">
                <label className="mb-2" htmlFor="address">ADDRESS</label>
                <textarea className="input p-2" name="address" style={{ borderRadius: "8px", border: "1px solid grey" }} placeholder="Enter ADDRESS" value={formik.values.address} onChange={formik.handleChange} ></textarea>
                {formik.errors.address && <div className="error" style={{color:"red"}}>{formik.errors.address}</div>}
              </div>
              <button className="btn btn-success  w-10" style={{ marginLeft: '-10px', borderRadius: "8px", border: "1px solid grey", padding: "px 20px" }}> Submit </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
