import logo from './logo.svg';
import './App.css';
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/navbar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>  
      </header>
    </div>
  );
}

export default App;
