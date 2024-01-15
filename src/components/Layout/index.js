import './index.scss';
import Navigation from '../Navigation';
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
    <div className="App">
        <Navigation />
        <div className='page'>
            <Outlet />
        </div>
        <Footer />
    </div>
    )
}

export default Layout