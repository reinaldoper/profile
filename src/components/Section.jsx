import { Link } from "react-router-dom"

const Section = () => {
  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">This is my page, some of my projects.</h1>
          <p className="lead text-body-secondary">Navigate between the pages and see more of my projects.</p>
          <p>
            <Link to='/angular' className="btn btn-secondary my-2">Angular projects</Link>
            <Link to='/tech' className="btn btn-primary my-2">Techs</Link>
            <Link to='/' className="btn btn-secondary my-2">React projects</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Section
