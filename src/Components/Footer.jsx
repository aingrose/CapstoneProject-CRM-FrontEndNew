
function Footer() {
  return (
    <div>
      <div>
        <div className="lpage row">
          <div className="lpage1 col w-100">
            <div className="lpage2 col p-5" style={{ backgroundColor: "#4478c0", height: "240px", width: "100%", marginTop: "100px", display: "flex", color: "#dceef6" }}>
              <div className="lapge3 mb-5 me-5 col">
                <h1 className="cxf saira-stencil">CX-365</h1>
                <div className="cxf1 col mt-5" style={{ gap: "2px", display: "flex" }}>
                  <div className="col">
                    <i className="bi bi-instagram"></i>
                  </div>
                  <div className="col">
                    <i className="bi bi-twitter-x"></i>
                  </div>
                  <div className="col">
                    <i className="bi bi-facebook"></i>
                  </div>
                  <div className="col">
                    <i className="bi bi-linkedin"></i>
                  </div>
                </div>
              </div>
              <div className="f2 col">
                <h1>Quick Link</h1>
                <h4>Home</h4>
                <h4>How it works</h4>
                <h4>About Us</h4>
                <h4>Login</h4>
              </div>
              <div className="f2 col">
                <h1>Support</h1>
                <h4>FAQS</h4>
                <h4>Help</h4>
                <h4>Blogs</h4>
              </div>
              <div className="f2 col">
                <h1>Connect with Us</h1>
                <h4>Facebook</h4>
                <h4>Twitter</h4>
                <h4>Instagram</h4>
              </div>
            </div>
            <div className="row">
              <div style={{ color: "#fff", backgroundColor: "#4478c0" }}>
                <hr className="" style={{ backgroundColor: "#4478c0" }} />
              </div>
            </div>
            <div className="row " style={{ backgroundColor: "#4478c0", color: "white", textAlign: "center",  }}>
              <h4>Copyright © 2023 CX-365</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
