import React, { useEffect, Fragment } from 'react';
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddButton from './components/layout/AddButton'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/techs/AddTechModal'
import TechListModal from './components/techs/TechListModal'
import { Provider } from 'react-redux';
import store from './store'

import 'materialize-css/dist/css/materialize.min.css' // take file from "node_modules" for the CSS from this framework
import Materealize from 'materialize-css/dist/js/materialize.min.js' // take file from "node_modules" for the CSS fro m this framework

function App() {

  // This will initialize the framework front-end "Materialize", when the component mount
  useEffect(() => {
    Materealize.AutoInit(); 
  }, [])

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddButton />
          <AddLogModal /> 
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
