import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage'
import UrunEkle from './pages/UrunEkle'
import UrunDuzenle from './pages/UrunDuzenle';
function App() {
  return (
    <div className="App">
    
     <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />                            
          <Route path="/urunekle" element={<UrunEkle />} />
          <Route path="/urunduzenle" element={<UrunDuzenle />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
