import Svg from '../components/Svg';
import '../App.css'
import Footer from '../components/Footer';
import Section from '../components/Section';
import Header from '../components/Header';
import Carrosel from '../components/Carrosel';

const Main = () => {
  return (
    <>
      <Svg />

      <Header />

      <main data-bs-theme="dark">

        <Section />
        <Carrosel />

      </main>

      <Footer />
    </>
  )
}

export default Main
