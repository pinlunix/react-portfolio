import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Projects from './components/Projects'
import Resume from './components/Resume'
import ASM from './components/asmProject.js'
import Comics from './components/comics.js'
import LaHistoria from './components/laHistoria.js'
import WVS from './components/mapProject.js'
import Plane from './components/planeProject.js'
import Rhythmry from './components/rhythmry.js'
import DebuggerGame from './components/debuggerGame.js'
import UGG from './components/ugg.js'


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
