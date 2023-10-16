const Navbar = ()=>{
    return (
        // <!-- navbar -->
        <nav className="navbar navbar-expand-lg">
         <div className="container-fluid p-2">
           <img src="./assets/img/logo easy.svg" alt="" className="img-fluid ms-5"/>
           
           <div className="collapse navbar-collapse mx-5 justify-content-evenly">
             <ul className="navbar-nav">
               <li className="nav-item ">
                 <a className="nav-link" aria-current="page" href="#">Home</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#">About</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#">Contact</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#">Blog</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#">Careers</a>
               </li>
             </ul>
           </div>
           <button type="button" className="btn me-5 rounded-pill">Request Invite</button>  
         </div>
        </nav>
    )
}

export default Navbar