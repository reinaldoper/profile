import { Route, Routes } from "react-router-dom"
import Angular from "../pages/Angular"
import App from "../pages/App"
import Tech from "../pages/Tech"
import Movies from "../pages/Movies"
import Main from "../pages/Main"
import Responsive from "../pages/Responsive"

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/react" element={<App />} />
        <Route path="/angular" element={<Angular />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/responsive" element={<Responsive />} />
      </Routes>
    </>
  )
}

export default Routers
