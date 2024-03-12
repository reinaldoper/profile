import { Route, Routes } from "react-router-dom"
import Angular from "../pages/Angular"
import App from "../pages/App"
import Tech from "../pages/Tech"

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/angular" element={<Angular />} />
        <Route path="/tech" element={<Tech />} />
      </Routes>
    </>
  )
}

export default Routers
