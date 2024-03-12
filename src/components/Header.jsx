import { useState } from "react"
import { About } from '../about/About';
import eu from '../images/eu.png';

const Header = () => {
  const [toogle, setToogle] = useState(false)
  return (
    <>
      <header data-bs-theme="dark">
        <div className={`text-bg-dark collapse ${toogle ? 'show' : null}`} id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4>About</h4>
                <p className="text-body-secondary">{About}</p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4>Contact</h4>
                <ul className="list-unstyled">
                  <li><a target='_blank' href="https://github.com/reinaldoper" className="text-white">Follow on GitHub</a></li>
                  <li><a target='_blank' href="https://www.linkedin.com/in/reinaldo-pereira/" className="text-white">Like on Linkedin</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container">
            <div className="navbar-brand d-flex align-items-center">
              <img src={eu} style={{ width: "20px", height: "20px" }} alt="eu.png" />
              <strong>Album</strong>
            </div>
            <button onClick={() => setToogle(!toogle)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
