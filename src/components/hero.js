import Footer from './footer'
import Main from './section/main'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Gallerey from './section/gallery'
import Contacts from './section/contacts'
import Help from './section/help'
import Dog from './section/dog'
import About from './section/about'

const Hero = () => {
    return (
        <div className='Hero'>
            <BrowserRouter>
                <nav className='Navigation'>
                    <Link to='/'>Головна</Link>
                    <Link to='/gallerey'>Галерея</Link>
                    <Link to='/dog'>Собаки з притулку</Link>
                    <Link to='/help'>Допомога притулку</Link>
                    <Link to='/contacts'>Контакти</Link>
                    <Link className='About' to='/about'>Про автора</Link>
                </nav>
                <div className='Main'>
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/gallerey' element={<Gallerey />} />
                        <Route path='/dog' element={<Contacts />} />
                        <Route path='/help' element={<Help />} />
                        <Route path='/contacts' element={<Dog />} />
                        <Route path='/about' element={<About />} />
                    </Routes>
                </div>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default Hero