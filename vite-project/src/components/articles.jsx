const Articles = ()=>{
    return (
        // <!-- Articles -->
<div className="latest_article">
 
  <h1> Latest Articles </h1>

  <div className="articles_container">
    <div className="articles shadow bg-white">
      <img src="./assets/img/image-currency.jpg" alt="Currency"/>
      <div className="sub-article">
        <label htmlFor="">By Claire Robinson</label>
        <h4> Receive money in any currency with no fees</h4>
        <p>
          The world is getting smaller and we’re becoming more mobile. So why should you be
          forced to only receive money in a single …
        </p>
      </div>
    </div>

    <div className="articles shadow bg-white">
      <img src="./assets/img/image-restaurant.jpg" alt="Restaurant"/>
      <div className="sub-article">
        <label htmlFor=""> By Wilson Hutton</label>
        <h4> Treat yourself without worrying about money</h4>
        <p>
          Our simple budgeting feature allows you to separate out your spending and set
          realistic limits each month. That means you …
        </p>
      </div>
    </div>

    <div className="articles shadow bg-white">
      <img src="./assets/img/image-plane.jpg" alt="Plane"/>
      <div className="sub-article">
        <label htmlFor=""> By Wilson Hutton</label>
        <h4> Take your Easybank card wherever you go</h4>
        <p>
          We want you to enjoy your travels. This is why we don’t charge any fees on purchases
          while you’re abroad. We’ll even show you …
        </p>
      </div>
    </div>

    <div className="articles shadow bg-white">
      <img src="./assets/img/image-confetti.jpg" alt="Confetti"/>
      <div className="sub-article">
        <label htmlFor=""> By Claire Robinson</label>
        <h4> Our invite-only Beta accounts are now live! </h4>
        <p>
          After a lot of hard work by the whole team, we’re excited to launch our closed beta.
          It’s easy to request an invite through the site ...
        </p>
      </div>
    </div>
  </div>

</div>
    )
}

export default Articles