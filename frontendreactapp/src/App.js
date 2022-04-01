
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListComponents from './components/ListComponents';
import CreateComponent from './components/CreateComponent';
import ViewComponent from './components/ViewComponent';
import UpdateComponent from './components/UpdateComponent';
import { Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Switch>
              <Route path="/" exact component={ListComponents } ></Route>
              <Route path="/users" component={ListComponents } ></Route>
              <Route path="/add-user/:id"  component={CreateComponent }></Route>
              <Route path="/view-user/:id" component={ViewComponent }></Route>
              <Route path="/update-user/:id" component={UpdateComponent } ></Route>
            </Switch>
        </div>
        <br/>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
