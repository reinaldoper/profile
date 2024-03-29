import Svg from "../components/Svg"
import Header from "../components/Header"
import Section from "../components/Section"
import Footer from "../components/Footer"
import data from "../datas/angular"


const AngularProjects = () => {
  const handlers = (link) => {
    window.open(link, '_blank');
  }

  const dataNow = () => {
    const data = new Date()
    const year = data.getFullYear()
    return year
  }

  const projects = data.map(proj => (
    <div className="col" key={proj.id}>
      <div className="card shadow-sm">
        <img src={proj.image} className="bd-placeholder-img card-img-top" style={{ width: "100%", height: "225" }} />
        <div className="card-body">
          <p className="card-text">{proj.title}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button onClick={() => handlers(proj.link)} type="button" className="btn btn-sm btn-outline-secondary">View</button>
            </div>
            <small className="text-body-secondary">{dataNow()}</small>
          </div>
        </div>
      </div>
    </div>
  ))
  return (
    <>
      <Svg />
      <Header />
      <main data-bs-theme="dark">

        <Section />

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
              {projects}
            </div>
          </div>
        </div>

      </main>

      <Footer />

    </>
  )
}

export default AngularProjects
