import './index.scss';
import Navigation from '../Navigation';
import Home from '../Home';

const Layout = () => {
    return (
    <div className="App">
        <Navigation />
        <div className='page'>
            <Home />
        </div>
    </div>
    )
}

export default Layout