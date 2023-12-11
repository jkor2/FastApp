import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Routes, Route } from "react-router-dom";
import HomePage from './components/home';
import Articles from './components/articles';
import Community from './components/community';
import EightFast from './components/eighthour';
import Guides from './components/guides';
import Recipes from './components/recipes';
import ThirtySix from './components/thirtysix';
import TipsAndTricks from './components/tipsandtricks';
import TweleveHour from './components/twelevehour';
import TwentyFour from './components/twentyfour';
import WaterFast from './components/waterfast';
import Signup from './components/signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/articles" element={<Articles />}/>
          <Route path="/community" element={<Community />}/>
          <Route path="/resources/eighthour" element={<EightFast />}/>
          <Route path="/guides" element={<Guides />}/>
          <Route path="/recipes" element={<Recipes />}/>
          <Route path="/resources/thirtysixhour" element={<ThirtySix />}/>
          <Route path="/tipsandtricks" element={<TipsAndTricks />}/>
          <Route path="/resources/twelevehour" element={<TweleveHour />}/>
          <Route path="/resources/twentyfourhour" element={<TwentyFour />}/>
          <Route path="/resources/waterfast" element={<WaterFast />}/>
          <Route path="/signup" element={<Signup />}/>        
        </Routes>  
      </header>
    </div>
  );
}

export default App;
