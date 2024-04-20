import slogan from '../assets/slogan.jpg';

const Footer = () => {
  return (
    <footer className="text-body-secondary py-5 footer">
      <div className="container-footer">
        <p className="mb-1">All rights reserved &copy; reinaldo.santos@reinaldo-dev.com</p>
        <img src={ slogan } alt="Your company slogan" title='Slogan'/>
      </div>
    </footer>
  )
}

export default Footer
