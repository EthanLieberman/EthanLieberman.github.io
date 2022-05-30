import style from './App.module.css';
import { Link, Route, Switch } from 'react-router-dom'
import { useState } from 'react';
import Home from './view/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import Projects from './view/Projects';


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
    <div className={style.bg}>
      <div className={`${style.Main} ${style.test}`}>

        <Header />

        <div style={{ display: 'flex' }}>
          <LeftMenu />

          <Switch>

            <Route path={'/home'}>
              <Home darkmode={darkmode} />
            </Route>

            <Route path={'/projects'}>
              <Projects/>
            </Route>


          </Switch>

        </div>


        <Footer />

      </div>
    </div>
  );
}

export default App;
