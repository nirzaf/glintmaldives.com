import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Glint <span className="text-primary">Maldives</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Excellence in Civil, Painting, Electrical, Plumbing, Fire Systems & Solar
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-gray-400 hover:text-primary transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#mep" className="text-gray-400 hover:text-primary transition-colors">
                  MEP Studies
                </Link>
              </li>
              <li>
                <Link to="/services#civil" className="text-gray-400 hover:text-primary transition-colors">
                  Civil Works
                </Link>
              </li>
              <li>
                <Link to="/services#electrical" className="text-gray-400 hover:text-primary transition-colors">
                  Electrical & Plumbing
                </Link>
              </li>
              <li>
                <Link to="/services#fire" className="text-gray-400 hover:text-primary transition-colors">
                  Fire Systems
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">
              Male', Maldives
            </p>
            <p className="text-gray-400 mb-2">
              Phone: +960 XXX XXXX
            </p>
            <p className="text-gray-400 mb-2">
              Email: info@glintmaldives.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Glint Maldives. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
