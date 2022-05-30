import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import ListPersonComponent from './components/ListPersonComponent';
import ListPercoComponent from './components/ListPercoComponent copy';
import ListSkladComponent from './components/ListSkladComponent';
import AddSkladComponent from './components/AddSkladComponent';
import DeskPercoComponent from './components/DeskPercoComponent';
import ListGroupComponent from './components/ListGroupComponent';
import AddDoramaComponent from './components/AddDoramaComponent';
import AddTagdoramaComponent from './components/AddTagdoramaComponent';
import ListDoramaComponent from './components/ListDoramaComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />}></Route>
            <Route path="/employees" element={<ListEmployeeComponent />}></Route>
            <Route path="/add-employee" element={<AddEmployeeComponent />}></Route>
            <Route path="/edit-employee/:id" element={<AddEmployeeComponent />}></Route>
            <Route path='/perco' element={<ListPercoComponent/>}></Route>
            <Route path="/as" element={<ListPersonComponent />}></Route>
            <Route path="/sklad" element={<ListSkladComponent />}></Route>
            <Route path="/add-sklad" element={<AddSkladComponent />}></Route>
            <Route path="/edit-sklad/:id" element={<AddSkladComponent />}></Route>
            <Route path="/group" element={<DeskPercoComponent />}></Route>
            <Route path="/usergroup/:subid/:dateto/:datedo" element={<ListGroupComponent />}></Route>
            <Route path="/dorama" element={<AddDoramaComponent />}></Route>
            <Route path="/tagdorama" element={<AddTagdoramaComponent />}></Route>
            <Route path="/doramas" element={<ListDoramaComponent />}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
