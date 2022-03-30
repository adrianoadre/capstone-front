import { Route,Routes } from 'react-router-dom';
import Navigation from './layout/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';


//pages
import Analytics from './pages/Analytics';
import Community from './pages/Community';
import Inventory from './pages/Inventory';
import LandingPage from './pages/LandingPage';
import Records from './pages/Records';
import Itemforecast from './pages/ItemForcast';

function App() {

  return (

    
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/analytics' element={<Analytics/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/records' element={<Records/>}/>
        <Route path='/itemforecasting' element={<Itemforecast/>}/>
      </Routes>
    </div>
  );
}

export default App;
