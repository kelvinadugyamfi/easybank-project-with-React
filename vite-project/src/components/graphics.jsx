const Graphics = ()=>{
    return (
<>
<div className="container-fluid  position-relative d-block">
 <div className="position-absolute p-5 mt-5">
    <div>
      <h1 id="textBox">Next generation <br/>digital banking</h1>
    </div>
    <div>
      <p>Take your financial life online. Your Easybank account will be <br/>
         a one-stop-shop for spending, saving, budgeting, investing, <br/>
          and much more.</p>
    </div>
    <div>
      <button type="button" className="btn me-5 rounded-pill w-50">Request Invite</button>  
    </div>
  </div>
    <img src="./assets/img/image-mockups.png" alt="" className="z-2 w-50 position-absolute end-0"/>
    <img src="./assets/img/bg-intro-desktop.svg" alt="" className="z-1 w-75 position-absolute end-0" id="fstPic"/>  
</div> 
<div className="px-5 bg-body-tertiary" id="sndBox">
  <div className="pt-5">
    <h1 className="fw-normal">
      Why choose Easybank?
    </h1>
  </div>
  <div>
    <p className="text-secondary">
      We leverage Open Banking to turn your bank account into your <br/>
      financial hub. Control your finances like never before.
    </p>
  </div>
   <div className="section-container row" id="cards">
        <div className="section-grid col-3">
          <img src="./assets/img/icon-online.svg" alt=""/>
          <h4 className="pt-3"> Online Banking</h4>
          <p>
            Our modern web and mobile <br/> applications allow you to keep <br/> track of your finances
            wherever you <br/> are in the world.
          </p>
        </div>
        <div className="section-grid col-3">
          <img src="./assets/img/icon-budgeting.svg" alt=""/>
          <h4 className="pt-3"> Simple Budgeting</h4>
          <p>
            See exactly where your money <br/> goes each month. Receive <br/> notifications when you’re
            close to <br/> hitting your limits.
          </p>
        </div>
        <div className="section-grid col-3">
          <img src="./assets/img/icon-onboarding.svg" alt=""/>
          <h4 className="pt-3"> Fast Onboarding</h4>
          <p>
            We don’t do branches. Open your <br/> account in minutes online and start <br/> taking control
            of your finances <br/> right away.
          </p>
        </div>
        <div className="section-grid col-3">
          <img src="./assets/img/icon-api.svg" alt=""/>
          <h4 className="pt-3"> Open API </h4>
          <p>
            Manage your savings, investments, <br/> pension, and much more from one <br/> account. Tracking
            your money has <br/> never been easier.
          </p>
        </div>
      </div>
    </div> 

 </>
    )
}

export default Graphics