import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'
import { useState } from 'react';
import Home from './view/Home';
import Footer from './components/Footer';


function App() {

  const [darkmode, setDarkmode] = useState(false)

  const modeSelect = () => {    // function called from the button in the header componant to set dark/light modes across app
    darkmode == false ?    // ternary to check the current boolean and reverse it when function is called
      setDarkmode(true)
      :
      setDarkmode(false)

    console.log('darkmode is set to', darkmode)
  }

  return (
    <div className="App">



      <Switch>

        <Route path={'/'}>
          <Home darkmode={darkmode} />
        </Route>

        <Route path={'/projects'}>
          <Projects/>
        </Route>


      </Switch>

      <Footer/>

    </div>
  );
}

export default App;
