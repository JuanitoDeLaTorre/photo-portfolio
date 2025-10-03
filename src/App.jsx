import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidebarMenu from './components/Sidebar';

import About from './pages/About';
// import CV from './pages/CV';
import Nature from './pages/Works/Nature';
// import Portraiture from './pages/Works/Portraiture';
// import Drone from './pages/Works/Drone';

export default function App() {
  return (
    // <h1>hi!</h1>
    <Router>
      <div style={{ display: 'flex' }}>
        {/* <h1>hi!</h1> */}
        <SidebarMenu />
        <div style={{ margin: '20vh auto auto 50px', flex: 1 }}>
          <Routes>
            <Route path="/" element={<About />} />
            {/* <Route path="/cv" element={<CV />} /> */}
            <Route path="/works/nature" element={<Nature />} />
            {/* <Route path="/works/portraiture" element={<Portraiture />} />
            <Route path="/works/drone" element={<Drone />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}