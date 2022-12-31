import './App.scss';
import { HashRouter, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <>
    <HashRouter>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/portfolio/" element={<Portfolio />} />
        <Route path="/resume/" element={<Resume />} />
        </Route>
    </HashRouter>
    </>
  );
}

export default App;
