import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}/>
    </Routes>
    <p>hello!</p>
    </>
  );
}

export default App;
