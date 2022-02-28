import './App.css';
import Navbar from './components/Navbar';
import Titles from './components/Titles';
import Button from './components/Button';
import Images from './components/Images';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div className='titles'>
          <Titles />
        </div>
        <div className='button-div'>
          <Button />
        </div>
      </header>
      <Images />
    </div>
  );
}

export default App;
