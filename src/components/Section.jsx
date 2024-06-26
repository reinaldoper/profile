import { Link, useLocation } from "react-router-dom";
import '../App.css';

const Section = () => {

  const location = useLocation()

  const locals = location.pathname
  
  const estilo = {
    "--bs-nav-link-color": "rgba(255, 255, 255, .75)",
    "--bs-nav-link-hover-color": "#fff",
    "--bs-nav-pills-link-active-color": "var(--bs-primary)",
    "--bs-nav-pills-link-active-bg": "var(--bs-white)"
  };


  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light text-body-secondary">This is my page, some of my projects.</h1>
          <p className="lead text-body-secondary">Navigate between the pages and see more of my projects.</p>
          
          <div className="p-4 border rounded-3 mb-4">
            <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style={estilo}>
              <li className="nav-item" role="presentation">
                <Link to='/' className={`nav-link rounded-5 ${locals === '/'? 'active': ''}`} id="home-tab2" data-bs-toggle="tab" type="button" role="tab">Home</Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link to='/react' className={`nav-link rounded-5 ${locals === '/react'? 'active': ''}`} id="home-tab2" data-bs-toggle="tab" type="button" role="tab">React</Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link to='/tech' className={`nav-link rounded-5 ${locals === '/tech'? 'active': ''}`} id="profile-tab2" data-bs-toggle="tab" type="button" role="tab">Tech</Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link to='/angular' className={`nav-link rounded-5 ${locals === '/angular'? 'active': ''}`} id="contact-tab2" data-bs-toggle="tab" type="button" role="tab">Angular</Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link to='/movie' className={`nav-link rounded-5 ${locals === '/movie'? 'active': ''}`} id="contact-tab2" data-bs-toggle="tab" type="button" role="tab">Videos</Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link to='/responsive' className={`nav-link rounded-5 ${locals === '/responsive'? 'active': ''}`} id="contact-tab2" data-bs-toggle="tab" type="button" role="tab">Mobile</Link>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Section;
