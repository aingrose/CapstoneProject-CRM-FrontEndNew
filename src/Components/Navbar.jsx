import 'bootstrap/dist/css/bootstrap.css' 
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <div className="container-fluid">
        <div className="navbar">
          <nav className="navbar navbar-expand-lg bg-body-tertiary w-100" style={{backgroundColor: "aqua", height: "100px"}}>
            <div className="container-fluid">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBfE-o1fRBMMaFMaq0A9XyhcwnAi_LSFjCLidkEOfrxemCK-vomVQ9jEZBXwAvdTt5O4&usqp=CAU" style={{width: "100px"}} alt=""/>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="d-flex justify-content-end mt-2">
                  <div className="navbar-nav w-100" style={{fontSize: "20px"}}>
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    <Link to = "/newRegister" className="nav-link active" >Register</Link>
                    <Link to="/login" className="nav-link active" >Login</Link> 
                    <Link to="/login" style={{marginLeft: "1000px"}} type="button" className="tgbtn btn btn-dark ">ADD CUSTOMER</Link>
                  </div>
                  <div style={{marginLeft: "0px"}}>
                   
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }

  

export default Navbar