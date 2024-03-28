// import axios from "axios"
// import { useEffect } from "react";
// import { useState } from "react";

// import { Navigate } from "react-router-dom";
// import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";
// Table.propTypes = {
//   handleContact: PropTypes.func.isRequired, // Validate handleContact prop as a function and make it required
// };

// function Table({handleContact}) {
//   let [datas, setadata] = useState([]);
//   let [loading, setLoading] = useState(true);



//   useEffect(() => {
//     let fetchdata = async () => {

//       try {
//         setLoading(true)
//         let response = await axios.get("http://localhost:4000/clients");
//         console.log(response.data);
//         setadata(response.data)
//         setLoading(false)
//       }
//       catch (error) {
//         console.log(error)
//       }
//     }

//     fetchdata();
//   }, [])



//   return (

//     <div>
//       <h2 style={{ textAlign: "center" }}>Users Data Table</h2>
//       {loading ? (<div className="spinner-border" style={{ width: "3rem", height: "3rem", textAlign: "center", margin: "100px 750px" }} role="status">
//         <span className="visually-hidden">Loading...</span>
//       </div>) :

//         (

//           <table className="table table-striped">
//             <thead>
//               <tr>
//                 <th>S.no</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Gender</th>
//                 <th>P.No</th>
//                 <th>State</th>
//                 <th>City</th>
//                 <th>Address</th>
//                 <th>Contact</th>

//               </tr>
//             </thead>

//             <tbody>

//               {datas.map((clients, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{clients.Name}</td>
//                   <td>{clients.Email}</td>
//                   <td>{clients.Gender}</td>
//                   <td>{clients.Contact}</td>
//                   <td>{clients.State}</td>
//                   <td>{clients.City}</td>
//                   <td>{clients.Address}</td>
//                   <td>{<Link to="/Mail" className="btn btn-primary" onClick={() =>  {handleContact(clients.Email),<Navigate to = "/Mail"></Navigate>}}>Email</Link>}</td>

//                 </tr>
//               ))}


//             </tbody>

//           </table>

//         )

//       }

//     </div>
//   )
// }

// export default Table

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

Table.propTypes = {
  handleContact: PropTypes.func.isRequired, // Validate handleContact prop as a function and make it required
};

function Table({ handleContact }) {
  let [datas, setadata] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetchdata = async () => {
      try {
        setLoading(true);
        let response = await axios.get("https://capstoneproject-crm-backend-2.onrender.com/clients");
        console.log(response.data);
        setadata(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchdata();
  }, []);

  return (
    <div className="table-responsive">
      <h2 style={{ textAlign: "center" }}>Users Data Table</h2>
      {loading ? (
        <div
          className="spinner-border"
          style={{
            width: "3rem",
            height: "3rem",
            textAlign: "center",
            margin: "100px 750px",
          }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>P.No</th>
              <th>State</th>
              <th>City</th>
              <th>Address</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((clients, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{clients.Name}</td>
                <td>{clients.Email}</td>
                <td>{clients.Gender}</td>
                <td>{clients.Contact}</td>
                <td>{clients.State}</td>
                <td>{clients.City}</td>
                <td>{clients.Address}</td>
                <td>
                  {
                    <Link
                      to="/Mail"
                      className="btn btn-primary"
                      onClick={() => {
                        handleContact(clients.Email);
                        <Navigate to="/Mail"></Navigate>;
                      }}
                    >
                      Email
                    </Link>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
