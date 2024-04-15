import tecnologias from "../datas/tecnologias"
import Svg from "../components/Svg"
import Section from "../components/Section"
import Footer from "../components/Footer"

const Tecnologias = () => {

  const dataNow = () => {
    const data = new Date()
    const year = data.getFullYear()
    return year
  }

  const projects = tecnologias.map(proj => (
    <div className="col" key={proj.id}>
      <div className="card shadow-sm">
        <img src={proj.src} className="bd-placeholder-img card-img-top" style={{ width: "30%", height: "225" }} />
        <div className="card-body">
          <p className="card-text">{proj.titulo}</p>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-body-secondary">{dataNow()}</small>
          </div>
        </div>
      </div>
    </div>
  ))
  return (
    <>
      <Svg />
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

export default Tecnologias
