import './App.scss';
import Header from '../Components/Header';
import Repository from '../Components/Repository';
import Send from '../Components/Send';
import Request from '../Components/Request';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <div className= 'layout'>

        <div className='App-container'>
        <BrowserRouter>
          <div  className ='App-header'>
            <Header/>
          </div>
          <div className='App-content'>
            <Switch>
              <Route path="/send" exact>
                <Send />
              </Route>
              <Route path="/request" exact>
                <Request />
              </Route>
              <Route path="/repository" exact>
                <Repository />
              </Route>
            </Switch>
          </div>
          
      </BrowserRouter>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

      </div>
      
    </>
  );
}

export default App;
