import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Projects from './components/Projects'
import Resume from './components/Resume'
import ASM from './components/ASM'
import Comics from './components/Comics'
import LaHistoria from './components/LaHistoria'
import WVS from './components/WVS'
import Plane from './components/Plane'
import Rhythmry from './components/Rhythmry'
import DebuggerGame from './components/Debugger'
import UGG from './components/UGG/'


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        
        <Route path="/ASM" element={<ASM />} />
        <Route path="/LaHistoria" element={<LaHistoria />} />
        <Route path="/Rhythmry" element={<Rhythmry />} />
        <Route path="/WVS" element={<WVS />} />
        <Route path="/Plane" element={<Plane />} />
        <Route path="/Comics" element={<Comics />} />
        <Route path="/DebuggerGame" element={<DebuggerGame />} />
        <Route path="/UGG" element={<UGG />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
