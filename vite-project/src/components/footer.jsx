

const Footer = ()=>{
    return (
        // Footer 

<footer className="bg-dark p-4 position-relative">
  <div className="footer-grid">
    <img src="./assets/img/logo.svg" alt="Logo" className="footer-logo p-4"/>

    <div className="icons p-4 w-25">
      <a href="https://web.facebook.com/Mercyoluwap/" target="_blank" className="text-decoration-none">
        <img src="./icon-facebook.svg" alt=""/>
      </a>

      <a href="#" target="_blank" className="text-decoration-none">
        <img src="./assets/img/icon-youtube.svg" alt="" />
      </a>

      <a href="https://twitter.com/codewithmercy" target="_blank" className="text-decoration-none">
        <img src="./assets/img/icon-twitter.svg" alt=""/>
      </a>

      <a href="#" target="_blank" className="text-decoration-none">
        <img src="./assets/img/icon-pinterest.svg" alt=""/>
      </a>

      <a href="www.instagram.com/codewithmercy" target="_blank" className="text-decoration-none">
        <img src="./assets/img/icon-instagram.svg" alt=""/>
      </a>
    </div>
  </div>

  <div className="footer-grid w-75 position-absolute top-0 end-0 p-5">
    <div className="row">
      <div className="col-md-3">
        <nav className="footer-nav">
          <li><a href="#" className="text-white text-decoration-none"> About Us </a></li>
          <li><a href="#" className="text-white text-decoration-none"> Contact </a></li>
          <li><a href="#" className="text-white text-decoration-none"> Blog </a></li>
        </nav>
      </div>
      <div className="col-md-3">
        <nav className="footer-nav">
          <li><a href="#" className="text-white text-decoration-none"> Careers  </a></li>
          <li><a href="#" className="text-white text-decoration-none">  Support </a></li>
          <li><a href="#" className="text-white text-decoration-none"> Privacy Policy </a></li>
        </nav>
      </div>
    </div>
  </div>
  
  <div className="copyright position-absolute top-0 end-0 p-5">
    <button type="button" className="btn rounded-pill mb-4 p-2 w-100">Request Invite</button>
    <p className="text-white">© Easybank. All Rights Reserved</p>
  </div>
</footer>

    )
}

export default Footer;