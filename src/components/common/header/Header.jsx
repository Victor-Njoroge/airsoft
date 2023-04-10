import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'
import './Header.css'


const Header = () => {
    const [navbar, setnavbar] = useState(false)
  return (
    <><Head/>
    <header>
        <div className='container paddingSmall'>
            <nav >
                <ul className={navbar ? 'navbar' : 'flex'} onClick={() => setnavbar(false)}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about us'>About us</Link></li>
                    <li><Link to='/gallery'>Gallery</Link></li>
                    <li><Link to='/testimonials'>Testimonials</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
                <button className='barIco' onClick={() => setnavbar(!navbar)}>
                  {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}  
                </button>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Header