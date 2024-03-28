import image from '../img/customer-service-technical-support-email-animation-png-favpng-UPqqATbTZJqbbN3A2uPQTnB0n-removebg-preview.png'

function FrontPage() {
  return (
    <div>
      <div className="fpage1 container-fluid d-flex w-100">
        <div className=" fpage2 row" style={{ backgroundColor: "#dceef6" }}>
          <div className="fpage3 col d-flex">
            <div className="fpage4" style={{ marginLeft: "160px", marginTop: "100px" }}>
              <h1 className="fpage5 saira-stencil" style={{ fontSize: "80px" }}>CX 365</h1>
              <h1 style={{ fontSize: "50px", fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }} className=" fpage6 mt-5">Multi Customer Relationship Management</h1>
              <p style={{ fontSize: "20px" }} className="fpage7 mt-5">We are focused on changing the way people do work</p>
              <button className="fpage8 btn btn-primary" style={{ padding: "14px 40px", marginTop: "90px" }}>Get Started</button>
            </div>
            <div className="fpageimg col" style={{ marginLeft: "70px" }}>
              <img src={image} style={{ width: "700px",marginTop:"40PX" }} alt="Customer Service" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
