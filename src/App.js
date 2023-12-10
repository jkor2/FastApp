import logo from './logo.svg';
import './App.css';
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Button>Test Button</Button>
  
  
      </header>
    </div>
  );
}

export default App;
