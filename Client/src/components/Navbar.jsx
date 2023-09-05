
import { Navbar } from 'flowbite-react';
import logo from "../assets/logo.png";

export default function DefaultNavbar() {
  return (
    <Navbar className='bg-gray-900'>
      <Navbar.Brand
        href="https://qoptars.com"
      >
        <img
          alt="Qoptars Logo"
          className="mr-3 h-6 sm:h-9"
          src={logo}
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="https://qoptars.com"
        >
          <p className='text-gray-100'>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link
          href="https://airfpv.in/" className='text-gray-100'
        >
          <p>
            AirFPV
          </p>
        </Navbar.Link>
        <Navbar.Link href="#" className='text-gray-100'>
          Services
        </Navbar.Link>
        <Navbar.Link href="#" className='text-gray-100'>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


