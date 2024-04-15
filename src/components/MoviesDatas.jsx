import videos from "../datas/videos"
import Svg from "../components/Svg"
import Section from "../components/Section"
import Footer from "../components/Footer"

const MoviesDatas = () => {



  const dataNow = () => {
    const data = new Date()
    const year = data.getFullYear()
    return year
  }

  const projects = videos.map(proj => (
    <div className="col" key={proj.id}>
      <div className="card shadow-sm">
        <video
          controls
          style={{ width: "100%", height: "225" }}
        >
          <source src={proj.video} type='video/webm' />
        </video>
        <div className="card-body">
          <p className="card-text">{proj.title}</p>
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

export default MoviesDatas
