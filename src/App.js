import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import SearchResults from './components/Search/Search.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import Details from './components/Details/Details.js';


class App extends React.Component {
   render () {
    return (
    <div>
      <SearchBar></SearchBar>
      <BrowserRouter>
          <Route path="/search/:search" exact component={SearchResults}/>
          <Route path="/items/:id" exact component={Details}/>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
