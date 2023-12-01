import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  return (
    <>
    <p>text inside app but before routes</p>
    <Routes>
      <p> text inside Routes of APp</p>
      <Route path="/" element={<Layout />}/>
    </Routes>
    </>
  );
}

export default App;
